import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { navigationItems } from './navigationItems';

const Footer = () => (
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
);

export { Footer };
