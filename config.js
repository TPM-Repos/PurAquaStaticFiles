// Update these values to match those of your Server URL & DriveWorks Group Alias

const config = {
    // the full path the site running the DriveWorks Live API
    serverUrl: "https://dw21api.tpmautomation.com",
    // The default alias for the DriveWorks Group
    // This is a custom string that must match the name in the ConfigUser.xml file
    groupAlias: "PurAquaDEV",
    // (Optional) Configure ping & update intervals - in seconds
    // A Specification will timeout after a configured period of inactivity (see DriveWorksConfigUser.xml).
    // This function prevents a Specification timing out as long as the page is in view.
    // Disable the ping by setting to 0
    specificationPingInterval: 0,
    // (Optional) Enter custom redirect URLs for login/logout and Project/DriveApp close/cancel
    folder: "PurAqua",
    login: {
        redirectUrl: "projects.html",
    },
    logout: {
        redirectUrl: "index.html",
    },
    project: {
        redirectOnClose: "details.html",
        redirectOnCancel: "projects.html",
    },
    // (Optional) Configure 'Run' view
    run: {
        showWarningOnExit: true, // Toggle warning dialog when exiting "Run" view with potentially unsaved changes (where supported)
        loadCustomProjectAssets: {
            scripts: false,
            styles: false,
        },
    },
    // (Optional) Configure 'Details' view
    details: {
        updateInterval: 5, // Interval to refresh content - in seconds
        showStartNewSpecificationAction: true,
    },
    // (Optional) Configure the query function
    // Enter a default Group Alias and/or Project name to be used (when none are passed in the query string)
    // Choose how sessions are handled
    query: {
        defaultGroupAlias: "PurAquaDEV",
        defaultProjectName: "",
        autoLogin: false,
        requireNewSession: true,
        requireExactAlias: false,
    },
    loginReturnUrls: true, // Toggle appending return urls to restore the previous location when redirected to the login form 
    locale: "en-US", // Set the default locale for displaying dates and numbers
    dateFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    },
    // Whether to show debugging information in the console
    debug: false,
    allowSingleSignOn: false,
    accountManagement: {
        allowForgotPassword: false,
        allowChangePassword: false,
        allowCreateAccount: false,
    },
    logo: {
        login: "dist/img/PuraquaLogo_1_1.png",
        sidebar: "dist/img/PuraquaLogo_1_1.png",
    },

};
