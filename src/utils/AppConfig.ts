type ThemeConfig = {
  background: string;
  backgroundSoft: string;
  backgroundMuted: string;
  surface: string;
  surfaceAlt: string;
  surfaceStrong: string;
  border: string;
  text: string;
  textMuted: string;
  textSoft: string;
  accent: string;
  accentSoft: string;
  accentStrong: string;
  accentWarm: string;
  accentWarmSoft: string;
  selection: string;
};

export const AppConfig = {
  site_name: 'Natasha Gomes',
  title: 'Natasha Gomes | Marketing Manager Portfolio',
  description:
    'Portfolio website for Natasha Gomes, a marketing manager focused on campaign strategy, content leadership, growth, and brand-building.',
  locale: 'en',
  theme: {
    background: '#fff6fb',
    backgroundSoft: '#fffaf2',
    backgroundMuted: '#fff0f7',
    surface: '#ffffff',
    surfaceAlt: '#fff8fc',
    surfaceStrong: '#5a2a49',
    border: '#f2d4e2',
    text: '#4c2a3c',
    textMuted: '#795667',
    textSoft: '#fdf4f8',
    accent: '#d96ba0',
    accentSoft: '#f9cade',
    accentStrong: '#b94d84',
    accentWarm: '#f2c14e',
    accentWarmSoft: '#fff2bf',
    selection: '#ffd86b',
  } satisfies ThemeConfig,
};
