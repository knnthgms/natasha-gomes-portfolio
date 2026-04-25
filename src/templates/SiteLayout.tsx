import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

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

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 antialiased">
      <Meta title={props.title} description={props.description} />

      <header className="border-b border-slate-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <Link href="/" className="inline-flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Portfolio Template
            </span>
            <span className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              {AppConfig.site_name}
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
              {navigationItems.map((item) => {
                const isActive = router.pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        isActive
                          ? 'text-slate-900'
                          : 'transition hover:text-slate-900'
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

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <p className="font-semibold text-slate-900">
              {AppConfig.site_name}
            </p>
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
                className="transition hover:text-slate-900"
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
