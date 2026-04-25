import Link from 'next/link';

import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

const ContactPage = () => (
  <SiteLayout
    title="Contact | Jordan Lee"
    description="Contact page for a marketing manager portfolio."
  >
    <PageIntro
      eyebrow="Contact"
      title="Make it easy for the right opportunity to reach you."
      description="For now, this can stay simple: email, LinkedIn, resume, and a short note on what kinds of roles or projects you are open to."
    />

    <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-12">
      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Email
        </p>
        <a
          href="mailto:jordan@portfolio.com"
          className="mt-4 block text-2xl font-semibold text-slate-900"
        >
          jordan@portfolio.com
        </a>
        <p className="mt-4 leading-7 text-slate-600">
          Best for role inquiries, speaking requests, collaborations, or
          consulting conversations.
        </p>
      </article>

      <article className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
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
        <p className="mt-6 leading-7 text-slate-300">
          Later, we can replace this block with a proper contact form, booking
          link, or downloadable resume asset.
        </p>
      </article>
    </section>
  </SiteLayout>
);

export default ContactPage;
