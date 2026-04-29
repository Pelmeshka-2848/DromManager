import type { Config } from 'tailwindcss';

export default {
  content: ['./entrypoints/**/*.{html,ts,tsx}', './ui/**/*.{ts,tsx}', './features/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: []
} satisfies Config;
