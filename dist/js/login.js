/**
 * LOGIN
 */

const SERVER_URL = config.serverUrl;
const LOGIN_REDIRECT_URL = config.login.redirectUrl;
const GROUP_ALIAS = config.groupAlias;
const SESSION_GROUP_ALIAS = localStorage.getItem("sessionAlias");
const URL_QUERY = new URLSearchParams(window.location.search);

// Elements
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-button");
const loginNotice = document.getElementById("login-notice");

/**
 * Create client
 */
let client;
try {
    client = new window.DriveWorksLiveClient(SERVER_URL);
} catch (error){
    console.log(error);
}

/**
 * On page load
 */
(async function() {

    // Check localStorage support (show warning if not e.g. <= iOS 10 Private Window)
    if (localStorageSupported()){

        try {

            // Check if logged in, and redirect
            checkExistingLogin();

            // Display an notices passed e.g. logged out
            showLoginNotice();

        } catch (error) {
            handleGenericError(error);
        }

        return;
    }

    // Disable login and show notice
    document.getElementById("login-button").disabled = true;
    loginNotice.innerText = "Please use a non-private window on this device.";
    loginNotice.classList.add("error", "is-shown");

})();

/**
 * Custom form submission handling
 */
loginForm.addEventListener("submit", handleLogin);

/**
 * Handle login with server, store valid Session
 *
 * @param evt Form submit event
 */
async function handleLogin(evt) {

    // Prevent default form handling
    evt.preventDefault();

    // Show error if cannot connect to client
    if (!client){
        loginError(false, "Cannot connect to client");
        return;
    }

    // Get credentials
    const inputUsername = document.getElementById("login-username").value;
    const inputPassword = document.getElementById("login-password").value;

    const userCredentials = {
        username: inputUsername,
        password: inputPassword
    };

    try {

        // Show loading state, reset notice
        loginButton.classList.add("is-loading");
        hideLoginNotice();

        // Start Session
        const result = await client.loginGroup(GROUP_ALIAS, userCredentials);

        // Show error is login failed
        if (!result){
            loginError(false, "No connection found.");
            return;
        }

        // Store login details to localStorage
        localStorage.setItem("sessionId", result.sessionId);
        localStorage.setItem("sessionAlias", GROUP_ALIAS);
        localStorage.setItem("sessionUsername", inputUsername);

        // Return to previous location (if redirected to login)
        const returnUrl = URL_QUERY.get("returnUrl");
        if (returnUrl && config.loginReturnUrls){
            window.location.href = `${window.location.origin}/${decodeURIComponent(returnUrl)}`;
            return;
        }

        // Redirect to default location
        window.location.href = LOGIN_REDIRECT_URL;

    } catch (error) {
        loginError(error);
    }

}

function loginError(error, noticeText){

    if (error){
        handleGenericError(error);
    }

    // Remove loading state
    loginButton.classList.remove("is-loading");

    let notice = "Invalid login, please try again.";
    if (noticeText) {
        notice = noticeText;
    }

    // Show client error
    setLoginNotice(notice, "error");
    showLoginNotice();

}

/**
 * Set login screen notice
 */
function setLoginNotice(text, state) {

    if (!state) {
        state = "info";
    }

    const notice = JSON.stringify({ text: text, state: state });
    localStorage.setItem("loginNotice", notice);

}

/**
 * Show/hide notice on login form
 */

function showLoginNotice(){

    // Read stored notice
    const notice = JSON.parse(localStorage.getItem("loginNotice"));

    if (notice){

        let state = notice.state;
        if (!state){
            state = "neutral";
        }

        // Display feedback
        loginNotice.innerText = notice.text;
        loginNotice.classList.remove("error", "success", "neutral");
        loginNotice.classList.add(state, "is-shown");

        // Clear message
        localStorage.removeItem("loginNotice");

    }

}

function hideLoginNotice(){
    loginNotice.classList.remove("is-shown");
}

/**
 * Toggle password visibility
 */
const passwordToggle = document.getElementById("password-toggle");
passwordToggle.onclick = function () {

    const passwordInput = document.getElementById("login-password");
    const currentType = passwordInput.type;

    if (currentType === "password"){
        passwordInput.type = "text";
        passwordToggle.innerHTML = "<svg viewBox=\"0 0 512 512\"><use xlink:href=\"#eye-closed\"/></svg>Hide";
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = "<svg viewBox=\"0 0 512 512\"><use xlink:href=\"#eye-open\"/></svg>Show";
    }

};

/**
 * Check existing login (redirect inside app if true)
 */
async function checkExistingLogin(){

    if (SESSION_GROUP_ALIAS){

        try {

            // Test connection
            await client.getProjects(SESSION_GROUP_ALIAS, "$top=1");

            // Redirect to initial location
            window.location.replace(LOGIN_REDIRECT_URL);

        } catch (error) {
            handleGenericError(error);
        }

    }

}

/**
 * Check for localStorage support (to store credentials)
 *
 * Example: Incognito (Private) Windows in <= iOS 10 do not allow use of localStorage (errors when accessed)
 */
function localStorageSupported() {

    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e){
        return false;
    }

}

/**
 * Handle generic errors e.g. tryCatch
 */
function handleGenericError(error) {
    console.log(error);
}