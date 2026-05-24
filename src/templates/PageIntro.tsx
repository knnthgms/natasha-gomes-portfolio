import { ThemedSection, ThemedText } from '../theme/Theme';

type IPageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = (props: IPageIntroProps) => (
  <ThemedSection divider="bottom">
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-20">
      <ThemedText
        className="text-sm font-semibold uppercase tracking-[0.2em]"
        variant="accent"
      >
        {props.eyebrow}
      </ThemedText>
      <ThemedText
        as="h1"
        className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl"
        variant="heading"
      >
        {props.title}
      </ThemedText>
      <ThemedText className="mt-6 max-w-2xl text-lg leading-8" variant="body">
        {props.description}
      </ThemedText>
    </div>
  </ThemedSection>
);

export { PageIntro };
