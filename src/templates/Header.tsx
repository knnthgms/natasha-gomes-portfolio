import Link from 'next/link';
import { useRouter } from 'next/router';

import { siteContent } from '../content/siteContent';
import { ThemedNavLink, ThemedText, themeStyles } from '../theme/Theme';
import { AppConfig } from '../utils/AppConfig';
import { navigationItems } from './navigationItems';

const Header = () => {
  const router = useRouter();

  return (
    <header className="border-b backdrop-blur" style={themeStyles.header}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Link href="/" className="inline-flex flex-col">
          <ThemedText
            as="span"
            className="mt-1 text-2xl font-semibold tracking-tight"
            variant="heading"
          >
            {AppConfig.site_name}
          </ThemedText>
        </Link>

        <nav aria-label={siteContent.accessibility.primaryNavigationLabel}>
          <ul
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium"
            style={themeStyles.body}
          >
            {navigationItems.map((item) => {
              const isActive = router.pathname === item.href;

              return (
                <li key={item.href}>
                  <ThemedNavLink href={item.href} active={isActive}>
                    {item.label}
                  </ThemedNavLink>
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
