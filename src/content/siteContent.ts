const siteContent = {
  site: {
    name: 'Natasha Gomes',
    title: 'Natasha Gomes | Marketing Manager Portfolio',
    description:
      'Portfolio website for Natasha Gomes, a marketing manager focused on campaign strategy, content leadership, growth, and brand-building.',
    locale: 'en',
    email: 'natasha@portfolio.com',
  },

  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ],

  footer: {
    description:
      'Marketing manager portfolio starter for experience, services, and future case studies.',
  },

  accessibility: {
    primaryNavigationLabel: 'Primary',
  },

  home: {
    hero: {
      eyebrow: 'Marketing Manager',
      title: 'Building growth programs that turn attention into revenue.',
      description:
        'Replace this copy with a concise positioning statement about the kind of marketing work you lead. This starter is set up for campaign strategy, content leadership, lifecycle marketing, and cross-functional execution.',
      primaryAction: {
        label: 'Email Me',
        href: 'mailto:natasha@portfolio.com',
      },
      secondaryAction: {
        label: 'Learn More',
        href: '/about',
      },
    },
    stats: [
      {
        label: 'Pipeline Growth',
        value: '42%',
        description:
          'YoY increase in qualified pipeline from integrated campaigns.',
      },
      {
        label: 'Launch Velocity',
        value: '18',
        description:
          'Multi-channel launches led in one year across paid, email, and web.',
      },
      {
        label: 'Team Leadership',
        value: '6',
        description:
          'Internal and freelance contributors coordinated across creative and ops.',
      },
    ],
    selectedWins: {
      eyebrow: 'Selected Wins',
      title: 'A clean place to showcase outcomes, not just responsibilities.',
      items: [
        {
          label: 'Demand Generation',
          title: 'Rebuilt the campaign engine around audience intent.',
          description:
            'Use this card for a strong case-study summary: what changed, what channels were involved, and what measurable business result came out of it.',
          variant: 'card',
        },
        {
          label: 'Brand Campaign',
          title: 'Took a product launch from narrative to rollout.',
          description:
            'Highlight a launch you led across messaging, creative briefs, stakeholder alignment, and post-launch reporting.',
          variant: 'strongCard',
        },
        {
          label: 'Lifecycle Marketing',
          title: 'Improved conversion by tightening nurture journeys.',
          description:
            'This is a good slot for email, retention, upsell, onboarding, or CRM work that proves you can turn strategy into repeatable systems.',
          variant: 'card',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title:
        'Built for a marketing manager who works across strategy and execution.',
      description:
        'Keep this section focused on the handful of strengths you want a hiring manager or client to remember after a quick scan.',
      items: [
        {
          title: 'Campaign Strategy',
          description:
            'Positioning, segmentation, messaging frameworks, launch planning, and channel orchestration.',
        },
        {
          title: 'Content Leadership',
          description:
            'Editorial planning, copy direction, creative briefing, and content performance reviews.',
        },
        {
          title: 'Marketing Operations',
          description:
            'Automation, reporting cadences, dashboard design, and cleaner handoffs with sales and RevOps.',
        },
        {
          title: 'Team Management',
          description:
            'Managing agencies, freelancers, and internal partners without losing speed or brand consistency.',
        },
      ],
    },
    experienceSnapshot: {
      eyebrow: 'Experience Snapshot',
      title:
        'Start with a simple timeline, then deepen it later with full case studies.',
      description:
        'These entries are placeholders you can swap with your actual roles, dates, and responsibilities.',
      roles: [
        {
          years: '2023 - Present',
          title: 'Senior Marketing Manager',
          company: 'North Star Tech',
          category: 'B2B SaaS',
          summary:
            'Led integrated campaigns, owned quarterly launch calendars, and partnered with sales leadership on pipeline and conversion goals.',
        },
        {
          years: '2020 - 2023',
          title: 'Marketing Manager',
          company: 'Alder & Pine',
          category: 'Consumer Brand',
          summary:
            'Managed paid, social, email, and web content while coordinating agency partners and keeping reporting tied to business outcomes.',
        },
        {
          years: '2017 - 2020',
          title: 'Content and Campaign Lead',
          company: 'Studio Common',
          category: 'Agency',
          summary:
            'Built campaign narratives, developed editorial calendars, and translated client goals into briefs, timelines, and performance summaries.',
        },
      ],
    },
    contactCta: {
      eyebrow: 'Contact',
      title: 'Ready to turn this starter into your actual portfolio.',
      description:
        'Swap in your real numbers, add one or two strong case studies, and connect these buttons to your email, LinkedIn, resume, or Calendly.',
      primaryAction: {
        label: 'natasha@portfolio.com',
        href: 'mailto:natasha@portfolio.com',
      },
      secondaryAction: {
        label: 'Contact Page',
        href: '/contact',
      },
    },
  },

  about: {
    meta: {
      title: 'About | Natasha Gomes',
      description: 'About Natasha Gomes, marketing manager.',
    },
    intro: {
      eyebrow: 'About',
      title:
        'A space to explain your perspective, leadership style, and marketing range.',
      description:
        'This page is where you can sound like a person, not just a resume. Use it to connect your career story, decision-making style, and the kinds of teams or brands you do your best work with.',
    },
    paragraphs: [
      'Start with a sharp summary of your background. For example: you build integrated marketing programs that combine strategy, content, demand generation, and performance reporting.',
      'Then add your point of view. Talk about how you approach positioning, how you work cross-functionally, and how you keep marketing tied to business outcomes instead of vanity metrics.',
      'This is also a good place to mention industries, team sizes, or operating environments you know well, whether that is B2B SaaS, agency, startup, ecommerce, or something else.',
    ],
    snapshot: {
      eyebrow: 'Quick Snapshot',
      items: [
        {
          label: 'Focus',
          value: 'Growth marketing, brand campaigns, and lifecycle strategy',
        },
        {
          label: 'Strength',
          value:
            'Turning messy goals into clear plans and measurable execution',
        },
        {
          label: 'Collaboration',
          value: 'Product, design, sales, leadership, and external partners',
        },
      ],
    },
  },

  projects: {
    meta: {
      title: 'Projects | Natasha Gomes',
      description:
        'Selected marketing projects and case studies by Natasha Gomes.',
    },
    intro: {
      eyebrow: 'Projects',
      title: 'Selected work with the shape of a story.',
      description:
        'Use this page to turn outcomes into compact case studies: the challenge, the strategy, the channels involved, and the result worth remembering.',
    },
    items: [
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
    ],
  },

  experience: {
    meta: {
      title: 'Experience | Natasha Gomes',
      description:
        'Professional experience and career highlights for Natasha Gomes.',
    },
    intro: {
      eyebrow: 'Experience',
      title:
        'A dedicated timeline gives your work history more room to breathe.',
      description:
        'This page should feel more detailed than the home page teaser. Later, each role can link into deeper case studies, launches, or campaign breakdowns.',
    },
    roles: [
      {
        years: '2023 - Present',
        title: 'Senior Marketing Manager',
        company: 'North Star Tech',
        summary:
          'Owns integrated campaign strategy, quarterly launches, sales alignment, and revenue reporting.',
      },
      {
        years: '2020 - 2023',
        title: 'Marketing Manager',
        company: 'Alder & Pine',
        summary:
          'Led paid, content, social, and lifecycle programs with agency and internal team coordination.',
      },
      {
        years: '2017 - 2020',
        title: 'Content and Campaign Lead',
        company: 'Studio Common',
        summary:
          'Built campaign narratives, editorial calendars, and client-facing performance summaries.',
      },
    ],
  },

  contact: {
    meta: {
      title: 'Contact | Natasha Gomes',
      description:
        'Contact Natasha Gomes for marketing roles, consulting, or collaborations.',
    },
    intro: {
      eyebrow: 'Contact',
      title: 'Make it easy for the right opportunity to reach you.',
      description:
        'For now, this can stay simple: email, LinkedIn, resume, and a short note on what kinds of roles or projects you are open to.',
    },
    emailCard: {
      label: 'Email',
      email: 'natasha@portfolio.com',
      description:
        'Best for role inquiries, speaking requests, collaborations, or consulting conversations.',
    },
    linkCard: {
      label: 'Other Links',
      description:
        'Later, we can replace this block with a proper contact form, booking link, or downloadable resume asset.',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com',
        },
        {
          label: 'Resume',
          href: '/',
        },
      ],
    },
  },

  starterTemplates: {
    banner: {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      subtitle: 'Start your Free Trial.',
      action: {
        label: 'Get Started',
        href: 'https://creativedesignsguru.com/category/nextjs/',
      },
    },
    verticalFeatures: {
      title: 'Your title here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.',
      items: [
        {
          title: 'Your title here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
          image: '/assets/images/feature.svg',
          imageAlt: 'First feature alt text',
          reverse: false,
        },
        {
          title: 'Your title here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
          image: '/assets/images/feature2.svg',
          imageAlt: 'Second feature alt text',
          reverse: true,
        },
        {
          title: 'Your title here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
          image: '/assets/images/feature3.svg',
          imageAlt: 'Third feature alt text',
          reverse: false,
        },
      ],
    },
    sponsors: {
      title: 'Sponsors',
      description:
        "Our sponsors' exceptional support has made this project possible.",
      items: [
        {
          href: 'https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate',
          image: '/assets/images/clerk-logo-dark.png',
          imageAlt: 'Clerk - Authentication & User Management for Next.js',
        },
        {
          href: 'https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025',
          image: '/assets/images/coderabbit-logo-light.svg',
          imageAlt: 'CodeRabbit',
        },
        {
          href: 'https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo',
          image: '/assets/images/sentry-dark.png',
          imageAlt: 'Sentry',
        },
        {
          href: 'https://launch.arcjet.com/Q6eLbRE',
          image: '/assets/images/arcjet-light.svg',
          imageAlt: 'Arcjet',
        },
        {
          href: 'https://l.crowdin.com/next-js',
          image: '/assets/images/crowdin-dark.png',
          imageAlt: 'Better Stack',
        },
        {
          href: 'https://nextjs-boilerplate.com/pro-saas-starter-kit',
          image: '/assets/images/nextjs-boilerplate-saas.png',
          imageAlt: 'Next.js Boilerplate SaaS',
        },
      ],
    },
    hero: {
      navigation: [
        {
          label: 'GitHub',
          href: 'https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template',
        },
        {
          label: 'Sign in',
          href: '/',
        },
      ],
      titleStart: 'The modern landing page for\n',
      titleAccent: 'React developers',
      description: 'The easiest way to build a React landing page in seconds.',
      action: {
        label: 'Download Your Free Theme',
        href: 'https://creativedesignsguru.com/category/nextjs/',
      },
    },
  },
} as const;

export { siteContent };
