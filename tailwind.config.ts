import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'netflix-red-primary': '#E50814',
        'netflix-red-secondary': '#B9080A',
        'netflix-black-primary': '#141414',
        'netflix-grey-primary': '#595959',
        'netflix-grey-secondary': '#808080',
        'netflix-dark-tranparent-primary': 'rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
