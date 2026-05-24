import { siteContent } from '../content/siteContent';
import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const { projects } = siteContent;

const ProjectsPage = () => (
  <SiteLayout
    title={projects.meta.title}
    description={projects.meta.description}
  >
    <PageIntro
      eyebrow={projects.intro.eyebrow}
      title={projects.intro.title}
      description={projects.intro.description}
    />

    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.items.map((project) => (
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
