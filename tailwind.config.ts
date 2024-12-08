import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        pretendard: ['var(--pretendard)'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(141deg, #D9EEFF 15.86%, #FFF 48.71%)',
      },
      colors: {
        black: {
          DEFAULT: '#212325',
          1: '#131313',
        },
        gray: {
          DEFAULT: '#585858',
          1: '#625C5C',
          2: '#F9F9F9',
          3: '#6b7280',
        },
        blue: {
          DEFAULT: '#3191FF',
          1: 'rgb(49 145 255 / 0.25)',
          2: '#F5FAFF',
        },
      },
    },
    fontSize: {
      '0.625-500': [' 0.625rem', { fontWeight: 500 }],
      '0.7-700': ['0.7rem', { fontWeight: 700 }],
      '0.75-400': ['0.75rem', { fontWeight: 400 }],
      '0.75-500': ['0.75rem', { fontWeight: 500 }],
      '0.75-600': ['0.75rem', { fontWeight: 600 }],
      '0.8-400': [' 0.8rem', { fontWeight: 400 }],
      '0.875-400': [' 0.875rem', { fontWeight: 400 }],
      '0.875-500': [' 0.875rem', { fontWeight: 500 }],
      '0.875-700': [' 0.875rem', { fontWeight: 700 }],
      '1-400': ['1rem', { fontWeight: 400 }],
      '1-500': ['1rem', { fontWeight: 500 }],
      '1-600': ['1rem', { fontWeight: 600 }],
      '1-700': ['1rem', { fontWeight: 700 }],
      '1-900': ['1rem', { fontWeight: 900 }],
      '1.125-400': ['1.125rem', { fontWeight: 400 }],
      '1.125-500': ['1.125rem', { fontWeight: 500 }],
      '1.125-700': ['1.125rem', { fontWeight: 700 }],
      '1.25-500': ['1.25rem', { fontWeight: 500 }],
      '1.25-600': ['1.25rem', { fontWeight: 600 }],
      '1.25-900': ['1.25rem', { fontWeight: 900 }],
      '1.5-400': ['1.5rem', { fontWeight: 400 }],
      '1.5-500': ['1.5rem', { fontWeight: 500 }],
      '1.5-700': ['1.5rem', { fontWeight: 700 }],
      '1.5-900': ['1.5rem', { fontWeight: 900 }],
      '1.6-700': ['1.6rem', { fontWeight: 700 }],
      '1.75-400': ['1.75rem', { fontWeight: 400 }],
      '1.75-500': ['1.75rem', { fontWeight: 500 }],
      '1.75-700': ['1.75rem', { fontWeight: 700 }],
      '1.75-900': ['1.75rem', { fontWeight: 900 }],
      '1.875-400': ['1.87rem', { fontWeight: 400 }],
      '1.875-700': ['1.875rem', { fontWeight: 700 }],
      '2-600': ['2rem', { fontWeight: 600 }],
      '2-700': ['2rem', { fontWeight: 700 }],
      '2-900': ['2rem', { fontWeight: 900 }],
      '2.25-700': ['2.25rem', { fontWeight: 700 }],
      '2.5-700': ['2.5rem', { fontWeight: 700 }],
      '2.5-900': ['2.5rem', { fontWeight: 900 }],
    },
    screens: {
      lg: { min: '1025px' },
      md: { max: '1024px' },
      sm: { max: '767px' },
    },
  },
  plugins: [],
};
export default config;
