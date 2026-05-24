import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';
import { navigationItems } from './navigationItems';

const Header = () => {
  const router = useRouter();

  return (
    <header className="theme-header border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Link href="/" className="inline-flex flex-col">
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
                      isActive
                        ? 'theme-link-active underline'
                        : 'theme-link transition'
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
  );
};

export { Header };
