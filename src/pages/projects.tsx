import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

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
          <article
            key={project.title}
            className="theme-card rounded-3xl border p-8"
          >
            <p className="theme-accent text-sm font-semibold uppercase tracking-[0.18em]">
              {project.label}
            </p>
            <h2 className="theme-heading mt-4 text-2xl font-semibold">
              {project.title}
            </h2>
            <p className="theme-body mt-4 text-base leading-7">
              {project.description}
            </p>
            <p className="theme-highlight mt-6 inline-block rounded-full px-4 py-2 text-sm font-semibold">
              {project.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default ProjectsPage;
