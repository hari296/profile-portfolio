/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
        },
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-sm': 'var(--shadow-glow-sm)',
        glass: 'var(--shadow-glass)',
      },
      backgroundImage: {
        'mesh-hero': 'var(--mesh-hero)',
      },
    },
  },
  plugins: [],
};
