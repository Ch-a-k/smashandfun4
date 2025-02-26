import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)',
        accent: 'var(--accent)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        dark: 'var(--dark)',
        light: 'var(--light)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
        },
      },
      fontFamily: {
        impact: ['var(--font-impact)'],
        akrobat: ['var(--font-akrobat)'],
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 3s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
      boxShadow: {
        'glow-primary': '0 0 20px var(--glow-color)',
        'glow-lg': '0 0 30px var(--glow-color)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;