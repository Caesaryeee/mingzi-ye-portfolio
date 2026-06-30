import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  DownloadSimple,
  EnvelopeSimple,
  FigmaLogo,
  FilmSlate,
  LinkedinLogo,
  MapPin,
  Palette,
  PaperPlaneTilt,
  Play,
  Scissors,
  VideoCamera,
} from '@phosphor-icons/react'

const portfolioUrl =
  'https://drive.google.com/drive/folders/1MuJUFZqs1YFckr0sgPDcskDxLzOPPNdy?usp=sharing'
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`
const resumeUrl = assetUrl('assets/resume-mingzi-ye.pdf')
const email = 'ye.mingz@northeastern.edu'
const linkedinUrl = 'https://www.linkedin.com/in/MingziYe'

const categories = [
  {
    id: 'featured',
    label: 'Featured',
    headline: 'Featured cuts',
    description:
      'One strongest representative from each production category, selected for a fast scan of range, taste, and execution.',
    accent: 'blue',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    headline: 'Architecture reel',
    description:
      'Interior films and home tour work built around light, space, material rhythm, and editorial camera movement.',
    accent: 'blue',
  },
  {
    id: 'mg',
    label: 'MG Animation',
    headline: 'MG animation',
    description:
      'Motion-led explainers, campaign animations, UI storytelling, and animated social formats.',
    accent: 'yellow',
  },
  {
    id: 'documentary',
    label: 'Documentary',
    headline: 'Documentary work',
    description:
      'Culture, food, craft, and character-driven stories shaped through field production and editorial structure.',
    accent: 'green',
  },
  {
    id: 'drone',
    label: 'Drone',
    headline: 'Drone footage',
    description:
      'Aerial movement, city texture, night harbor atmosphere, and location-establishing production footage.',
    accent: 'red',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    headline: 'Commercial work',
    description:
      'Automotive, branded, and campaign videos made for clear product storytelling and polished delivery.',
    accent: 'red',
  },
  {
    id: 'event',
    label: 'Event / Promo',
    headline: 'Event and promo',
    description:
      'City promotional films, forum coverage, recap work, and production pieces built for public-facing communication.',
    accent: 'blue',
  },
  {
    id: 'food',
    label: 'Food',
    headline: 'Food photography',
    description:
      'Restaurant stills and animated previews for menu, social, and local business content.',
    accent: 'yellow',
  },
]

const categoryOrder = categories.filter((category) => category.id !== 'featured').map((category) => category.id)

const workItems = [
  {
    id: 'editorial-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Editorial Home Tour Package',
    eyebrow: 'Architectural & home tour',
    location: 'PChouse / Home Tour Reel',
    description:
      'High-end home tour production focused on light, material, room flow, and smooth camera movement for visually demanding interiors.',
    role: 'Producer / Shooter / Editor',
    tools: ['Sony FX3', 'Interior lighting', 'DaVinci Resolve'],
    timecode: '00:01:08:16',
    format: '16:9 portfolio film',
    client: 'PChouse',
    image: assetUrl('assets/architecture-overhead.jpg'),
    video: assetUrl('assets/preview-architecture-home-tour.mp4'),
    previewBadge: 'Live loop',
    accent: 'blue',
    featured: true,
  },
  {
    id: 'lens-fix-motion-promo',
    categoryId: 'mg',
    category: 'MG Animation',
    title: 'Lens Fix+ Motion Promo',
    eyebrow: 'MG animation',
    location: 'UI / AR Concept',
    description:
      'Motion-led visual packaging that turns a technical AR repair concept into a readable pitch video with clean pacing and UI rhythm.',
    role: 'Motion Designer / Editor',
    tools: ['After Effects', 'Figma', 'Pitch video'],
    timecode: '00:00:24:18',
    format: 'MG / explainer',
    client: 'AR concept',
    image: assetUrl('assets/motion-lensfix.jpg'),
    video: assetUrl('assets/preview-motion-lensfix.mp4'),
    previewBadge: 'Motion preview',
    accent: 'yellow',
    featured: true,
  },
  {
    id: 'a-bit-of-chaoshan',
    categoryId: 'documentary',
    category: 'Documentary',
    title: 'A Bit of Chaoshan',
    eyebrow: 'Documentary production',
    location: 'Food Culture Story',
    description:
      'Narrative documentary work grounded in people, place, food culture, field production, story structure, and observed detail.',
    role: 'Producer / Editor',
    tools: ['Story structure', 'Field production', 'Sound mix'],
    timecode: '00:04:12:08',
    format: 'Documentary short',
    client: 'Culture story',
    image: assetUrl('assets/documentary-chaoshan.jpg'),
    video: assetUrl('assets/preview-documentary-chaoshan.mp4'),
    previewBadge: 'Scene preview',
    accent: 'green',
    featured: true,
  },
  {
    id: 'night-harbor-aerial-reel',
    categoryId: 'drone',
    category: 'Drone',
    title: 'Night Harbor Aerial Reel',
    eyebrow: 'Aerial / drone footage',
    location: 'Night Harbor',
    description:
      'Atmospheric aerial footage using movement, scale, and night lighting to establish location and cinematic energy.',
    role: 'Aerial Footage',
    tools: ['Drone montage', 'Night city texture', 'Location footage'],
    timecode: '00:00:12:04',
    format: 'Drone montage',
    client: 'Drone reel',
    image: assetUrl('assets/archive-drone-harbor.jpg'),
    video: assetUrl('assets/archive-drone-harbor.mp4'),
    previewBadge: 'Aerial loop',
    accent: 'red',
    featured: true,
  },
  {
    id: 'me7-suv-tvc',
    categoryId: 'commercial',
    category: 'Commercial',
    title: 'ME7 SUV TV Advertisement',
    eyebrow: 'TVC / commercial video',
    location: 'Automotive Campaign',
    description:
      'Automotive commercial work shaped around product detail, driver experience, and polished campaign pacing.',
    role: 'Director / Editor',
    tools: ['Commercial direction', 'Automotive detail', 'Final edit'],
    timecode: '00:00:18:12',
    format: 'Automotive TVC',
    client: 'ME7 SUV',
    image: assetUrl('assets/archive-tvc-me7.jpg'),
    video: assetUrl('assets/archive-tvc-me7.mp4'),
    previewBadge: 'TVC preview',
    accent: 'red',
    featured: true,
  },
  {
    id: 'guangzhou-city-promo',
    categoryId: 'event',
    category: 'Event / Promo',
    title: 'Guangzhou City Promotional Film',
    eyebrow: 'Promotional / event coverage',
    location: 'City Promo',
    description:
      'Public-facing promotional film work combining city texture, event rhythm, and polished institutional storytelling.',
    role: 'Producer / Editor',
    tools: ['City promo', 'Editorial structure', 'Delivery'],
    timecode: '00:02:30:08',
    format: 'City promo',
    client: 'Guangzhou',
    image: assetUrl('assets/archive-promo-guangzhou.jpg'),
    video: assetUrl('assets/archive-promo-guangzhou.mp4'),
    previewBadge: 'Promo loop',
    accent: 'blue',
    featured: true,
  },
  {
    id: 'kung-fu-kitchen-food',
    categoryId: 'food',
    category: 'Food',
    title: 'Kung Fu Kitchen Food Photography',
    eyebrow: 'Local food photography',
    location: 'Mio / Kung Fu Kitchen',
    description:
      'A local restaurant still-photo set built around sushi, ramen, dark-table contrast, clean garnish detail, and menu-ready crops.',
    role: 'Photographer / Retoucher',
    tools: ['Panasonic G9M2', 'Food lighting', 'Color control'],
    timecode: 'STILL / 0522',
    format: 'Menu + social stills',
    client: 'Kung Fu Kitchen',
    image: assetUrl('assets/food-ramen-three-bowls.jpg'),
    video: assetUrl('assets/preview-food-photography.mp4'),
    previewBadge: 'Animated stills',
    accent: 'yellow',
    featured: true,
  },
  {
    id: 'fotile-chengdu-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Fotile Chengdu Home Tour',
    format: 'Interior story',
    role: 'Producer / Shooter / Editor',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-fotile.jpg'),
    video: assetUrl('assets/archive-home-fotile.mp4'),
    accent: 'blue',
  },
  {
    id: 'suzhou-residential-walkthrough',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Suzhou Residential Walkthrough',
    format: 'Home tour cut',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-suzhou.jpg'),
    video: assetUrl('assets/archive-home-suzhou.mp4'),
    accent: 'blue',
  },
  {
    id: 'beijing-sun-jiajing-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Beijing Sun Jiajing Home Tour',
    format: 'Residential walkthrough',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-beijing-sun-jiajing.jpg'),
    video: assetUrl('assets/archive-home-beijing-sun-jiajing.mp4'),
    accent: 'blue',
  },
  {
    id: 'nature-zhou-zijian-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Nature Zhou Zijian Home Tour',
    format: 'Interior home tour',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-nature-zhou-zijian.jpg'),
    video: assetUrl('assets/archive-home-nature-zhou-zijian.mp4'),
    accent: 'blue',
  },
  {
    id: 'nature-dali-monk-design-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Nature Dali Monk Design Home Tour',
    format: 'Interior detail reel',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-nature-dali-monk-design.jpg'),
    video: assetUrl('assets/archive-home-nature-dali-monk-design.mp4'),
    accent: 'blue',
  },
  {
    id: 'nature-li-youyou-apartment-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Nature Li Youyou Apartment Tour',
    format: 'Apartment walkthrough',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-nature-li-youyou.jpg'),
    video: assetUrl('assets/archive-home-nature-li-youyou.mp4'),
    accent: 'blue',
  },
  {
    id: 'nature-wuhan-chengjun-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Nature Wuhan Chengjun Home Tour',
    format: 'Interior atmosphere',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-nature-wuhan-chengjun.jpg'),
    video: assetUrl('assets/archive-home-nature-wuhan-chengjun.mp4'),
    accent: 'blue',
  },
  {
    id: 'chengdu-qingyu-design-studio-home-tour',
    categoryId: 'architecture',
    category: 'Architecture',
    title: 'Chengdu Qingyu Design Studio',
    format: 'Studio walkthrough',
    role: 'Camera / Edit',
    client: 'PChouse',
    image: assetUrl('assets/archive-home-chengdu-qingyu-design-studio.jpg'),
    video: assetUrl('assets/archive-home-chengdu-qingyu-design-studio.mp4'),
    accent: 'blue',
  },
  {
    id: 'brand-campaign-animation',
    categoryId: 'mg',
    category: 'MG Animation',
    title: 'Brand Campaign Animated Ad',
    format: 'Animated social ad',
    role: 'Motion Design',
    client: '2023 campaign',
    image: assetUrl('assets/archive-mg-brand.jpg'),
    video: assetUrl('assets/archive-mg-brand.mp4'),
    accent: 'yellow',
  },
  {
    id: 'credit-card-animation',
    categoryId: 'mg',
    category: 'MG Animation',
    title: 'Co-branded Credit Card Animation',
    format: 'Character / app promo',
    role: 'Motion Design',
    client: '2023 campaign',
    image: assetUrl('assets/archive-mg-credit-card.jpg'),
    video: assetUrl('assets/archive-mg-credit-card.mp4'),
    accent: 'yellow',
  },
  {
    id: 'xpeng-automotive-campaign',
    categoryId: 'commercial',
    category: 'Commercial',
    title: 'XPeng Automotive Campaign',
    format: 'Auto feature film',
    role: 'Commercial Video',
    client: 'XPeng',
    image: assetUrl('assets/archive-tvc-xpeng.jpg'),
    video: assetUrl('assets/archive-tvc-xpeng.mp4'),
    accent: 'red',
  },
  {
    id: 'guangcai-heritage-story',
    categoryId: 'documentary',
    category: 'Documentary',
    title: 'Guangcai Heritage Story',
    format: 'Culture profile',
    role: 'Producer / Editor',
    client: 'Documentary',
    image: assetUrl('assets/archive-doc-guangcai.jpg'),
    video: assetUrl('assets/archive-doc-guangcai.mp4'),
    accent: 'green',
  },
  {
    id: 'cantonese-opera-portrait',
    categoryId: 'documentary',
    category: 'Documentary',
    title: 'Cantonese Opera Portrait',
    format: 'Artist interview',
    role: 'Producer / Editor',
    client: 'Documentary',
    image: assetUrl('assets/archive-doc-portrait.jpg'),
    video: assetUrl('assets/archive-doc-portrait.mp4'),
    accent: 'green',
  },
  {
    id: 'city-aerial-movement',
    categoryId: 'drone',
    category: 'Drone',
    title: 'City Aerial Movement',
    format: 'Landscape / city',
    role: 'Aerial Footage',
    client: 'Drone reel',
    image: assetUrl('assets/archive-drone-city.jpg'),
    video: assetUrl('assets/archive-drone-city.mp4'),
    accent: 'red',
  },
  {
    id: 'nansha-film-forum',
    categoryId: 'event',
    category: 'Event / Promo',
    title: 'Nansha Film Forum Coverage',
    format: 'Event recap',
    role: 'Camera / Edit',
    client: 'Film forum',
    image: assetUrl('assets/archive-event-nansha.jpg'),
    video: assetUrl('assets/archive-event-nansha.mp4'),
    accent: 'red',
  },
]

const capabilities = [
  {
    icon: Camera,
    title: 'Capture',
    details: ['Cinematography', 'Interior and food lighting'],
  },
  {
    icon: Scissors,
    title: 'Edit',
    details: ['Story pacing', 'Short-form cutdowns'],
  },
  {
    icon: Palette,
    title: 'Color',
    details: ['DaVinci Resolve', 'Clean product texture'],
  },
  {
    icon: FilmSlate,
    title: 'Motion',
    details: ['After Effects', 'UI and explainer motion'],
  },
  {
    icon: FigmaLogo,
    title: 'Design',
    details: ['Figma prototypes', 'Visual systems'],
  },
  {
    icon: VideoCamera,
    title: 'Delivery',
    details: ['Drone footage', 'Platform-ready exports'],
  },
]

const experience = [
  {
    date: '2025 - Present',
    title: 'MPS Digital Media',
    company: 'Northeastern University',
    note: 'Graduate work in digital storytelling, usability, interactive media, and Figma-based prototypes.',
  },
  {
    date: '2023 - 2025',
    title: 'Senior Video Producer / Shooter / Editor',
    company: 'PC Online',
    note: 'Directed 65+ commercial videos and Architectural Digest-style home tours for clients including Panasonic and Dyson.',
  },
  {
    date: '2022 - 2023',
    title: 'Program Producer',
    company: 'Guangzhou Broadcasting Network',
    note: 'Led a 5-person production team across documentary and TV drama workflows under broadcast deadlines.',
  },
  {
    date: '2021 - 2022',
    title: 'Commercial Director',
    company: 'Guangdong Advertising Group',
    note: 'Created 20+ mobile-first automotive campaign videos for Benz and Peugeot on Douyin / TikTok.',
  },
]

const workContainerVariants = {
  hidden: { opacity: 0, x: 32, scale: 0.985, rotate: -0.35, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    x: -26,
    scale: 0.99,
    rotate: 0.25,
    filter: 'blur(5px)',
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
}

const workItemVariants = {
  hidden: { opacity: 0, y: 22, rotate: -0.6, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
}

function ButtonLink({ href, children, variant = 'dark', icon: Icon, download }) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noreferrer'}
      download={download}
    >
      <span>{children}</span>
      {Icon ? <Icon size={18} weight="bold" aria-hidden="true" /> : null}
    </a>
  )
}

function Label({ children, tone = 'blue' }) {
  return <span className={`cut-label label-${tone}`}>{children}</span>
}

function MediaSurface({ video, image, alt, eager = false, posterLoading }) {
  const mediaRef = useRef(null)
  const videoRef = useRef(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(eager)

  useEffect(() => {
    if (!video || typeof window === 'undefined') return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      videoRef.current?.pause()
      return undefined
    }

    const playVideo = () => {
      const videoEl = videoRef.current
      if (!videoEl) return
      videoEl.muted = true
      videoEl.play().catch(() => {
        // Some browsers delay muted autoplay until the preview is close to view.
      })
    }

    const pauseVideo = () => videoRef.current?.pause()

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setShouldLoadVideo(true)
                playVideo()
              } else {
                pauseVideo()
              }
            },
            { rootMargin: '180px 0px', threshold: 0.05 },
          )
        : null

    if (observer && mediaRef.current) {
      observer.observe(mediaRef.current)
    } else {
      setShouldLoadVideo(true)
      playVideo()
    }

    if (eager) playVideo()

    return () => observer?.disconnect()
  }, [eager, shouldLoadVideo, video])

  useEffect(() => {
    if (!shouldLoadVideo) return
    const videoEl = videoRef.current
    if (!videoEl) return
    videoEl.muted = true
    videoEl.play().catch(() => {
      // Autoplay can be deferred by the browser until the video is visible.
    })
  }, [shouldLoadVideo])

  if (video && shouldLoadVideo) {
    return (
      <video
        ref={(node) => {
          videoRef.current = node
          mediaRef.current = node
        }}
        src={video}
        poster={image}
        muted
        loop
        autoPlay
        playsInline
        preload={eager ? 'auto' : 'metadata'}
        aria-label={alt}
      />
    )
  }

  return (
    <img
      ref={mediaRef}
      src={image}
      alt={alt}
      loading={posterLoading || (eager ? 'eager' : 'lazy')}
      decoding="async"
    />
  )
}

function HeroCard({
  className,
  image,
  video,
  alt,
  label,
  tone,
  timecode,
  previewLabel = 'Live preview',
  eager = false,
}) {
  return (
    <div className={`hero-card ${className}`}>
      <MediaSurface video={video} image={image} alt={alt} eager={eager} />
      <span className="video-vignette" aria-hidden="true" />
      <Label tone={tone}>{label}</Label>
      <span className="live-preview">
        <i aria-hidden="true" />
        {previewLabel}
      </span>
      {timecode ? <span className="timecode">{timecode}</span> : null}
      <span className="video-progress" aria-hidden="true" />
    </div>
  )
}

function HeroCollage() {
  return (
    <motion.div
      className="hero-collage"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.12 }}
    >
      <img
        className="ai-film-overlay"
        src={assetUrl('assets/ai-film-leader-overlay.png')}
        alt=""
        aria-hidden="true"
      />
      <svg className="guide-lines" viewBox="0 0 640 620" aria-hidden="true">
        <path d="M80 448 C190 390, 250 450, 330 332 C398 232, 492 246, 570 162" />
        <path d="M188 74 C246 140, 350 96, 404 184 C446 254, 520 250, 590 310" />
      </svg>

      <HeroCard
        className="hero-card-main"
        image={assetUrl('assets/architecture-hero.jpg')}
        video={assetUrl('assets/preview-architecture-home-tour.mp4')}
        alt="Bright architectural interior video still"
        label="home tour"
        tone="blue"
        timecode="00:01:08:16"
        eager
      />

      <HeroCard
        className="hero-card-monitor"
        image={assetUrl('assets/motion-lensfix.jpg')}
        video={assetUrl('assets/preview-motion-lensfix.mp4')}
        alt="Lens Fix motion graphics preview playing on a phone interface"
        label="motion"
        tone="yellow"
        timecode="00:00:24:18"
        previewLabel="MG preview"
        eager
      />

      <HeroCard
        className="hero-card-edit"
        image={assetUrl('assets/documentary-chaoshan.jpg')}
        video={assetUrl('assets/preview-documentary-chaoshan.mp4')}
        alt="Documentary production preview with close-up food preparation"
        label="doc cut"
        tone="green"
        timecode="00:00:31:12"
        previewLabel="Field footage"
        eager
      />

      <HeroCard
        className="hero-card-support"
        image={assetUrl('assets/food-ramen-three-bowls.jpg')}
        video={assetUrl('assets/preview-food-photography.mp4')}
        alt="Animated food photography preview for local restaurant content"
        label="food stills"
        tone="red"
        previewLabel="Photo motion"
      />

      <div className="edit-console" aria-label="Editing workflow labels">
        <span className="console-top">ACTIVE TIMELINE</span>
        <strong>Cut / Grade / Deliver</strong>
        <div className="console-bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="console-code">BOS_PROD_05</span>
      </div>

      <div className="sticker-frame" aria-hidden="true">
        <img src={assetUrl('assets/ai-cutboard-sticker-pack.png')} alt="" />
      </div>

      <a className="play-reel" href={portfolioUrl} target="_blank" rel="noreferrer">
        <Play size={15} weight="fill" aria-hidden="true" />
        Play reel
      </a>
      <div className="collage-dots" aria-hidden="true" />
    </motion.div>
  )
}

function ProjectRow({ project, displayNumber }) {
  return (
    <motion.a
      className={`project-row tone-${project.accent}`}
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
      variants={workItemVariants}
    >
      <div className="project-number">
        <span>{displayNumber}</span>
        <small>{project.category}</small>
      </div>

      <div className="project-copy">
        <div className="chip-line">
          <span className="chip chip-strong">{project.eyebrow}</span>
          <span className="chip chip-neutral">{project.location}</span>
          <span className="chip chip-neutral">{project.format}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tools">
          <strong>{project.role}</strong>
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>

      <div className="project-media">
        <MediaSurface
          video={project.video}
          image={project.image}
          alt={`${project.title} moving project preview`}
        />
        <span className="video-vignette" aria-hidden="true" />
        <span className="media-status">
          <i aria-hidden="true" />
          {project.previewBadge}
        </span>
        <span className="project-time">{project.timecode}</span>
        <span className="play-overlay" aria-hidden="true">
          <Play size={18} weight="fill" />
        </span>
        <ArrowUpRight className="project-arrow" size={26} weight="bold" aria-hidden="true" />
      </div>
    </motion.a>
  )
}

function ArchiveCard({ item, displayNumber }) {
  return (
    <motion.a
      className={`archive-card tone-${item.accent}`}
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
      variants={workItemVariants}
    >
      <div className="archive-media">
        <MediaSurface
          video={item.video}
          image={item.image}
          alt={`${item.title} moving archive preview`}
          posterLoading="eager"
        />
        <span className="video-vignette" aria-hidden="true" />
        <span className="archive-index">{displayNumber}</span>
        <span className="archive-year">{item.client}</span>
        <span className="archive-play" aria-hidden="true">
          <Play size={13} weight="fill" />
        </span>
      </div>
      <div className="archive-copy">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <div>
          <small>{item.format}</small>
          <small>{item.role}</small>
        </div>
      </div>
    </motion.a>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('featured')
  const [copied, setCopied] = useState(false)

  const currentCategory = useMemo(
    () => categories.find((category) => category.id === activeCategory) || categories[0],
    [activeCategory],
  )

  const categoryCounts = useMemo(() => {
    const counts = workItems.reduce((acc, item) => {
      acc[item.categoryId] = (acc[item.categoryId] || 0) + 1
      return acc
    }, {})

    counts.featured = categoryOrder.length
    return counts
  }, [])

  const visibleWorkItems = useMemo(() => {
    if (activeCategory === 'featured') {
      return categoryOrder
        .map((categoryId) => workItems.find((item) => item.categoryId === categoryId && item.featured))
        .filter(Boolean)
    }

    return workItems.filter((item) => item.categoryId === activeCategory)
  }, [activeCategory])

  const isFeaturedView = activeCategory === 'featured'

  const copyEmail = () => {
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
    navigator.clipboard?.writeText(email).catch(() => {
      // Some browsers block clipboard writes in automated or restricted contexts.
    })
  }

  return (
    <>
      <img
        className="paper-grain"
        src={assetUrl('assets/ai-cinematic-grain-texture.png')}
        alt=""
        aria-hidden="true"
      />
      <main className="site-shell">
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Mingzi Ye home">
            <span>Mingzi Ye</span>
            <strong>Boston Video Producer</strong>
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#work">Portfolio</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="#contact">Contact</a>
            <a
              className="nav-icon"
              href={portfolioUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open full portfolio"
            >
              <ArrowUpRight size={18} weight="bold" />
            </a>
          </div>
        </nav>

        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="micro-row">
              <span className="status-dot" />
              <span>Boston, MA</span>
              <span className="available">Available for co-op</span>
              <span>Video / Photo / Drone</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-kicker">Motion / story / space</div>
              <h1 aria-label="Kinetic Cutboard">
                <span>Kinetic</span>
                <span>Cutboard</span>
              </h1>
              <p className="intro">
                Boston-based video producer, shooter, editor, and content creator.
              </p>
              <p className="summary">
                I build polished visuals for architecture, motion graphics,
                documentaries, and commercial stories, from shoot planning to final export.
              </p>
              <div className="hero-actions">
                <ButtonLink href={portfolioUrl} icon={ArrowRight}>
                  View portfolio
                </ButtonLink>
                <ButtonLink href={resumeUrl} icon={DownloadSimple} variant="outline" download>
                  Resume PDF
                </ButtonLink>
              </div>
            </motion.div>
          </div>

          <HeroCollage />
        </section>

        <section id="work" className="work-section section-rule">
          <div className={`section-heading work-browser-heading tone-${currentCategory.accent}`}>
            <div>
              <span className="section-eyebrow">Selected work</span>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentCategory.headline}
                  initial={{ opacity: 0, y: 16, rotate: -0.7 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -12, rotate: 0.5 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  {currentCategory.headline}
                </motion.h2>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentCategory.description}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                {currentCategory.description}
              </motion.p>
            </AnimatePresence>
            <div className="filter-tabs" aria-label="Project filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`tone-${category.accent} ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                >
                  <span>{category.label}</span>
                  <motion.small
                    initial={false}
                    animate={
                      activeCategory === category.id
                        ? { scale: [1, 1.22, 1], rotate: [0, -4, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {categoryCounts[category.id] || 0}
                  </motion.small>
                </button>
              ))}
            </div>
            <img
              className="work-sticker"
              src={assetUrl('assets/ai-cutboard-sticker-pack.png')}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className={`work-results tone-${currentCategory.accent}`}>
            <div className="work-signal" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>{isFeaturedView ? 'curated range' : 'category scan'}</strong>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className={isFeaturedView ? 'project-list featured-list' : 'archive-grid work-grid'}
                variants={workContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {visibleWorkItems.map((item, index) =>
                  isFeaturedView ? (
                    <ProjectRow
                      key={item.id}
                      project={item}
                      displayNumber={String(index + 1).padStart(2, '0')}
                    />
                  ) : (
                    <ArchiveCard
                      key={item.id}
                      item={item}
                      displayNumber={String(index + 1).padStart(2, '0')}
                    />
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="capabilities section-rule">
          <div className="section-heading compact">
            <div>
              <span className="section-eyebrow">Capabilities</span>
              <h2>Craft stack</h2>
            </div>
            <p>
              Hands-on production for teams that need one creator who can plan, shoot,
              edit, color, and deliver social-ready media.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, details }) => (
              <article key={title} className="capability-item">
                <Icon size={28} weight="duotone" aria-hidden="true" />
                <h3>{title}</h3>
                {details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-rule">
          <div className="section-heading compact">
            <div>
              <span className="section-eyebrow">Experience</span>
              <h2>5+ years</h2>
            </div>
            <p>
              A production path across commercial sets, broadcast teams, home tours,
              documentaries, and graduate digital media work.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <strong>{item.company}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-rule">
          <div className="contact-title">
            <span className="section-eyebrow">Contact</span>
            <h2>Let's make the next cut.</h2>
          </div>
          <div className="contact-panel">
            <p>
              Open to co-op and creative media opportunities in Boston, especially
              video production, editing, motion graphics, documentary, and branded video.
            </p>
            <button className="contact-link" type="button" onClick={copyEmail}>
              <EnvelopeSimple size={20} weight="bold" />
              {copied ? 'Email copied' : email}
            </button>
            <a className="contact-link" href={linkedinUrl} target="_blank" rel="noreferrer">
              <LinkedinLogo size={20} weight="bold" />
              linkedin.com/in/MingziYe
            </a>
            <span className="contact-link muted">
              <MapPin size={20} weight="bold" />
              Boston, MA
            </span>
            <div className="contact-actions">
              <ButtonLink href={portfolioUrl} icon={ArrowUpRight}>
                Full portfolio
              </ButtonLink>
              <ButtonLink href={`mailto:${email}`} icon={PaperPlaneTilt} variant="outline">
                Email me
              </ButtonLink>
            </div>
          </div>
          <div className="contact-media">
            <MediaSurface
              video={assetUrl('assets/preview-architecture-home-tour.mp4')}
              image={assetUrl('assets/architecture-detail.jpg')}
              alt="Looping architectural home tour preview used as a portfolio closing image"
            />
            <span className="video-vignette" aria-hidden="true" />
            <span className="contact-badge">Boston video producer / editor</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
