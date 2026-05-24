import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const projects = [
  {
    label: 'Demand Generation',
    title: 'Rebuilt a campaign engine around audience intent.',
    description:
      'A placeholder case study for integrated campaign planning, channel coordination, and pipeline-focused reporting.',
    outcome: '42% qualified pipeline growth',
  },
  {
    label: 'Product Launch',
    title: 'Took a launch from positioning to rollout.',
    description:
      'Use this project to show messaging, stakeholder alignment, creative briefing, and post-launch performance analysis.',
    outcome: '18 multi-channel launches',
  },
  {
    label: 'Lifecycle Marketing',
    title: 'Improved conversion through tighter nurture journeys.',
    description:
      'A strong slot for email, CRM, onboarding, retention, or upsell work that turned strategy into a repeatable system.',
    outcome: 'Cleaner customer journeys',
  },
];

const ProjectsPage = () => (
  <SiteLayout
    title="Projects | Natasha Gomes"
    description="Selected marketing projects and case studies by Natasha Gomes."
  >
    <PageIntro
      eyebrow="Projects"
      title="Selected work with the shape of a story."
      description="Use this page to turn outcomes into compact case studies: the challenge, the strategy, the channels involved, and the result worth remembering."
    />

    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ThemedSurface as="article" key={project.title} className="p-8">
            <ThemedText
              className="text-sm font-semibold uppercase tracking-[0.18em]"
              variant="accent"
            >
              {project.label}
            </ThemedText>
            <ThemedText
              as="h2"
              className="mt-4 text-2xl font-semibold"
              variant="heading"
            >
              {project.title}
            </ThemedText>
            <ThemedText className="mt-4 text-base leading-7" variant="body">
              {project.description}
            </ThemedText>
            <ThemedText
              className="mt-6 inline-block rounded-full px-4 py-2 text-sm font-semibold"
              variant="highlight"
            >
              {project.outcome}
            </ThemedText>
          </ThemedSurface>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default ProjectsPage;
