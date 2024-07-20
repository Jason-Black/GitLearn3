/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/workspaces/GitLearn3/index.html', // Include all HTML files in the public directory
    '/workspaces/GitLearn3/src/**/*.{js,jsx,ts,tsx,css}' // Include all relevant files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

