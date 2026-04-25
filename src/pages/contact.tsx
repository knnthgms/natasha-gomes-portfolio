import Link from 'next/link';

import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

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
      <article className="theme-card rounded-3xl border p-8">
        <p className="theme-body text-sm font-semibold uppercase tracking-[0.18em]">
          Email
        </p>
        <a
          href="mailto:natasha@portfolio.com"
          className="theme-heading mt-4 block text-2xl font-semibold"
        >
          natasha@portfolio.com
        </a>
        <p className="theme-body mt-4 leading-7">
          Best for role inquiries, speaking requests, collaborations, or
          consulting conversations.
        </p>
      </article>

      <article className="theme-card-strong rounded-3xl border p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--theme-accent-warm)]">
          Other Links
        </p>
        <div className="mt-4 space-y-4 text-lg">
          <a className="block text-white" href="https://www.linkedin.com">
            LinkedIn
          </a>
          <Link className="block text-white" href="/">
            Resume
          </Link>
        </div>
        <p className="theme-card-strong-body mt-6 leading-7">
          Later, we can replace this block with a proper contact form, booking
          link, or downloadable resume asset.
        </p>
      </article>
    </section>
  </SiteLayout>
);

export default ContactPage;
