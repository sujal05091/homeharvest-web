import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFF4F0',
          100: '#FFE8DE',
          200: '#FFD1BD',
          300: '#FFB99C',
          400: '#FFA27B',
          500: '#FF6B35',
          600: '#E85A28',
          700: '#C44A1F',
          800: '#A03B17',
          900: '#7C2D0F',
        },
        secondary: {
          DEFAULT: '#22A45D',
          50: '#EDFBF3',
          100: '#D4F5E2',
          200: '#A9EBC5',
          300: '#7EE1A8',
          400: '#53D78B',
          500: '#22A45D',
          600: '#1C8A4E',
          700: '#16703F',
          800: '#105630',
          900: '#0A3C21',
        },
        dark: '#1A1A2E',
        light: '#FAFAFA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(34,164,93,0.1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
