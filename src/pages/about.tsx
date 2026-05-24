import { siteContent } from '../content/siteContent';
import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';
import { ThemedSurface, ThemedText } from '../theme/Theme';

const { about } = siteContent;

const AboutPage = () => (
  <SiteLayout title={about.meta.title} description={about.meta.description}>
    <PageIntro
      eyebrow={about.intro.eyebrow}
      title={about.intro.title}
      description={about.intro.description}
    />

    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
      <ThemedText
        as="div"
        className="space-y-6 text-lg leading-8"
        variant="body"
      >
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ThemedText>

      <ThemedSurface className="p-8">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          variant="accent"
        >
          {about.snapshot.eyebrow}
        </ThemedText>
        <ThemedText as="dl" className="mt-6 space-y-5" variant="body">
          {about.snapshot.items.map((item) => (
            <div key={item.label}>
              <ThemedText
                as="dt"
                className="text-sm uppercase tracking-[0.18em]"
                variant="accent"
              >
                {item.label}
              </ThemedText>
              <ThemedText as="dd" className="mt-2 text-lg" variant="heading">
                {item.value}
              </ThemedText>
            </div>
          ))}
        </ThemedText>
      </ThemedSurface>
    </section>
  </SiteLayout>
);

export default AboutPage;
