import { PageIntro } from '../templates/PageIntro';
import { SiteLayout } from '../templates/SiteLayout';

const skillGroups = [
  {
    title: 'Strategy',
    items: ['Positioning', 'Audience segmentation', 'Campaign planning'],
  },
  {
    title: 'Channels',
    items: ['Email marketing', 'Paid social', 'Content marketing'],
  },
  {
    title: 'Operations',
    items: ['Reporting', 'CRM workflows', 'Marketing automation'],
  },
  {
    title: 'Leadership',
    items: [
      'Cross-functional planning',
      'Creative briefing',
      'Vendor management',
    ],
  },
];

const SkillsPage = () => (
  <SiteLayout
    title="Skills | Natasha Gomes"
    description="Marketing, strategy, and leadership skills for Natasha Gomes."
  >
    <PageIntro
      eyebrow="Skills"
      title="Show the capabilities behind the outcomes."
      description="This page works well when it balances strategic strengths with practical execution. It gives hiring managers a quick scan of how broad and hands-on your experience really is."
    />

    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="theme-card rounded-3xl border p-8"
          >
            <h2 className="theme-heading text-2xl font-semibold">
              {group.title}
            </h2>
            <ul className="theme-body mt-5 space-y-3 text-base leading-7">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default SkillsPage;
