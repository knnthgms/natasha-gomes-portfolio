type IPageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const PageIntro = (props: IPageIntroProps) => (
  <section className="border-b border-slate-200">
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
        {props.eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {props.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {props.description}
      </p>
    </div>
  </section>
);

export { PageIntro };
