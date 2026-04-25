import Link from 'next/link';
import { useRouter } from 'next/router';
import type { CSSProperties, ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

type ISiteLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

const SiteLayout = (props: ISiteLayoutProps) => {
  const router = useRouter();
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

      <header className="theme-header border-b backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Link href="/" className="inline-flex flex-col">
            <span className="theme-accent text-xs font-semibold uppercase tracking-[0.2em]">
              Portfolio Template
            </span>
            <span className="theme-heading mt-1 text-2xl font-semibold tracking-tight">
              {AppConfig.site_name}
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="theme-body flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              {navigationItems.map((item) => {
                const isActive = router.pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        isActive ? 'theme-link-active' : 'theme-link transition'
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="theme-footer border-t">
        <div className="theme-body mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="theme-heading font-semibold">{AppConfig.site_name}</p>
            <p className="mt-1">
              Marketing manager portfolio starter for experience, services, and
              future case studies.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="theme-link transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export { SiteLayout };
