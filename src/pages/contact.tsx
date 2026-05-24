import Link from 'next/link';

import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const ContactPage = () => (
  <SiteLayout
    title="Contact | Natasha Gomes"
    description="Contact Natasha Gomes for marketing roles, consulting, or collaborations."
  >
    <PageIntro
      eyebrow="Contact"
      title="Make it easy for the right opportunity to reach you."
      description="For now, this can stay simple: email, LinkedIn, resume, and a short note on what kinds of roles or projects you are open to."
    />

    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-12">
      <ThemedSurface as="article" className="p-8">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="body"
        >
          Email
        </ThemedText>
        <ThemedText
          as="a"
          href="mailto:natasha@portfolio.com"
          className="mt-4 block text-2xl font-semibold"
          variant="heading"
        >
          natasha@portfolio.com
        </ThemedText>
        <ThemedText className="mt-4 leading-7" variant="body">
          Best for role inquiries, speaking requests, collaborations, or
          consulting conversations.
        </ThemedText>
      </ThemedSurface>

      <ThemedSurface as="article" className="p-8" variant="strongCard">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="warmAccent"
        >
          Other Links
        </ThemedText>
        <div className="mt-4 space-y-4 text-lg">
          <a className="block text-white" href="https://www.linkedin.com">
            LinkedIn
          </a>
          <Link className="block text-white" href="/">
            Resume
          </Link>
        </div>
        <ThemedText className="mt-6 leading-7" variant="strongBody">
          Later, we can replace this block with a proper contact form, booking
          link, or downloadable resume asset.
        </ThemedText>
      </ThemedSurface>
    </section>
  </SiteLayout>
);

export default ContactPage;
