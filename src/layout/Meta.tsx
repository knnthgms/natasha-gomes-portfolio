import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();
  const pathWithoutQuery = router.asPath.split(/[?#]/)[0] || '/';
  const canonicalPath =
    pathWithoutQuery === '/' ? '/' : `${pathWithoutQuery.replace(/\/$/, '')}/`;
  const canonical = props.canonical ?? `${AppConfig.site_url}${canonicalPath}`;
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AppConfig.site_name,
    url: AppConfig.site_url,
    email: `mailto:${AppConfig.email}`,
    jobTitle: AppConfig.current_role,
    hasOccupation: {
      '@type': 'Occupation',
      name: AppConfig.current_role,
    },
    knowsAbout: [...AppConfig.search_focus, ...AppConfig.target_roles],
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          type: 'website',
        }}
      />
    </>
  );
};

export { Meta };
