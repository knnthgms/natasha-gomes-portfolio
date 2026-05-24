import Link from 'next/link';

import { siteContent } from '../content/siteContent';
import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const { contact } = siteContent;

const ContactPage = () => (
  <SiteLayout title={contact.meta.title} description={contact.meta.description}>
    <PageIntro
      eyebrow={contact.intro.eyebrow}
      title={contact.intro.title}
      description={contact.intro.description}
    />

    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-12">
      <ThemedSurface as="article" className="p-8">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="body"
        >
          {contact.emailCard.label}
        </ThemedText>
        <ThemedText
          as="a"
          href={`mailto:${contact.emailCard.email}`}
          className="mt-4 block text-2xl font-semibold"
          variant="heading"
        >
          {contact.emailCard.email}
        </ThemedText>
        <ThemedText className="mt-4 leading-7" variant="body">
          {contact.emailCard.description}
        </ThemedText>
      </ThemedSurface>

      <ThemedSurface as="article" className="p-8" variant="strongCard">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="warmAccent"
        >
          {contact.linkCard.label}
        </ThemedText>
        <div className="mt-4 space-y-4 text-lg">
          {contact.linkCard.links.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                className="block text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <a key={link.label} className="block text-white" href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </div>
        <ThemedText className="mt-6 leading-7" variant="strongBody">
          {contact.linkCard.description}
        </ThemedText>
      </ThemedSurface>
    </section>
  </SiteLayout>
);

export default ContactPage;
