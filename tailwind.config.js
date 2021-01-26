/* eslint-disable no-undef */
const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			ms: "320px", //mobile screens
			lms: "480px", //large mobile screens
			ts: "780px", //tablet screens
			iPads: "1024px", //iPad screens
			ds: "1280px", //desktop screens
		},
		colors: {
			red: colors.red[500],
			blue: colors.blue[500]
		},
		extend: {
			gridTemplateRows: {
				appLayout: "auto 1fr auto"
			},
			gridTemplateColumns: {
				appLayout: "100%",
				appLayoutDesktop: "100px auto",
			}
		},
	},
	variants: {
		extend: {
			textColor: ["hover"],
		},
	},
	plugins: [],
};
