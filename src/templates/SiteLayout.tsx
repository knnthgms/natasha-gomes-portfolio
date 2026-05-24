import type { ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { ThemedShell } from '../theme/Theme';
import { Footer } from './Footer';
import { Header } from './Header';

type ISiteLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const SiteLayout = (props: ISiteLayoutProps) => (
  <ThemedShell>
    <Meta title={props.title} description={props.description} />

    <Header />

    <main>{props.children}</main>

    <Footer />
  </ThemedShell>
);

export { SiteLayout };
