import { siteContent } from '../content/siteContent';
import {
  ThemedButtonLink,
  ThemedSection,
  ThemedSurface,
  ThemedText,
} from '../theme/Theme';
import { AppConfig } from '../utils/AppConfig';
import { SiteLayout } from './SiteLayout';

const { home } = siteContent;

const Base = () => (
  <SiteLayout title={AppConfig.title} description={AppConfig.description}>
    <ThemedSection divider="bottom">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-3xl">
            <ThemedText
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              variant="accent"
            >
              {home.hero.eyebrow}
            </ThemedText>
            <ThemedText
              as="h2"
              className="mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-6xl"
              variant="heading"
            >
              {home.hero.title}
            </ThemedText>
            <ThemedText
              className="mt-6 max-w-2xl text-lg leading-8"
              variant="body"
            >
              {home.hero.description}
            </ThemedText>

            <div className="mt-8 flex flex-wrap gap-4">
              <ThemedButtonLink
                className="rounded-full px-6 py-3 text-sm font-semibold transition"
                href={home.hero.primaryAction.href}
              >
                {home.hero.primaryAction.label}
              </ThemedButtonLink>
              <ThemedButtonLink
                className="rounded-full px-6 py-3 text-sm font-semibold transition"
                href={home.hero.secondaryAction.href}
                variant="secondary"
              >
                {home.hero.secondaryAction.label}
              </ThemedButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {home.stats.map((stat) => (
              <ThemedSurface key={stat.label} className="p-6">
                <ThemedText
                  className="text-sm uppercase tracking-[0.18em]"
                  variant="body"
                >
                  {stat.label}
                </ThemedText>
                <ThemedText
                  className="mt-4 text-4xl font-semibold"
                  variant="heading"
                >
                  {stat.value}
                </ThemedText>
                <ThemedText className="mt-2 text-sm leading-6" variant="body">
                  {stat.description}
                </ThemedText>
              </ThemedSurface>
            ))}
          </div>
        </div>
      </div>
    </ThemedSection>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="max-w-2xl">
        <ThemedText
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          variant="accent"
        >
          {home.selectedWins.eyebrow}
        </ThemedText>
        <ThemedText
          as="h2"
          className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
          variant="heading"
        >
          {home.selectedWins.title}
        </ThemedText>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {home.selectedWins.items.map((item) => {
          const isStrong = item.variant === 'strongCard';

          return (
            <ThemedSurface
              as="article"
              className="p-8"
              key={item.title}
              variant={isStrong ? 'strongCard' : 'card'}
            >
              <ThemedText
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                variant={isStrong ? 'warmAccent' : 'body'}
              >
                {item.label}
              </ThemedText>
              <ThemedText
                as="h3"
                className="mt-4 text-2xl font-semibold"
                variant={isStrong ? 'strongHeading' : 'heading'}
              >
                {item.title}
              </ThemedText>
              <ThemedText
                className="mt-4 text-base leading-7"
                variant={isStrong ? 'strongBody' : 'body'}
              >
                {item.description}
              </ThemedText>
            </ThemedSurface>
          );
        })}
      </div>
    </section>

    <ThemedSection className="px-6 py-20 lg:px-12" divider="vertical">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="accent"
          >
            {home.capabilities.eyebrow}
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="heading"
          >
            {home.capabilities.title}
          </ThemedText>
          <ThemedText className="mt-6 text-lg leading-8" variant="body">
            {home.capabilities.description}
          </ThemedText>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {home.capabilities.items.map((item) => (
            <ThemedSurface key={item.title} className="p-6" variant="softCard">
              <ThemedText
                as="h3"
                className="text-xl font-semibold"
                variant="heading"
              >
                {item.title}
              </ThemedText>
              <ThemedText className="mt-3 leading-7" variant="body">
                {item.description}
              </ThemedText>
            </ThemedSurface>
          ))}
        </div>
      </div>
    </ThemedSection>

    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="accent"
          >
            {home.experienceSnapshot.eyebrow}
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="heading"
          >
            {home.experienceSnapshot.title}
          </ThemedText>
        </div>
        <ThemedText className="max-w-xl text-base leading-7" variant="body">
          {home.experienceSnapshot.description}
        </ThemedText>
      </div>

      <div className="mt-12 space-y-6">
        {home.experienceSnapshot.roles.map((role) => (
          <ThemedSurface as="article" className="p-8" key={role.title}>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <ThemedText
                  className="text-sm font-semibold uppercase tracking-[0.18em]"
                  variant="body"
                >
                  {role.years}
                </ThemedText>
                <ThemedText
                  as="h3"
                  className="mt-2 text-2xl font-semibold"
                  variant="heading"
                >
                  {role.title}, {role.company}
                </ThemedText>
              </div>
              <ThemedText
                className="text-sm font-medium uppercase tracking-[0.18em]"
                variant="accent"
              >
                {role.category}
              </ThemedText>
            </div>
            <ThemedText className="mt-5 max-w-3xl leading-7" variant="body">
              {role.summary}
            </ThemedText>
          </ThemedSurface>
        ))}
      </div>
    </section>

    <ThemedSurface
      as="section"
      className="px-6 py-20 lg:px-12"
      style={{ borderRadius: 0 }}
      variant="strongCard"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <ThemedText
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            variant="warmAccent"
          >
            {home.contactCta.eyebrow}
          </ThemedText>
          <ThemedText
            as="h2"
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variant="strongHeading"
          >
            {home.contactCta.title}
          </ThemedText>
          <ThemedText className="mt-5 text-lg leading-8" variant="strongBody">
            {home.contactCta.description}
          </ThemedText>
        </div>

        <div className="flex flex-wrap gap-4">
          <ThemedButtonLink
            className="rounded-full px-6 py-3 text-sm font-semibold transition"
            href={home.contactCta.primaryAction.href}
            variant="highlight"
          >
            {home.contactCta.primaryAction.label}
          </ThemedButtonLink>
          <ThemedButtonLink
            className="rounded-full px-6 py-3 text-sm font-semibold transition"
            href={home.contactCta.secondaryAction.href}
            variant="outline"
          >
            {home.contactCta.secondaryAction.label}
          </ThemedButtonLink>
        </div>
      </div>
    </ThemedSurface>
  </SiteLayout>
);

export { Base };
