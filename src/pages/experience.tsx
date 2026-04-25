import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

const roles = [
  {
    years: '2023 - Present',
    title: 'Senior Marketing Manager',
    company: 'North Star Tech',
    summary:
      'Owns integrated campaign strategy, quarterly launches, sales alignment, and revenue reporting.',
  },
  {
    years: '2020 - 2023',
    title: 'Marketing Manager',
    company: 'Alder & Pine',
    summary:
      'Led paid, content, social, and lifecycle programs with agency and internal team coordination.',
  },
  {
    years: '2017 - 2020',
    title: 'Content and Campaign Lead',
    company: 'Studio Common',
    summary:
      'Built campaign narratives, editorial calendars, and client-facing performance summaries.',
  },
];

const ExperiencePage = () => (
  <SiteLayout
    title="Experience | Jordan Lee"
    description="Experience page for a marketing manager portfolio."
  >
    <PageIntro
      eyebrow="Experience"
      title="A dedicated timeline gives your work history more room to breathe."
      description="This page should feel more detailed than the home page teaser. Later, each role can link into deeper case studies, launches, or campaign breakdowns."
    />

    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <div className="space-y-6">
        {roles.map((role) => (
          <article
            key={`${role.years}-${role.company}`}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              {role.years}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              {role.title}, {role.company}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {role.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default ExperiencePage;
