/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F6F',
        secondary: '#f39c12',
        accent: '#ff002a',
        success: '#3ab64c',
        info: '#3db2d5',
        danger: '#dd1146',
        dark: '#232936',
        light: '#f8f9fa',
        'text-color': '#52575e'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        'title-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'title-md': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        'title-sm': ['2rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }]
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2'
      },
      letterSpacing: {
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em'
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      boxShadow: {
        'custom': '0 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
};