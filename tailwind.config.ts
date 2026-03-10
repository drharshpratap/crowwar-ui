import type { Config } from 'tailwindcss';

const colors = {
  primaryBg: '#0F1B26',
  secondaryBg: '#152533',
  metallicSheen: '#1B2F3F',
  auxBg: '#1F3854',
  primaryAccent: '#8DB4FF',
  secondaryAccent: '#4EA1FF',
  primaryText: '#F4F7FF',
  secondaryText: '#B5C4E2',
  border: '#1A2B3C'
};

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        gradientHero: 'linear-gradient(135deg, #0A0A0A 0%, #141414 100%)'
      }
    }
  },
  plugins: []
};

export default config;
