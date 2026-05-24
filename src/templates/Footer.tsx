import { ThemedNavLink, ThemedText, themeStyles } from '../theme/Theme';
import { AppConfig } from '../utils/AppConfig';
import { navigationItems } from './navigationItems';

const Footer = () => (
  <footer className="border-t" style={themeStyles.footer}>
    <div
      className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-12"
      style={themeStyles.body}
    >
      <div>
        <ThemedText className="font-semibold" variant="heading">
          {AppConfig.site_name}
        </ThemedText>
        <p className="mt-1">
          Marketing manager portfolio starter for experience, services, and
          future case studies.
        </p>
      </div>

      <div className="flex flex-wrap gap-5">
        {navigationItems.map((item) => (
          <ThemedNavLink key={item.href} href={item.href}>
            {item.label}
          </ThemedNavLink>
        ))}
      </div>
    </div>
  </footer>
);

export { Footer };
