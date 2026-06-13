import { siteContent } from '../content/siteContent';

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
  site_name: siteContent.site.name,
  site_url: siteContent.site.url,
  title: siteContent.site.title,
  description: siteContent.site.description,
  locale: siteContent.site.locale,
  email: siteContent.site.email,
  current_role: siteContent.site.currentRole,
  target_roles: siteContent.site.targetRoles,
  search_focus: siteContent.site.searchFocus,
  theme: {
    background: '#f9f9f9',
    backgroundSoft: '#e0f4f2',
    backgroundMuted: '#e2e2e2',
    surface: '#ffffff',
    surfaceAlt: '#f3f3f4',
    surfaceStrong: '#fff4fb',
    border: '#006180',
    text: '#1a2e35',
    textMuted: '#40484d',
    textSoft: '#ffffff',
    accent: '#006180',
    accentSoft: '#95dafe',
    accentStrong: '#004860',
    accentWarm: '#89467f',
    accentWarmSoft: '#ffd7f3',
    selection: '#ffefa1',
  } satisfies ThemeConfig,
};
