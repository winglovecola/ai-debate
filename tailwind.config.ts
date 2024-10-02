import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-heading': '#FFFFFF',
    
      }
    },
    fontFamily: {

    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    }
  },
  plugins: [

    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
};
export default config;
