import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { SiteLayout } from './SiteLayout';

const Base = () => (
  <SiteLayout title={AppConfig.title} description={AppConfig.description}>
    <section className="border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Marketing Manager
            </p>
            <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Building growth programs that turn attention into revenue.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Replace this copy with a concise positioning statement about the
              kind of marketing work you lead. This starter is set up for
              campaign strategy, content leadership, lifecycle marketing, and
              cross-functional execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                href="mailto:natasha@portfolio.com"
              >
                Email Me
              </a>
              <Link
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Pipeline Growth
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">42%</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                YoY increase in qualified pipeline from integrated campaigns.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Launch Velocity
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">18</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Multi-channel launches led in one year across paid, email, and
                web.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Team Leadership
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">6</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Internal and freelance contributors coordinated across creative
                and ops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Selected Wins
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          A clean place to showcase outcomes, not just responsibilities.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Demand Generation
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900">
            Rebuilt the campaign engine around audience intent.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Use this card for a strong case-study summary: what changed, what
            channels were involved, and what measurable business result came out
            of it.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
            Brand Campaign
          </p>
          <h3 className="mt-4 text-2xl font-semibold">
            Took a product launch from narrative to rollout.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Highlight a launch you led across messaging, creative briefs,
            stakeholder alignment, and post-launch reporting.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Lifecycle Marketing
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-slate-900">
            Improved conversion by tightening nurture journeys.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            This is a good slot for email, retention, upsell, onboarding, or CRM
            work that proves you can turn strategy into repeatable systems.
          </p>
        </article>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-white/70 px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Built for a marketing manager who works across strategy and
            execution.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Keep this section focused on the handful of strengths you want a
            hiring manager or client to remember after a quick scan.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Campaign Strategy
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Positioning, segmentation, messaging frameworks, launch planning,
              and channel orchestration.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Content Leadership
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Editorial planning, copy direction, creative briefing, and content
              performance reviews.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Marketing Operations
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Automation, reporting cadences, dashboard design, and cleaner
              handoffs with sales and RevOps.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Team Management
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Managing agencies, freelancers, and internal partners without
              losing speed or brand consistency.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Experience Snapshot
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Start with a simple timeline, then deepen it later with full case
            studies.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-slate-600">
          These entries are placeholders you can swap with your actual roles,
          dates, and responsibilities.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                2023 - Present
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Senior Marketing Manager, North Star Tech
              </h3>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              B2B SaaS
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Led integrated campaigns, owned quarterly launch calendars, and
            partnered with sales leadership on pipeline and conversion goals.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                2020 - 2023
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Marketing Manager, Alder & Pine
              </h3>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              Consumer Brand
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Managed paid, social, email, and web content while coordinating
            agency partners and keeping reporting tied to business outcomes.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                2017 - 2020
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                Content and Campaign Lead, Studio Common
              </h3>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              Agency
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Built campaign narratives, developed editorial calendars, and
            translated client goals into briefs, timelines, and performance
            summaries.
          </p>
        </article>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-slate-900 px-6 py-20 text-white lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to turn this starter into your actual portfolio.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Swap in your real numbers, add one or two strong case studies, and
            connect these buttons to your email, LinkedIn, resume, or Calendly.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            href="mailto:natasha@portfolio.com"
          >
            natasha@portfolio.com
          </a>
          <Link
            className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            href="/contact"
          >
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export { Base };
