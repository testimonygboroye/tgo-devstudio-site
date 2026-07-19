import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#5B0FFA',
          cyan: '#00C3F9',
        },
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #5B0FFA 0%, #00C3F9 100%)',
        'brand-radial': 'radial-gradient(ellipse at top, #2a1550 0%, #1A0B35 60%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
