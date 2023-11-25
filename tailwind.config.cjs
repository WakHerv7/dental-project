/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const safeListFile = 'safelist.txt'

// colors.indigo
const SAFELIST_COLORS = 'colors'

module.exports = {
	mode: 'jit',
	content:  [
		"./index.html",
    	"./src/**/*.{js,ts,jsx,tsx}", 
		'./safelist.txt'
	],
	darkMode: 'class',
		theme: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
				serif: [
					'ui-serif',
					'Georgia',
					'Cambria',
					'"Times New Roman"',
					'Times',
					'serif',
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
			screens: {
				xs: '576',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			extend: {
				colors: {
					"nael-second-blue":"#0277bd",
					"nael-second-blue-light":"#0277bd33",
					"nael-third-blue":"#21bfa3",
					"nael-gray":"#727272",
					"nael-blue": {
					  50: "#283874",
					  100: "#283874",
					  200: "#283874",
					  300: "#283874",
					  400: "#283874",
					  500: "#283874",
					  600: "#283874",
					  700: "#283874",
					  800: "#283874",
					  900: "#283874",
					},
					"nael-violet": {
					  50: "#7F88C1",
					  100: "#7F88C1",
					  200: "#7F88C1",
					  300: "#7F88C1",
					  400: "#7F88C1",
					  500: "#7F88C1",
					  600: "#7F88C1",
					  700: "#7F88C1",
					  800: "#7F88C1",
					  900: "#7F88C1",
					},
					"nael-lighten": {
					  50: "#EEF2F9",
					  100: "#EEF2F9",
					  200: "#EEF2F9",
					  300: "#EEF2F9",
					  400: "#EEF2F9",
					  500: "#EEF2F9",
					  600: "#EEF2F9",
					  700: "#EEF2F9",
					  800: "#EEF2F9",
					  900: "#EEF2F9",
					}
				  },
				typography: (theme) => ({
					DEFAULT: {
						css: {
							color: theme('colors.gray.500'),
							maxWidth: '65ch',
						},
					},
					invert: {
						css: {
							color: theme('colors.gray.400'),
						},
					},
				}),
			},
		},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('./twSafelistGenerator')({
            path: safeListFile,
            patterns: [
                `text-{${SAFELIST_COLORS}}`,
				`bg-{${SAFELIST_COLORS}}`,
				`dark:bg-{${SAFELIST_COLORS}}`,
				`dark:hover:bg-{${SAFELIST_COLORS}}`,
				`dark:active:bg-{${SAFELIST_COLORS}}`,
				`hover:text-{${SAFELIST_COLORS}}`,
				`hover:bg-{${SAFELIST_COLORS}}`,
				`active:bg-{${SAFELIST_COLORS}}`,
				`ring-{${SAFELIST_COLORS}}`,
				`hover:ring-{${SAFELIST_COLORS}}`,
				`focus:ring-{${SAFELIST_COLORS}}`,
				`focus-within:ring-{${SAFELIST_COLORS}}`,
				`border-{${SAFELIST_COLORS}}`,
				`focus:border-{${SAFELIST_COLORS}}`,
				`focus-within:border-{${SAFELIST_COLORS}}`,
				`dark:text-{${SAFELIST_COLORS}}`,
				`dark:hover:text-{${SAFELIST_COLORS}}`,
				`h-{height}`,
				`w-{width}`,
            ],
        }),
        require('@tailwindcss/typography'),
	],
};
