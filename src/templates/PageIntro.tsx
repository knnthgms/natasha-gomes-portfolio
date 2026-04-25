type IPageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = (props: IPageIntroProps) => (
  <section className="theme-divider border-b">
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-20">
      <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">
        {props.eyebrow}
      </p>
      <h1 className="theme-heading mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
        {props.title}
      </h1>
      <p className="theme-body mt-6 max-w-2xl text-lg leading-8">
        {props.description}
      </p>
    </div>
  </section>
);

export { PageIntro };
