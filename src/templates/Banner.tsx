import Link from 'next/link';

import { Button } from '../button/Button';
import { siteContent } from '../content/siteContent';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const { banner } = siteContent.starterTemplates;

const Banner = () => (
  <Section>
    <CTABanner
      title={banner.title}
      subtitle={banner.subtitle}
      button={
        <Link href={banner.action.href}>
          <Button>{banner.action.label}</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
