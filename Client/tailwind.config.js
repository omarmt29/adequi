module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'primary': '#005b9b',
      'secondary': '#099dff',
      

    },
    extend: {}, 
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
