module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0284c7',
        },
        muted: '#e6f7ff',
        'muted-foreground': '#033a56',
        border: '#c6eaf9',
        accent: '#3b82f6',
        background: '#f3fbff',
        foreground: '#042236'
      ,
      // Semantic surface colors (light/dark)
      surface: {
        DEFAULT: '#ffffff',
        foreground: '#111827',
        border: '#e5e7eb',
        hover: '#f3f4f6'
      },
      'surface-dark': {
        DEFAULT: '#0b1220',
        foreground: '#e5e7eb',
        border: '#1f2937',
        hover: '#0f1724'
      }
      },
      boxShadow: {
        'card-sm': '0 1px 4px rgba(2,132,199,0.06)',
        'card-lg': '0 8px 24px rgba(2,132,199,0.12)'
      }
    }
  },
  plugins: [],
}
