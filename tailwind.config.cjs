module.exports = {
	content: ["./src/**/*.{svelte,html,js,ts}"],
	theme: {
		extend: {},
		colors: {
			blue: "#1a2456",
			white: "#f0efed",
			black: "#080b1b",
			red: {
				300: "#ff8b68",
				600: "#ff501c",
			},
			pale: "#efc2b3",
		},
		fontFamily: {
			prompt: ["Prompt", "sans-serif"]
		},
	},

	plugins: [],
}
