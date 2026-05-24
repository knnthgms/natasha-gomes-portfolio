import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

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
    title="Experience | Natasha Gomes"
    description="Professional experience and career highlights for Natasha Gomes."
  >
    <PageIntro
      eyebrow="Experience"
      title="A dedicated timeline gives your work history more room to breathe."
      description="This page should feel more detailed than the home page teaser. Later, each role can link into deeper case studies, launches, or campaign breakdowns."
    />

    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <div className="space-y-6">
        {roles.map((role) => (
          <ThemedSurface
            as="article"
            key={`${role.years}-${role.company}`}
            className="p-8"
          >
            <ThemedText
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              variant="accent"
            >
              {role.years}
            </ThemedText>
            <ThemedText
              as="h2"
              className="mt-3 text-2xl font-semibold"
              variant="heading"
            >
              {role.title}, {role.company}
            </ThemedText>
            <ThemedText className="mt-4 text-lg leading-8" variant="body">
              {role.summary}
            </ThemedText>
          </ThemedSurface>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default ExperiencePage;
