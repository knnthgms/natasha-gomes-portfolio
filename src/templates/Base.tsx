import {
  ThemedButtonLink,
  ThemedSection,
  ThemedSurface,
  ThemedText,
} from '../theme/Theme';
import { AppConfig } from '../utils/AppConfig';
import { SiteLayout } from './SiteLayout';

const Base = () => (
  <SiteLayout title={AppConfig.title} description={AppConfig.description}>
    <ThemedSection divider="bottom">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-3xl">
            <ThemedText
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              variant="accent"
            >
              Marketing Manager
            </ThemedText>
            <ThemedText
              as="h2"
              className="mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-6xl"
              variant="heading"
            >
              Building growth programs that turn attention into revenue.
            </ThemedText>
            <ThemedText
              className="mt-6 max-w-2xl text-lg leading-8"
              variant="body"
            >
              Replace this copy with a concise positioning statement about the
              kind of marketing work you lead. This starter is set up for
              campaign strategy, content leadership, lifecycle marketing, and
              cross-functional execution.
            </ThemedText>

            <div className="mt-8 flex flex-wrap gap-4">
              <ThemedButtonLink
                className="rounded-full px-6 py-3 text-sm font-semibold transition"
                href="mailto:natasha@portfolio.com"
              >
                Email Me
              </ThemedButtonLink>
              <ThemedButtonLink
                className="rounded-full px-6 py-3 text-sm font-semibold transition"
                href="/about"
                variant="secondary"
              >
                Learn More
              </ThemedButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <ThemedSurface className="p-6">
              <ThemedText
                className="text-sm uppercase tracking-[0.18em]"
                variant="body"
              >
                Pipeline Growth
              </ThemedText>
              <ThemedText
                className="mt-4 text-4xl font-semibold"
                variant="heading"
              >
                42%
              </ThemedText>
              <ThemedText className="mt-2 text-sm leading-6" variant="body">
                YoY increase in qualified pipeline from integrated campaigns.
              </ThemedText>
            </ThemedSurface>
            <ThemedSurface className="p-6">
              <ThemedText
                className="text-sm uppercase tracking-[0.18em]"
                variant="body"
              >
                Launch Velocity
              </ThemedText>
              <ThemedText
                className="mt-4 text-4xl font-semibold"
                variant="heading"
              >
                18
              </ThemedText>
              <ThemedText className="mt-2 text-sm leading-6" variant="body">
                Multi-channel launches led in one year across paid, email, and
                web.
              </ThemedText>
            </ThemedSurface>
            <ThemedSurface className="p-6">
              <ThemedText
                className="text-sm uppercase tracking-[0.18em]"
                variant="body"
              >
                Team Leadership
              </ThemedText>
              <ThemedText
                className="mt-4 text-4xl font-semibold"
                variant="heading"
              >
                6
              </ThemedText>
              <ThemedText className="mt-2 text-sm leading-6" variant="body">
                Internal and freelance contributors coordinated across creative
                and ops.
              </ThemedText>
            </ThemedSurface>
          </div>
        </div>
      </div>
    </ThemedSection>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="max-w-2xl">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          variant="accent"
        >
          Selected Wins
        </ThemedText>
        <ThemedText
          as="h2"
          className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
          variant="heading"
        >
          A clean place to showcase outcomes, not just responsibilities.
        </ThemedText>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <ThemedSurface as="article" className="p-8">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            variant="body"
          >
            Demand Generation
          </ThemedText>
          <ThemedText
            as="h3"
            className="mt-4 text-2xl font-semibold"
            variant="heading"
          >
            Rebuilt the campaign engine around audience intent.
          </ThemedText>
          <ThemedText className="mt-4 text-base leading-7" variant="body">
            Use this card for a strong case-study summary: what changed, what
            channels were involved, and what measurable business result came out
            of it.
          </ThemedText>
        </ThemedSurface>

        <ThemedSurface as="article" className="p-8" variant="strongCard">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            variant="warmAccent"
          >
            Brand Campaign
          </ThemedText>
          <h3 className="mt-4 text-2xl font-semibold">
            Took a product launch from narrative to rollout.
          </h3>
          <ThemedText className="mt-4 text-base leading-7" variant="strongBody">
            Highlight a launch you led across messaging, creative briefs,
            stakeholder alignment, and post-launch reporting.
          </ThemedText>
        </ThemedSurface>

        <ThemedSurface as="article" className="p-8">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.18em]"
            variant="body"
          >
            Lifecycle Marketing
          </ThemedText>
          <ThemedText
            as="h3"
            className="mt-4 text-2xl font-semibold"
            variant="heading"
          >
            Improved conversion by tightening nurture journeys.
          </ThemedText>
          <ThemedText className="mt-4 text-base leading-7" variant="body">
            This is a good slot for email, retention, upsell, onboarding, or CRM
            work that proves you can turn strategy into repeatable systems.
          </ThemedText>
        </ThemedSurface>
      </div>
    </section>

    <ThemedSection className="px-6 py-20 lg:px-12" divider="vertical">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="accent"
          >
            Capabilities
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="heading"
          >
            Built for a marketing manager who works across strategy and
            execution.
          </ThemedText>
          <ThemedText className="mt-6 text-lg leading-8" variant="body">
            Keep this section focused on the handful of strengths you want a
            hiring manager or client to remember after a quick scan.
          </ThemedText>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ThemedSurface className="p-6" variant="softCard">
            <ThemedText
              as="h3"
              className="text-xl font-semibold"
              variant="heading"
            >
              Campaign Strategy
            </ThemedText>
            <ThemedText className="mt-3 leading-7" variant="body">
              Positioning, segmentation, messaging frameworks, launch planning,
              and channel orchestration.
            </ThemedText>
          </ThemedSurface>
          <ThemedSurface className="p-6" variant="softCard">
            <ThemedText
              as="h3"
              className="text-xl font-semibold"
              variant="heading"
            >
              Content Leadership
            </ThemedText>
            <ThemedText className="mt-3 leading-7" variant="body">
              Editorial planning, copy direction, creative briefing, and content
              performance reviews.
            </ThemedText>
          </ThemedSurface>
          <ThemedSurface className="p-6" variant="softCard">
            <ThemedText
              as="h3"
              className="text-xl font-semibold"
              variant="heading"
            >
              Marketing Operations
            </ThemedText>
            <ThemedText className="mt-3 leading-7" variant="body">
              Automation, reporting cadences, dashboard design, and cleaner
              handoffs with sales and RevOps.
            </ThemedText>
          </ThemedSurface>
          <ThemedSurface className="p-6" variant="softCard">
            <ThemedText
              as="h3"
              className="text-xl font-semibold"
              variant="heading"
            >
              Team Management
            </ThemedText>
            <ThemedText className="mt-3 leading-7" variant="body">
              Managing agencies, freelancers, and internal partners without
              losing speed or brand consistency.
            </ThemedText>
          </ThemedSurface>
        </div>
      </div>
    </ThemedSection>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="accent"
          >
            Experience Snapshot
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="heading"
          >
            Start with a simple timeline, then deepen it later with full case
            studies.
          </ThemedText>
        </div>
        <ThemedText className="max-w-xl text-base leading-7" variant="body">
          These entries are placeholders you can swap with your actual roles,
          dates, and responsibilities.
        </ThemedText>
      </div>

      <div className="mt-12 space-y-6">
        <ThemedSurface as="article" className="p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <ThemedText
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                variant="body"
              >
                2023 - Present
              </ThemedText>
              <ThemedText
                as="h3"
                className="mt-2 text-2xl font-semibold"
                variant="heading"
              >
                Senior Marketing Manager, North Star Tech
              </ThemedText>
            </div>
            <ThemedText
              className="text-sm font-medium uppercase tracking-[0.18em]"
              variant="accent"
            >
              B2B SaaS
            </ThemedText>
          </div>
          <ThemedText className="mt-5 max-w-3xl leading-7" variant="body">
            Led integrated campaigns, owned quarterly launch calendars, and
            partnered with sales leadership on pipeline and conversion goals.
          </ThemedText>
        </ThemedSurface>

        <ThemedSurface as="article" className="p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <ThemedText
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                variant="body"
              >
                2020 - 2023
              </ThemedText>
              <ThemedText
                as="h3"
                className="mt-2 text-2xl font-semibold"
                variant="heading"
              >
                Marketing Manager, Alder & Pine
              </ThemedText>
            </div>
            <ThemedText
              className="text-sm font-medium uppercase tracking-[0.18em]"
              variant="accent"
            >
              Consumer Brand
            </ThemedText>
          </div>
          <ThemedText className="mt-5 max-w-3xl leading-7" variant="body">
            Managed paid, social, email, and web content while coordinating
            agency partners and keeping reporting tied to business outcomes.
          </ThemedText>
        </ThemedSurface>

        <ThemedSurface as="article" className="p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <ThemedText
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                variant="body"
              >
                2017 - 2020
              </ThemedText>
              <ThemedText
                as="h3"
                className="mt-2 text-2xl font-semibold"
                variant="heading"
              >
                Content and Campaign Lead, Studio Common
              </ThemedText>
            </div>
            <ThemedText
              className="text-sm font-medium uppercase tracking-[0.18em]"
              variant="accent"
            >
              Agency
            </ThemedText>
          </div>
          <ThemedText className="mt-5 max-w-3xl leading-7" variant="body">
            Built campaign narratives, developed editorial calendars, and
            translated client goals into briefs, timelines, and performance
            summaries.
          </ThemedText>
        </ThemedSurface>
      </div>
    </section>

    <ThemedSurface
      as="section"
      className="px-6 py-20 lg:px-12"
      style={{ borderRadius: 0 }}
      variant="strongCard"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="warmAccent"
          >
            Contact
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="strongHeading"
          >
            Ready to turn this starter into your actual portfolio.
          </ThemedText>
          <ThemedText className="mt-5 text-lg leading-8" variant="strongBody">
            Swap in your real numbers, add one or two strong case studies, and
            connect these buttons to your email, LinkedIn, resume, or Calendly.
          </ThemedText>
        </div>

        <div className="flex flex-wrap gap-4">
          <ThemedButtonLink
            className="rounded-full px-6 py-3 text-sm font-semibold transition"
            href="mailto:natasha@portfolio.com"
            variant="highlight"
          >
            natasha@portfolio.com
          </ThemedButtonLink>
          <ThemedButtonLink
            className="rounded-full px-6 py-3 text-sm font-semibold transition"
            href="/contact"
            variant="outline"
          >
            Contact Page
          </ThemedButtonLink>
        </div>
      </div>
    </ThemedSurface>
  </SiteLayout>
);

export { Base };
