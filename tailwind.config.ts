import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark background palette
        'dark-base': '#000000',
        'dark-10': '#05010d',
        'dark-20': '#0a0010',
        'dark-30': '#1a0030',
        
        // Morado/Purple accent palette
        'purple-accent': '#7c3aed',
        'purple-600': '#6d28d9',
        'purple-500': '#a855f7',
        
        // Neutral grays
        'gray-title': '#ffffff',
        'gray-subtitle': '#a1a1aa',
        'gray-text': '#52525b',
        'gray-secondary': '#71717a',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
}
export default config

