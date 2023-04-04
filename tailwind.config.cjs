/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
    borderRadius: {
      'none': '0',
      'sm': '8px',
      DEFAULT: '10px',
      'md': '14px',
      'lg': '20px',
      'full': '9999px',
    },
		extend: {
			colors: {
        'primary': {
          DEFAULT: '#036DBB',
          '50': '#A6D8FE',
          '100': '#8DCEFD',
          '200': '#5BB8FC',
          '300': '#28A2FC',
          '400': '#048AED',
          '500': '#036DBB',
          '600': '#025998',
          '700': '#024475',
          '800': '#013052',
          '900': '#011B2E'
        },
      },
		},
	},
	variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  },
	plugins: [],
}