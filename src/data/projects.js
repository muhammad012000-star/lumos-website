const nineLaunch = '/assets/portfolio/nine-pilates-launchkit'
const nineBrand = '/assets/portfolio/nine-pilates-branding'

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
    about:
      'This project involved developing a brand identity for Nine Pilates, a studio rooted in mindfulness, strength, and connection. The goal was to create a visual and verbal language that reflects the studio\'s minimalist ethos while conveying calm, control, and contemporary wellness. The deliverables included logo design, color palette, typography, and brand guidelines aligned with Nine\'s core values.',
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
    coverImage: '/assets/images/webdev-BJFsUdj3.png',
    about:
      'This project entry is a placeholder. Send over the real project details (overview, images, credits) and I\'ll wire them into this same template.',
    nextProject: { slug: 'nine-pilates-launchkit', label: 'Nine Pilates — Launch Kit' },
  },
}

export function getProject(slug) {
  return projects[slug]
}
