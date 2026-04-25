import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

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
      <div className="theme-body space-y-6 text-lg leading-8">
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
      </div>

      <div className="theme-card rounded-3xl border p-8">
        <p className="theme-accent text-sm font-semibold uppercase tracking-[0.18em]">
          Quick Snapshot
        </p>
        <dl className="theme-body mt-6 space-y-5">
          <div>
            <dt className="text-sm uppercase tracking-[0.18em]">Focus</dt>
            <dd className="theme-heading mt-2 text-lg">
              Growth marketing, brand campaigns, and lifecycle strategy
            </dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.18em]">Strength</dt>
            <dd className="theme-heading mt-2 text-lg">
              Turning messy goals into clear plans and measurable execution
            </dd>
          </div>
          <div>
            <dt className="text-sm uppercase tracking-[0.18em]">
              Collaboration
            </dt>
            <dd className="theme-heading mt-2 text-lg">
              Product, design, sales, leadership, and external partners
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </SiteLayout>
);

export default AboutPage;
