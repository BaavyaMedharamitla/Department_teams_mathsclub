/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#0D9488', // Primary teal
          600: '#0a7a6c',
          700: '#085f50',
          800: '#054034',
          900: '#032018',
        },
        secondary: {
          50: '#e6ecf9',
          100: '#ccd9f3',
          200: '#99b3e7',
          300: '#668ddb',
          400: '#3367cf',
          500: '#1E40AF', // Secondary navy
          600: '#18359c',
          700: '#122989',
          800: '#0c1c76',
          900: '#060e63',
        },
        accent: {
          50: '#fff2e6',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#F97316', // Accent coral/orange
          600: '#e65c00',
          700: '#cc5200',
          800: '#b34700',
          900: '#993d00',
        },
        success: {
          500: '#10B981', // Green
        },
        warning: {
          500: '#FBBF24', // Amber
        },
        error: {
          500: '#EF4444', // Red
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
};