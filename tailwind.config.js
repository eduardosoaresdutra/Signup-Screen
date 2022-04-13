module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(green|blue|gray)-(400|600)/,
    },{
      pattern: /from-(green|blue|gray)-(400|600)/,
    },{
      pattern: /to-(green|blue|gray)-(400|600)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
