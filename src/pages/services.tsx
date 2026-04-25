import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

const services = [
  {
    title: 'Campaign Planning',
    description:
      'Go-to-market planning, launch calendars, channel mapping, and messaging alignment.',
  },
  {
    title: 'Content Strategy',
    description:
      'Editorial planning, campaign narratives, briefing, and conversion-focused copy direction.',
  },
  {
    title: 'Lifecycle Programs',
    description:
      'Email journeys, onboarding, nurture design, retention strategy, and CRM coordination.',
  },
  {
    title: 'Performance Reporting',
    description:
      'Dashboard planning, KPI tracking, post-campaign readouts, and leadership reporting.',
  },
];

const ServicesPage = () => (
  <SiteLayout
    title="Services | Natasha Gomes"
    description="Services and marketing capabilities offered by Natasha Gomes."
  >
    <PageIntro
      eyebrow="Services"
      title="A clear menu of the marketing work you lead, own, or support."
      description="Even if this stays portfolio-first rather than freelance-first, this page is useful. It helps visitors quickly understand what kinds of projects and responsibilities fit your experience."
    />

    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default ServicesPage;
