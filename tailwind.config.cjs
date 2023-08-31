/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        primary: '#02CECB',
        secondary: 'rgb(253, 224, 71)',
        morado: '#8338EC',
        verde: '#06837F',
        verdeClaro: '#B4FFFF',
        rosado: '#FF006E',
        azul: '#3A86FF'
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      },
      fontSize: {
        '5xl': ['3.052rem', '3.50rem']
      }
    }
  },
	plugins: [],
}
