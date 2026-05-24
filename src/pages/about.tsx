import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const AboutPage = () => (
  <SiteLayout
    title="About | Natasha Gomes"
    description="About Natasha Gomes, marketing manager."
  >
    <PageIntro
      eyebrow="About"
      title="A space to explain your perspective, leadership style, and marketing range."
      description="This page is where you can sound like a person, not just a resume. Use it to connect your career story, decision-making style, and the kinds of teams or brands you do your best work with."
    />

    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
      <ThemedText
        as="div"
        className="space-y-6 text-lg leading-8"
        variant="body"
      >
        <p>
          Start with a sharp summary of your background. For example: you build
          integrated marketing programs that combine strategy, content, demand
          generation, and performance reporting.
        </p>
        <p>
          Then add your point of view. Talk about how you approach positioning,
          how you work cross-functionally, and how you keep marketing tied to
          business outcomes instead of vanity metrics.
        </p>
        <p>
          This is also a good place to mention industries, team sizes, or
          operating environments you know well, whether that is B2B SaaS,
          agency, startup, ecommerce, or something else.
        </p>
      </ThemedText>

      <ThemedSurface className="p-8">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="accent"
        >
          Quick Snapshot
        </ThemedText>
        <ThemedText as="dl" className="mt-6 space-y-5" variant="body">
          <div>
            <ThemedText
              as="dt"
              className="text-sm uppercase tracking-[0.18em]"
              variant="accent"
            >
              Focus
            </ThemedText>
            <ThemedText as="dd" className="mt-2 text-lg" variant="heading">
              Growth marketing, brand campaigns, and lifecycle strategy
            </ThemedText>
          </div>
          <div>
            <ThemedText
              as="dt"
              className="text-sm uppercase tracking-[0.18em]"
              variant="accent"
            >
              Strength
            </ThemedText>
            <ThemedText as="dd" className="mt-2 text-lg" variant="heading">
              Turning messy goals into clear plans and measurable execution
            </ThemedText>
          </div>
          <div>
            <ThemedText
              as="dt"
              className="text-sm uppercase tracking-[0.18em]"
              variant="accent"
            >
              Collaboration
            </ThemedText>
            <ThemedText as="dd" className="mt-2 text-lg" variant="heading">
              Product, design, sales, leadership, and external partners
            </ThemedText>
          </div>
        </ThemedText>
      </ThemedSurface>
    </section>
  </SiteLayout>
);

export default AboutPage;
