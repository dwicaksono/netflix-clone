import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
