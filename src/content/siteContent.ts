// =============================================================================
// WEBSITE CONTENT — edit the text inside the quotes to update the live site.
// New to this? Read EDITING-GUIDE.md in this same folder first.
//
// Quick rules: only change text inside 'quotes', keep the comma at the end of
// each line, and don't rename the words before a colon (title:, label:, href:).
// =============================================================================

const siteContent = {
  site: {
    name: 'Natasha Gomes',
    url: 'https://www.natashagomes.com',
    title: 'Natasha Gomes | Product Marketing & Communications',
    description:
      'Portfolio of Natasha Gomes — a product marketing and communications leader with 11 years across SaaS go-to-market, brand, demand generation, and corporate communications.',
    locale: 'en',
    email: 'natashagomes2202@gmail.com',
    currentRole: 'Product Marketing Manager',
    targetRoles: [
      'Product Marketing Manager',
      'Go-to-Market Strategist',
      'Marketing & Communications Manager',
      'Growth Marketing Manager',
    ],
    searchFocus: [
      'product marketing',
      'go-to-market strategy',
      'SaaS marketing',
      'corporate communications',
      'brand and content marketing',
      'demand generation',
    ],
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
      'Product marketing and communications leader specializing in SaaS go-to-market, brand, content, and corporate communications.',
  },

  accessibility: {
    primaryNavigationLabel: 'Primary',
  },

  home: {
    hero: {
      eyebrow: 'Product Marketing Manager · SaaS & GTM',
      title: "Marketing that's measurable, not just creative.",
      description:
        "I'm Natasha Gomes — a product marketing and communications leader with 11 years building go-to-market strategy, brand, and demand for B2B and B2C. Most recently I built the GTM engine for 42Signals, a B2B SaaS product, from the ground up.",
      primaryAction: {
        label: 'Get in Touch',
        href: 'mailto:natashagomes2202@gmail.com',
      },
      secondaryAction: {
        label: 'Download Resume',
        href: '/resume.pdf',
      },
      image: {
        src: '/hero-photo.jpeg',
        alt: 'Natasha Gomes',
      },
    },
    stats: [
      {
        label: 'Experience',
        value: '11 yrs',
        description:
          'Across marketing and communications since 2015, spanning SaaS, aviation, and contracting.',
      },
      {
        label: 'SaaS Revenue',
        value: '$0 to $12K MRR',
        description:
          "Built 42Signals' inbound pipeline and revenue from scratch as the founding product marketer.",
      },
      {
        label: 'Organic Reach',
        value: '17K to 93K',
        description:
          'Grew social following organically across seven brands at ECC Group.',
      },
    ],
    selectedWins: {
      eyebrow: 'Selected Wins',
      title: 'Outcomes, not just responsibilities.',
      items: [
        {
          label: 'SaaS Go-to-Market',
          title: "Built 42Signals' GTM engine from zero.",
          description:
            'Owned category creation, positioning, messaging, and multi-channel campaigns — scaling a new B2B SaaS product from $0 to $12K MRR through a fully inbound pipeline.',
          variant: 'card',
        },
        {
          label: 'Brand & Events',
          title: 'Ran an aviation security event for 700+ delegates.',
          description:
            "Led content, branding, partnerships, and end-to-end execution for one of the region's largest aviation security events at Emirates Group.",
          variant: 'strongCard',
        },
        {
          label: 'Social & PR',
          title: 'Grew organic reach from 17K to 93K.',
          description:
            'Headed social and PR for seven companies at ECC Group, owning media presence, content strategy, and C-level communications.',
          variant: 'card',
        },
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'A product marketer who works across strategy, story, and growth.',
      description:
        'I connect positioning and brand to pipeline and revenue — across SaaS go-to-market, corporate and internal communications, content, and events.',
      items: [
        {
          title: 'Go-to-Market & Positioning',
          description:
            'Category creation, positioning, messaging, and launch planning for B2B and B2C products.',
        },
        {
          title: 'Demand & Content',
          description:
            'SEO, content marketing, email nurture, partnerships, and referral channels that build inbound pipeline.',
        },
        {
          title: 'Corporate & Internal Comms',
          description:
            'Media relations, C-level communications, PR, internal magazines, and two-way employee channels.',
        },
        {
          title: 'Brand, Events & Team',
          description:
            'Employer branding, large-scale events, creative direction, and leading internal and agency teams.',
        },
      ],
    },
    experienceSnapshot: {
      eyebrow: 'Experience Snapshot',
      title: 'Eleven years across SaaS, communications, and brand.',
      description:
        'A concise view of recent roles. The full timeline lives on the Experience page.',
      roles: [
        {
          years: '2022 - Present',
          title: 'Product Marketing Manager',
          company: 'PromptCloud (42Signals)',
          category: 'B2B SaaS',
          summary:
            'Founding product marketer for 42Signals — category creation, full GTM strategy, SEO, content, and internal communications.',
        },
        {
          years: '2020 - 2022',
          title: 'Associate Marketing & Communications Manager',
          company: 'Emirates Group',
          category: 'Aviation',
          summary:
            'Led internal and external communications, multi-channel marketing, and large-scale corporate events including a 700+ delegate aviation security summit.',
        },
        {
          years: '2017 - 2020',
          title: 'Digital Marketing, Comms & PR Executive',
          company: 'ECC Group',
          category: 'Contracting',
          summary:
            'Headed social and PR for seven group companies, growing organic following from 17K to 93K and managing full media presence.',
        },
      ],
    },
    contactCta: {
      eyebrow: 'Contact',
      title: "Let's talk product marketing, GTM, or communications.",
      description:
        'Open to product marketing and communications roles, consulting, and collaborations. Based in Bengaluru, working with global teams.',
      primaryAction: {
        label: 'natashagomes2202@gmail.com',
        href: 'mailto:natashagomes2202@gmail.com',
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
      description:
        'About Natasha Gomes — product marketing and communications leader across SaaS go-to-market, brand, and corporate communications.',
    },
    intro: {
      eyebrow: 'About',
      title: "The best marketing isn't just creative — it's measurable.",
      description:
        "I'm a product marketing and communications leader based in Bengaluru, with 11 years across SaaS, aviation, contracting, and sustainability.",
    },
    paragraphs: [
      "I've worked in marketing and communications since 2015. Most recently, I've led product marketing for 42Signals, a B2B SaaS product at PromptCloud, where I built the go-to-market strategy from the ground up — category creation, positioning, messaging, and multi-channel campaigns.",
      'I bring in global enterprise and big-brand clients through a mix of content marketing, SEO, partnerships, and referral channels — scaling 42Signals from $0 to $12K MRR and lifting its domain authority from 18 to 28.',
      'Before SaaS, I spent years in corporate communications at Emirates Group, managing media presence, C-level communications, and large-scale international events, plus marketing roles across healthcare, contracting, and sustainability.',
      "Internal communications is something I'm equally passionate about. I've built org-wide programs, internal magazines, AMA sessions, and two-way channels that help companies build cultures people actually want to be part of.",
    ],
    snapshot: {
      eyebrow: 'Quick Snapshot',
      items: [
        {
          label: 'Focus',
          value:
            'Product marketing, go-to-market strategy, and corporate communications',
        },
        {
          label: 'Experience',
          value:
            '11 years across SaaS, aviation, contracting, and sustainability',
        },
        {
          label: 'Strengths',
          value: 'Positioning, demand generation, content, SEO, PR, and events',
        },
        {
          label: 'Based in',
          value: 'Bengaluru, India — working with global B2B and B2C teams',
        },
      ],
    },
  },

  projects: {
    meta: {
      title: 'Projects | Natasha Gomes',
      description:
        'Selected product marketing, go-to-market, communications, and brand projects by Natasha Gomes.',
    },
    intro: {
      eyebrow: 'Projects',
      title: 'Selected work with the shape of a story.',
      description:
        'A few campaigns and programs where positioning, content, and execution turned into measurable outcomes.',
    },
    items: [
      {
        label: 'SaaS Go-to-Market',
        title: '42Signals: category creation to first revenue.',
        description:
          'As founding product marketer, I built the full GTM strategy — branding, positioning, messaging, and multi-channel campaigns — and a quality inbound lead pipeline, while lifting domain authority from 18 to 28 through SEO and content.',
        outcome: '$0 to $12K MRR',
      },
      {
        label: 'Corporate Events',
        title: 'A 700+ delegate aviation security event.',
        description:
          "At Emirates Group I planned and managed one of the region's largest aviation security events end to end — content, branding, external partnerships, and overall marketing for 700+ international delegates.",
        outcome: '700+ delegates hosted',
      },
      {
        label: 'Social & PR',
        title: 'Organic social growth across seven brands.',
        description:
          'As social and PR head at ECC Group, I ran 20 channels across seven companies, drove the full media presence and C-level communications, and grew the following organically.',
        outcome: '17K to 93K followers',
      },
    ],
  },

  experience: {
    meta: {
      title: 'Experience | Natasha Gomes',
      description:
        'Product marketing, communications, and brand experience for Natasha Gomes across SaaS, aviation, and contracting.',
    },
    intro: {
      eyebrow: 'Experience',
      title: 'Eleven years across SaaS, communications, and brand.',
      description:
        'A timeline of product marketing, communications, and growth roles across B2B SaaS, aviation, contracting, and consumer brands.',
    },
    roles: [
      {
        years: '2023 - Present',
        title: 'Product Marketing Manager',
        company: 'PromptCloud (42Signals)',
        summary:
          'Founding product marketer for 42Signals, a B2B SaaS product: category creation and full GTM strategy across branding, positioning, messaging, and multi-channel campaigns. Built an inbound pipeline from scratch ($0 to $12K MRR), grew domain authority from 18 to 28, brought in global enterprise clients, and ran internal communications including an internal magazine, AMAs, and a company blog.',
      },
      {
        years: '2022 - 2023',
        title: 'Associate Marketing Manager',
        company: 'PromptCloud',
        summary:
          'Owned internal communication channels and content — blogs, whitepapers, case studies, newsletters, and reports — executed product marketing and GTM for a SaaS product, and ran email campaigns to nurture clients and attract new prospects.',
      },
      {
        years: '2020 - 2022',
        title: 'Associate Marketing & Communications Manager',
        company: 'Emirates Group',
        summary:
          'Led internal and external communications for the organization and managed a team of four. Designed multi-channel marketing, hosted a 700+ delegate aviation security event, directed visual media and the in-house magazine, and ran employee engagement and CSR programs.',
      },
      {
        years: '2017 - 2020',
        title: 'Digital Marketing, Communications & PR Executive',
        company: 'Engineering Contracting Company (ECC Group)',
        summary:
          'Sole social media and PR head for seven group companies across 20 channels — growing the following from 17K to 93K organically, managing the full media presence and C-level communications, building and running websites, and coordinating events for 1,300+ employees.',
      },
      {
        years: '2016 - 2017',
        title: 'Social Media Executive',
        company: 'Fitterfox',
        summary:
          'Ran social media strategy and execution, email marketing campaigns, and blog content to acquire and retain clients across all channels.',
      },
      {
        years: '2015 - 2016',
        title: 'Business Development & Marketing Executive',
        company: 'Green Planet Ventures',
        summary:
          'Designed an integrated online and offline marketing strategy and built a new customer base of 300 accounts through outreach to national corporations.',
      },
    ],
  },

  contact: {
    meta: {
      title: 'Contact | Natasha Gomes',
      description:
        'Contact Natasha Gomes for product marketing, communications, go-to-market, consulting, or collaboration opportunities.',
    },
    intro: {
      eyebrow: 'Contact',
      title: "Let's start a conversation.",
      description:
        'For product marketing and communications roles, consulting, or collaborations — email me directly or connect through the links below.',
    },
    emailCard: {
      label: 'Email',
      email: 'natashagomes2202@gmail.com',
      description:
        'Best for role inquiries, consulting conversations, speaking, and collaborations.',
    },
    linkCard: {
      label: 'Elsewhere',
      description: 'Find my full background on LinkedIn or download my resume.',
      links: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/natashagomes2202/',
        },
        {
          label: 'Download Resume',
          href: '/natasha-gomes-resume.pdf',
        },
      ],
    },
  },
} as const;

export { siteContent };
