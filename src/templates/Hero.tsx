import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { siteContent } from '../content/siteContent';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const { hero } = siteContent.starterTemplates;

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {hero.navigation.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {hero.titleStart}
            <span className="text-primary-500">{hero.titleAccent}</span>
          </>
        }
        description={hero.description}
        button={
          <Link href={hero.action.href}>
            <Button xl>{hero.action.label}</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
