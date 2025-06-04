const config = {
	version: "1.3.0",
	// the full path the site running the DriveWorks Live API
	// serverUrl: "https://dw21.api.yourdomain.com",
	serverUrl: "https://dw22.api.tpmautomation.com",
	// The default alias for the DriveWorks Group
	// This is a custom string that must match the name in the ConfigUser.xml file
	groupAlias: "PurAquaDEV",
	guestAlias: "PurAquaDEVGuest",
	// (Optional) Configure ping & update intervals - in seconds
	// (Optional) Set Specification ping interval - in seconds
	// A Specification will timeout after a configured period of inactivity (see DriveWorksConfigUser.xml).
	// This function prevents a Specification timing out as long as the page is in view.
	// Disable the ping by setting to 0
	specificationPingInterval: 30,
	// (Optional) Enter custom redirect URLs for login/logout and Project/DriveApp close/cancel
	login: {
		redirectUrl: "projects.html",
		// set this if you want to redirect guest users to a different page
		redirectGuestUrl: "projects.html",
		// Set this to left, center, or right to position the login form on the page
		columnLocation: "left",
	},
	logout: {
		redirectUrl: "index.html",
	},
	history: {
		specLimitOnPage: 10,
		dateOrder: "desc",
		showRunningSpecs: false,
		additionalColumn: {
			// This is an optional column that can be added to the history table
			// the label is shown in the table header
			label: "Quote Number",
			// the property is the name of the property in the specification object
			property: "Westlake Quote Number"
		},
	},
	project: {
		// you may put "logout" instead of a page location
		redirectOnClose: "details.html",
		redirectOnCancel: "projects.html",
		showHeader: false,
	},
	driveApp: {
		// you may put "logout" instead of a page location
		redirectOnClose: "details.html",
		redirectOnCancel: "drive-apps.html",
		showHeader: true,
	},
	// (Optional) Configure 'Run' view
	run: {
		showWarningOnExit: true, // Toggle warning dialog when exiting "Run" view with potentially unsaved changes (where supported)
		loadCustomProjectAssets: {
			scripts: false,
			styles: false,
		},
	}, projects: {
		// Hide specific projects by their group alias
		/* toHide: [
	{alias: "Group Alias"},
], */
		// add additional links to the projects page
		/* toAdd: [
				{
						alias: "Group Alias",
						description: "Optional description",
						image: "dist/img/logo-dark.svg",
		// this could be an internal link like this
						link: "run.html?project=Jib Cranes&DWMacroQuickLaunch=700Series",
		// or an external link like this
						// link: "https://www.google.com",
				},
		], */
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
		requireNewSession: false,
		requireExactAlias: true,
	},
	copyright: {
		show: true,
		holder: "PurAqua",
		year: "2024",
	},
	// Add a watermark over pages in order to indicate that the site is a development site
	// comment out or set to "" to disable
	watermark: "Development",
	// Set the title of the site, this will be displayed in the browser tab
	// pageName | siteName
	siteName: "PurAqua",
	// Set whether a username or email address will be used
	// username | email address
	usernameType: "username",
	passwordRequired: false,
	loginReturnUrls: true, // Toggle appending return urls to restore the previous location when redirected to the login form
	locale: "en-US", // Set the default locale for displaying dates and numbers
	dateFormat: {
		month: "long",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	},
	// Whether to show debugging information in the console
	debug: false,
	allowSingleSignOn: false,
	disableRegularLogin: false,
	guestLogin: false,
	accountManagement: {
		// uses guestAlias, but can be set to a different alias by uncommenting the following line
		// guestAlias: "Guest",
		projectName: "AccountManagement",
		// these three options can be true, false, or a string
		// if a string is provided it will be the entire URL for example: "query?alias=development&run=AccountManagement&DWMacroNavigate=ResetPassword"
		// only set the string if you are not using the TPM Account Management project
		createAccount: true,
		forgotPassword: true,
		resetPassword: true,
	},
	sidebarLinks: [
		{
			title: "Projects",
			icon: "projects",
			href: "projects.html",
		},
		{
			title: "DriveApps",
			icon: "drive-apps",
			href: "drive-apps.html",
		},
		{
			title: "History",
			icon: "history",
			href: "history.html",
		},
	],
	images: {
		// You may use a different (or same) company logo for the login and sidebar
		// You may wish to do this due to the color of the logo and contrast with the background color
		// Here is an example with svgs and with pngs
		// login: "dist/img/logo-dark.svg",
		// sidebar: "dist/img/logo-light.svg",
		login: "dist/img/PuraquaLogo_1_1.png",
		sidebar: "dist/img/PuraquaLogo_1_1.png",
		// By default the login screen will show a static cover image
		// You can change it to a different image here.
		loginCover: "dist/img/brilliance.jpg",
		// You can use a series of images instead of a static cover image by enabling the carousel
		// These will fade into the next image every 'interval' seconds
		// You may use as many as you want but the more you use the longer the page will take to load
		carousel: {
			enabled: false,
			interval: 5,
			images: [
				"dist/img/slide1.webp",
				"dist/img/slide2.webp",
				"dist/img/slide3.webp",
				"dist/img/slide4.webp",
				"dist/img/slide5.webp",
				"dist/img/slide6.webp",
				"dist/img/slide7.webp",
				"dist/img/slide8.webp",
				"dist/img/slide10.webp",
			],
		},
	},
	// Use this section to easily set the branding of your site.
	// Available fonts are Roboto (Flex), Inter, and Poppins
	// you may @import any additional fonts you require in dist/css/theme/theme.css: for more info: https://www.w3schools.com/css/css3_fonts.asp
	// Sizes can be various units (%, pt, px, em, rem, vh, vw, etc): for more info: https://www.w3schools.com/css/css_units.asp
	// don't use % with radius
	// Colors can be names, hexadecimal, rgb(a), hsl(a): for more info: https://www.w3schools.com/cssref/css_colors_legal.php
	// line height can be px, pt, or unit-less. unit-less is * font size
	styles: {
		text: {
			font: "Roboto",
			size: "14px",
			color: "black",
			lineHeight: "20px",
		},
		heading: {
			font: "RobotoSlab-Regular, Roboto, sans-serif",
			size: "36px",
			color: "#3b5795",
			weight: "500",
			lineHeight: "40px",
		},
		caption: {
			font: "Roboto",
			size: "12pt",
			color: "black",
			weight: "light",
		},
		color: {
			primary: "#000000",
			secondary: "#3b5795",
			background: "#edeeee",
			icon: "black",
			focus: "#00AEEF",
		},
		sidebar: {
			background: "white",
			width: "18em",
			logoPadding: "1em",
			textColor: "black",
		},
		header: {
			background: "white",
			height: "30px",
			textColor: "black",
		},
		loginForm: {
			background: "white",
			padding: "1em",
			textColor: "black",
		},
		button: {
			// not recommended to use %
			radius: "0",
			color: "rgb(59, 87, 149)",
			textColor: "white",
			colorHover: "rgb(36, 58, 118)",
			textColorHover: "white",
			border: "none",
		},
		logo: {
			width: "50%"
		},
		projectCard: {
			background: "white",
			margin: "10px",
		},
		// not recommended to use %
		inputRadius: "0",
	},
}

