import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      // light
      primary: '#F4AFAB',
      secondary: '#F4CBC6',
      tertiary: '#F7EDF0',
      vanilla: '#F4EEA9',
      icterine: '#F4F482',
      // dark
      primary_dark: '#0B132B',
      secondary_dark: '#1C2541',
      tertiary_dark: '#3A506B',
      verdigris: '#5BC0BE',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
