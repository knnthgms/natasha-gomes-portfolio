import { siteContent } from '../content/siteContent';
import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const { experience } = siteContent;

const ExperiencePage = () => (
  <SiteLayout
    title={experience.meta.title}
    description={experience.meta.description}
  >
    <PageIntro
      eyebrow={experience.intro.eyebrow}
      title={experience.intro.title}
      description={experience.intro.description}
    />

    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-12">
      <div className="space-y-6">
        {experience.roles.map((role) => (
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
