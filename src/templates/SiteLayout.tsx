import type { CSSProperties, ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

type ISiteLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const SiteLayout = (props: ISiteLayoutProps) => {
  const themeStyle = {
    '--theme-bg': AppConfig.theme.background,
    '--theme-bg-soft': AppConfig.theme.backgroundSoft,
    '--theme-bg-muted': AppConfig.theme.backgroundMuted,
    '--theme-surface': AppConfig.theme.surface,
    '--theme-surface-alt': AppConfig.theme.surfaceAlt,
    '--theme-surface-strong': AppConfig.theme.surfaceStrong,
    '--theme-border': AppConfig.theme.border,
    '--theme-text': AppConfig.theme.text,
    '--theme-text-muted': AppConfig.theme.textMuted,
    '--theme-text-soft': AppConfig.theme.textSoft,
    '--theme-accent': AppConfig.theme.accent,
    '--theme-accent-soft': AppConfig.theme.accentSoft,
    '--theme-accent-strong': AppConfig.theme.accentStrong,
    '--theme-accent-warm': AppConfig.theme.accentWarm,
    '--theme-accent-warm-soft': AppConfig.theme.accentWarmSoft,
    '--theme-selection': AppConfig.theme.selection,
  } as CSSProperties;

  return (
    <div className="theme-shell min-h-screen antialiased" style={themeStyle}>
      <Meta title={props.title} description={props.description} />

      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export { SiteLayout };
