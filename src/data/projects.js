import { asset } from '../utils/asset.js'

const nineLaunch = asset('/assets/portfolio/nine-pilates-launchkit')
const nineBrand = asset('/assets/portfolio/nine-pilates-branding')
const uncleImg = asset('/assets/portfolio/lumos-projects/uncle-phils.jpg')
const uncleMenu = asset('/assets/portfolio/lumos-projects/uncle-phils-menu.jpg')
const unclePoster = asset('/assets/portfolio/lumos-projects/uncle-phils-poster.jpg')
const uncleStickers = asset('/assets/portfolio/lumos-projects/uncle-phils-stickers.jpg')
const unclePattern = asset('/assets/portfolio/lumos-projects/uncle-phils-pattern.jpg')
const heavenlyLogo = asset('/assets/portfolio/lumos-projects/heavenly-desserts-logo.png')
const heavenlyFood = asset('/assets/portfolio/lumos-projects/heavenly-desserts-food.jpg')
const abdul1 = asset('/assets/portfolio/lumos-projects/abdul-islam-1.jpg')
const abdul2 = asset('/assets/portfolio/lumos-projects/abdul-islam-2.jpg')
const abdul3 = asset('/assets/portfolio/lumos-projects/abdul-islam-3.jpg')
const abdul4 = asset('/assets/portfolio/lumos-projects/abdul-islam-4.jpg')
const abdul5 = asset('/assets/portfolio/lumos-projects/abdul-islam-5.jpg')
const abdul6 = asset('/assets/portfolio/lumos-projects/abdul-islam-6.jpg')

// Shared step/testimonial/highlight/results scaffold for case studies still
// awaiting their real project details — keeps the layout consistent with
// the fully-fleshed-out projects while staying honest that specifics are TBC.
function placeholderSections(name, type, coverImage) {
  return {
    steps: [
      {
        title: 'Overview',
        body: [`${name} is a placeholder case study, pulled into the portfolio ahead of the real project details.`],
      },
      {
        title: 'Approach',
        body: ['Once the brief, images, and outcomes are shared, we\'ll rebuild this section with the real story behind the work.'],
      },
      {
        title: 'Challenges',
        body: ['This section will cover the specific challenges once the full case study details are available.'],
      },
      {
        title: 'Solutions',
        body: ['This section will cover our solution once the full case study details are available.'],
      },
    ],
    testimonial: {
      image: coverImage,
      quote: '[Client testimonial to be added]',
      name: '',
      role: '',
    },
    highlight: {
      heading: 'Beyond the Brand',
      body: 'This project entry is a placeholder — real supporting visuals and details will go here.',
      images: [coverImage, coverImage],
      footerHeading: 'More To Come',
      footerNote: type,
      ctaLabel: 'Start today',
    },
    results: {
      text: 'Full results for this project will be added once details are available.',
      image: coverImage,
    },
  }
}

export const projects = {
  'nine-pilates-launchkit': {
    slug: 'nine-pilates-launchkit',
    name: 'Nine Pilates',
    year: '©2025',
    type: 'Elite Launch Kit',
    location: 'Ottawa, Canada',
    tags: ['Case Study', 'Web Development', 'Cinematography', 'Photography', 'UX UI'],
    intro:
      'We launched Nine Pilates with a bilingual website, premium media library, and custom NFC cards for a seamless brand debut.',
    websiteLink: {
      label: 'ninepilates.com',
      description:
        'Explore the elegant and user-friendly website we crafted for Nine Pilates, showcasing their brand and services.',
      url: 'https://ninepilates.com',
    },
    coverVideo: `${nineLaunch}/homePageShowreel.mp4`,
    coverPoster: `${nineLaunch}/ninePilatesMockup.jpg`,
    steps: [
      {
        title: 'Overview',
        body: [
          `Nine Pilates is a contemporary Pilates studio in Orléans, Ontario, rooted in
          mindfulness, strength, and connection. They needed a premium digital launch to
          introduce themselves to the community with impact, covering brand presence, media
          assets, and physical-to-digital touchpoints.`,
        ],
      },
      {
        title: 'Approach',
        body: [
          `We recommended Nine Pilates one of our flagship Launch Kit packages, designed to
          provide everything a business needs for a strong market entry: a fully custom
          website, media production, brand-aligned assets, and marketing-ready collateral.`,
        ],
      },
      {
        title: 'Challenges',
        body: [
          `Our challenges were threefold: craft a bilingual site with seamless English/French
          switching that never interrupts the user experience, establish a consistent visual
          identity across web and print while the studio space was still under construction,
          and engineer a high-performance, scalable platform without a CMS — honoring the
          client's preference for a hands-off backend managed entirely by our team.`,
        ],
      },
      {
        title: 'Solutions',
        body: [
          `Our solution combined cutting-edge development with premium creative production. The
          site was built on a React and Zustand stack, enhanced with GSAP and Lenis for fluid
          animations, WebGL for immersive visuals, and Bunny CDN for fast global delivery.`,
          `To ensure accessibility, we implemented i18n with JSON locale files, allowing instant
          English/French switching without disrupting the user experience.`,
          `Beyond the build, we executed two in-studio shoots with a Blackmagic Design cinema
          camera and a Canon DSLR. All post-production was handled in-house, ensuring a
          consistent visual language across platforms.`,
          `To extend the brand beyond the digital space, we also produced custom metal NFC
          business cards, programmed to link directly to the Nine Pilates website — creating a
          premium, tangible bridge between physical and digital interactions.`,
        ],
      },
    ],
    images: [{ src: `${nineLaunch}/founders.jpg`, alt: 'Nine Pilates founders', variant: 'wide', parallax: 40 }],
    testimonial: {
      image: `${nineLaunch}/legs.jpg`,
      quote:
        '"Lumos Studios gave us everything we needed to launch with impact—a stunning site, a stunning media library, and tools that make us stand out. The results speak for themselves."',
      name: 'Valerie Guilbault',
      role: 'CEO & Founder',
    },
    highlight: {
      heading: 'Beyond Development',
      body: 'We ensure all our projects incorporate cinematic visuals crafted to position your brand effectively.',
      images: [`${nineLaunch}/beyondDev01.jpg`, `${nineLaunch}/beyondDev02.jpg`],
      footerHeading: 'Building the Visual Language',
      footerNote: 'Shot with Blackmagic Design',
      ctaLabel: 'Start today',
    },
    results: {
      text:
        'In just five weeks, we delivered a refined digital presence for Nine Pilates—combining a seamless bilingual website with custom visuals that authentically reflect their philosophy and position them as a premium studio in Ottawa.',
      image: `${nineLaunch}/results.jpg`,
      viewUrl: 'https://ninepilates.com',
    },
    nextProject: { slug: 'nine-pilates', label: 'Nine Pilates — Branding' },
  },

  'nine-pilates': {
    slug: 'nine-pilates',
    name: 'Nine Pilates',
    year: '©2025',
    type: 'Branding & Logo Design',
    location: 'Ottawa, Canada',
    tags: ['Case Study', 'Logo Design', 'Branding', 'Content Creation'],
    intro:
      'Nine Pilates is a modern pilates studio committed to promoting mindfulness, strength, and holistic well-being.',
    websiteLink: {
      label: 'ninepilates.com',
      description: 'View the finished site the brand identity was built for.',
      url: 'https://ninepilates.com',
    },
    coverImage: `${nineBrand}/ninePilates.jpg`,
    steps: [
      {
        title: 'Overview',
        body: [
          `This project involved developing a brand identity for Nine Pilates, a studio rooted in
          mindfulness, strength, and connection. The goal was to create a visual and verbal
          language that reflects the studio's minimalist ethos while conveying calm, control, and
          contemporary wellness.`,
        ],
      },
      {
        title: 'Approach',
        body: [
          `We approached the identity as a complete system rather than a single mark — logo,
          colour palette, typography, and brand guidelines all developed together, so every
          touchpoint would feel unmistakably Nine Pilates.`,
        ],
      },
      {
        title: 'Challenges',
        body: [
          `The challenge was striking the right balance: a mark calm and minimal enough to feel
          like a wellness studio, but distinctive enough to stand out across signage, apparel,
          and digital applications.`,
        ],
      },
      {
        title: 'Solutions',
        body: [
          `We landed on a refined wordmark and a restrained colour and type system, then extended
          it across everything from business cards to water bottles — giving the studio a
          consistent, considered presence everywhere the brand shows up.`,
        ],
      },
    ],
    testimonial: {
      image: `${nineBrand}/ninepilates-mainLogoDisplay.jpg`,
      quote: '[Client testimonial to be added]',
      name: '',
      role: '',
    },
    highlight: {
      heading: 'Beyond the Logo',
      body: 'We make sure every identity we build carries through to the physical touchpoints customers actually see and hold.',
      images: [`${nineBrand}/ninepilates-businessCards.jpg`, `${nineBrand}/ninepilates-waterBottle.jpg`],
      footerHeading: 'Bringing the Brand to Life',
      footerNote: 'Logo, Print & Merchandise',
      ctaLabel: 'Start today',
    },
    results: {
      text:
        'The result is a calm, considered identity that carries Nine Pilates\' values across every touchpoint — from the studio floor to the website in your hand.',
      image: `${nineBrand}/ninepilates-macbook.jpg`,
    },
    images: [
      { src: `${nineBrand}/ninepilates-brandIdentityCover.jpg`, alt: 'Nine Pilates brand identity cover', variant: 'wide' },
      { src: `${nineBrand}/ninepilates-mainLogoDisplay.jpg`, alt: 'Nine Pilates main logo', variant: 'wide' },
      { src: `${nineBrand}/ninepilates-typography-1.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-typography-1.2.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-typography-2.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-typography-2.2.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-sign.jpg`, alt: 'Nine Pilates business card', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-waterBottle.jpg`, alt: 'Nine Pilates water bottle', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-macbook.jpg`, alt: 'Nine Pilates website mockup', variant: 'wide' },
      { src: `${nineBrand}/ninepilates-businessCards.jpg`, alt: 'Nine Pilates business cards mockup', variant: 'wide' },
      { src: `${nineBrand}/ninepilates-typography-3.1.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
      { src: `${nineBrand}/ninepilates-typography-3.2.jpg`, alt: 'Nine Pilates typography system', variant: 'tall' },
    ],
    credits: [
      { role: 'Creative Director', name: 'Sasha Dieryckx' },
      { role: 'Creative Advisor', name: 'Noah Robert' },
      { role: 'Graphic Designer', name: 'Sasha Dieryckx' },
    ],
    nextProject: { slug: 'beuglab', label: 'BeugLab — Web Development' },
  },

  beuglab: {
    slug: 'beuglab',
    name: 'BeugLab',
    year: '©2025',
    type: 'Web Development',
    location: 'Ottawa, Canada',
    tags: ['Case Study', 'Web Development'],
    intro: 'Placeholder case study — the source page for this project no longer exists on the original site.',
    isPlaceholder: true,
    coverImage: asset('/assets/images/webdev-BJFsUdj3.png'),
    ...placeholderSections('BeugLab', 'Web Development', asset('/assets/images/webdev-BJFsUdj3.png')),
    nextProject: { slug: 'uncle-phils', label: 'Uncle Phils — Branding' },
  },

  'uncle-phils': {
    slug: 'uncle-phils',
    name: 'Uncle Phils',
    year: '©2025',
    type: 'Branding Launch Kit',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Logo Design', 'Branding', 'Packaging'],
    intro:
      'We took Uncle Phils from a blank slate to a complete, market-ready brand — logo, packaging, and shop design, built from the ground up.',
    coverImage: uncleImg,
    steps: [
      {
        title: 'Overview',
        body: [
          `Uncle Phils needed a full brand identity built from scratch — a bold, punchy mark
          that could carry across every touchpoint of the business, from packaging on the
          shelf to the physical shop front.`,
        ],
      },
      {
        title: 'Approach',
        body: [
          `We took the project through the full identity pipeline from day one: starting with
          the primary logotype, then extending that mark into a packaging system, and finally
          carrying the identity into the physical retail space.`,
        ],
      },
      {
        title: 'Challenges',
        body: [
          `The core challenge was consistency at scale — making sure one identity could flex
          across a tiny packaging label and a full shopfront sign without losing its punch or
          legibility.`,
        ],
      },
      {
        title: 'Solutions',
        body: [
          `We built a high-contrast, bold logotype system designed with flexibility in mind
          from the start, then rolled it out methodically — packaging first, then signage and
          interior branding for the shop — so the same energy carried through every surface
          the brand touches.`,
        ],
      },
    ],
    images: [{ src: uncleMenu, alt: 'Uncle Phils menu design', variant: 'wide', parallax: 40 }],
    testimonial: {
      image: unclePoster,
      quote: '[Client testimonial to be added]',
      name: '',
      role: '',
    },
    highlight: {
      heading: 'Beyond the Logo',
      body: 'We make sure every brand we build carries its identity into the real world — from social content to print.',
      images: [uncleStickers, unclePattern],
      footerHeading: 'Bringing the Brand to Life',
      footerNote: 'Logo, Packaging & Shop Design',
      ctaLabel: 'Start today',
    },
    results: {
      text:
        'From logo to shopfront, we delivered a complete brand identity for Uncle Phils—bold, consistent, and built to stand out at every touchpoint.',
      image: uncleStickers,
    },
    nextProject: { slug: 'heavenly-desserts', label: 'Heavenly Desserts — Branding & Photography' },
  },

  'heavenly-desserts': {
    slug: 'heavenly-desserts',
    name: 'Heavenly Desserts',
    year: '©2026',
    type: 'Photography & Videography',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Photography', 'Videography', 'Branding'],
    intro:
      'A refined brand identity, food photography, and videography direction for Heavenly Desserts, a dessert and brunch destination built around indulgence and presentation.',
    coverImage: heavenlyFood,
    steps: [
      {
        title: 'Overview',
        body: [
          `From the outset, the goal was to give Heavenly Desserts a visual identity that matched
          the quality of what was coming out of the kitchen. We spent time understanding the
          brand's personality — playful, indulgent, and a little bit special — before landing on
          the emblem mark that now anchors everything from packaging to social.`,
        ],
      },
      {
        title: 'Approach',
        body: [
          `Once the identity was in place, we turned our attention to how the brand shows up in
          front of customers. Our photography and videography sessions were built around soft,
          natural light and close, appetising detail shots that make every dish feel like the
          hero of the frame.`,
        ],
      },
      {
        title: 'Challenges',
        body: [
          `The challenge was capturing the full range of the menu — delicate desserts, colourful
          drinks, and full brunch plates — in a way that felt cohesive, rather than like several
          different shoots stitched together.`,
        ],
      },
      {
        title: 'Solutions',
        body: [
          `We built a consistent shot list and colour treatment that flexes across every dish on
          the menu, giving Heavenly Desserts a visual language that stays recognisable whether
          it's a story on Instagram, a photo on the menu, or a still from one of the video edits.`,
        ],
      },
    ],
    images: [
      { src: heavenlyFood, alt: 'Heavenly Desserts food photography', variant: 'wide', parallax: 40 },
      { src: heavenlyLogo, alt: 'Heavenly Desserts emblem logo', variant: 'tall' },
    ],
    testimonial: {
      image: heavenlyLogo,
      quote: '[Client testimonial to be added]',
      name: '',
      role: '',
    },
    highlight: {
      heading: 'Beyond the Plate',
      body: 'We make sure every brand we build carries its identity into the real world — from social content to video.',
      images: [heavenlyFood, heavenlyLogo],
      footerHeading: 'Bringing the Brand to Life',
      footerNote: 'Branding, Photography & Videography',
      ctaLabel: 'Start today',
    },
    results: {
      text:
        'The result is a brand that feels considered and consistent everywhere it appears — indulgent, elevated, and unmistakably Heavenly Desserts.',
      image: heavenlyFood,
    },
    nextProject: { slug: 'abdul-islam', label: 'Abdul Islam — Social Media Marketing' },
  },

  'abdul-islam': {
    slug: 'abdul-islam',
    name: 'Abdul Islam',
    year: '©2025',
    type: 'Social Media Marketing & Design',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Social Media Marketing', 'Design'],
    intro:
      'Ongoing social media marketing and design support for Abdul Islam, helping the brand\'s food reach a wider audience online.',
    coverImage: abdul1,
    steps: [
      {
        title: 'Overview',
        body: [
          `Abdul Islam came to us looking for a more consistent, professional presence across
          social media — content that did justice to the food without needing a big production
          every time.`,
        ],
      },
      {
        title: 'Approach',
        body: [
          `We built a simple content system around their existing photography, pairing strong
          crops and colour grading with clean, on-brand promotional graphics, then took over the
          planning, design, and posting cadence.`,
        ],
      },
      {
        title: 'Challenges',
        body: [
          `The challenge was keeping the feed varied and consistently engaging — balancing
          straight food shots, offers, and behind-the-scenes moments — without it becoming
          repetitive or feeling like more work for the client.`,
        ],
      },
      {
        title: 'Solutions',
        body: [
          `We settled into a simple content rhythm that keeps the account active and on-brand day
          to day. Since taking over social, it's become a more reliable channel for driving
          footfall and repeat orders, with content that consistently performs well with their
          local audience.`,
        ],
      },
    ],
    images: [
      { src: abdul2, alt: 'Abdul Islam food photography', variant: 'wide', parallax: 40 },
      { src: abdul3, alt: 'Abdul Islam food photography', variant: 'wide' },
      { src: abdul4, alt: 'Abdul Islam food photography', variant: 'wide' },
    ],
    testimonial: {
      image: abdul5,
      quote: '[Client testimonial to be added]',
      name: '',
      role: '',
    },
    highlight: {
      heading: 'Beyond the Feed',
      body: 'We keep the content pipeline running — planning, shooting direction, and design all handled so the account never goes quiet.',
      images: [abdul6, abdul1],
      footerHeading: 'Consistent, On-Brand, Always Fresh',
      footerNote: 'Social Media Marketing & Design',
      ctaLabel: 'Start today',
    },
    results: {
      text:
        'Since taking over social, Abdul Islam has a more reliable channel for driving footfall and repeat orders — with content that consistently performs well with their local audience.',
      image: abdul4,
    },
    nextProject: { slug: 'wings-n-thingz', label: 'Wings n Thingz — Branding' },
  },

  'wings-n-thingz': {
    slug: 'wings-n-thingz',
    name: 'Wings n Thingz',
    year: '©2025',
    type: 'Branding',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Branding'],
    intro: 'Vibrant, appetite-driven branding for a wings-focused food concept.',
    isPlaceholder: true,
    coverImage: asset('/assets/portfolio/lumos-projects/wings-n-thingz.jpg'),
    ...placeholderSections('Wings n Thingz', 'Branding', asset('/assets/portfolio/lumos-projects/wings-n-thingz.jpg')),
    nextProject: { slug: 'chai-factory', label: 'Chai Factory — Branding' },
  },

  'chai-factory': {
    slug: 'chai-factory',
    name: 'Chai Factory',
    year: '©2025',
    type: 'Branding',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Branding'],
    intro: 'Warm, editorial brand direction built around mindful, present-moment messaging.',
    isPlaceholder: true,
    coverImage: asset('/assets/portfolio/lumos-projects/chai-factory.jpg'),
    ...placeholderSections('Chai Factory', 'Branding', asset('/assets/portfolio/lumos-projects/chai-factory.jpg')),
    nextProject: { slug: 'flow', label: 'FLOW — Branding' },
  },

  flow: {
    slug: 'flow',
    name: 'FLOW',
    year: '©2025',
    type: 'Branding',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Branding'],
    intro: 'A confident, movement-led identity built for an activewear brand.',
    isPlaceholder: true,
    coverImage: asset('/assets/portfolio/lumos-projects/flow.jpg'),
    ...placeholderSections('FLOW', 'Branding', asset('/assets/portfolio/lumos-projects/flow.jpg')),
    nextProject: { slug: 'juci', label: 'Juci — Branding' },
  },

  juci: {
    slug: 'juci',
    name: 'Juci',
    year: '©2025',
    type: 'Branding',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Branding'],
    intro: 'A clean, minimalist wordmark and palette for a modern beverage brand.',
    isPlaceholder: true,
    coverImage: asset('/assets/portfolio/lumos-projects/juci.jpg'),
    ...placeholderSections('Juci', 'Branding', asset('/assets/portfolio/lumos-projects/juci.jpg')),
    nextProject: { slug: 'house-of-customs', label: 'House of Customs — Branding' },
  },

  'house-of-customs': {
    slug: 'house-of-customs',
    name: 'House of Customs',
    year: '©2025',
    type: 'Branding',
    location: 'Birmingham, United Kingdom',
    tags: ['Case Study', 'Branding'],
    intro: 'A raw, hand-drawn brush-script identity for a custom automotive brand.',
    isPlaceholder: true,
    coverImage: asset('/assets/portfolio/lumos-projects/house-of-customs.jpg'),
    ...placeholderSections('House of Customs', 'Branding', asset('/assets/portfolio/lumos-projects/house-of-customs.jpg')),
    nextProject: { slug: 'nine-pilates-launchkit', label: 'Nine Pilates — Launch Kit' },
  },
}

export function getProject(slug) {
  return projects[slug]
}
