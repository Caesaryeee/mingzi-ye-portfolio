import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
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

const filters = [
  'All',
  'Restaurant Social Media Content',
  'Real Estate Photo/Video/Drone',
  'Food Photography',
  'Commercial Video',
  'Short-form Reels',
]

const projects = [
  {
    id: '01',
    category: 'Restaurant Social Media Content',
    title: 'Kung Fu Kitchen Launch Reels',
    eyebrow: 'Restaurant social',
    location: 'Boston-area content package',
    description:
      'Menu-first vertical content with tight food texture, fast cuts, and platform-ready hooks for a local restaurant rollout.',
    role: 'Shooter / Editor / Content Creator',
    tools: ['Panasonic G9M2', 'Food lighting', 'Reels edit'],
    timecode: '00:00:13:08',
    format: '9:16 / 4:5 cutdowns',
    image: assetUrl('assets/restaurant-sushi-crunch-roll.jpg'),
    accent: 'red',
  },
  {
    id: '02',
    category: 'Real Estate Photo/Video/Drone',
    title: 'Editorial Home Tour Package',
    eyebrow: 'Real estate video',
    location: 'Interior + aerial coverage',
    description:
      'A home-tour language built around light, material, room flow, and clean camera movement for premium property storytelling.',
    role: 'Producer / Shooter / Editor',
    tools: ['Sony FX3', 'DJI Mavic 3 Pro', 'DaVinci Resolve'],
    timecode: '00:01:08:16',
    format: '16:9 hero film',
    image: assetUrl('assets/architecture-overhead.jpg'),
    accent: 'blue',
  },
  {
    id: '03',
    category: 'Food Photography',
    title: 'Ramen Menu Photo System',
    eyebrow: 'Food photography',
    location: 'Menu + social stills',
    description:
      'Controlled tabletop lighting and color cleanup that keeps broth, garnish, rice, and texture appetizing without heavy filters.',
    role: 'Photographer / Retoucher',
    tools: ['Tabletop lighting', 'Color control', 'Export sets'],
    timecode: 'STILL / 0522',
    format: '16:9 / square crops',
    image: assetUrl('assets/food-ramen-white-broth.jpg'),
    accent: 'yellow',
  },
  {
    id: '04',
    category: 'Commercial Video',
    title: 'Automotive Product Campaign',
    eyebrow: 'Commercial video',
    location: 'Mobile-first campaign',
    description:
      'Short branded product films designed for fast platform rhythm, clear product presence, and campaign consistency.',
    role: 'Commercial Director',
    tools: ['Campaign concept', 'Shoot direction', 'Social edit'],
    timecode: '00:00:45:02',
    format: 'TVC + social cutdowns',
    image: assetUrl('assets/commercial-me7.jpg'),
    accent: 'green',
  },
  {
    id: '05',
    category: 'Short-form Reels',
    title: 'Lens Fix+ Motion Promo',
    eyebrow: 'Motion / reels',
    location: 'UI + AR concept',
    description:
      'Motion-led explainers and punchy UI edits that turn technical ideas into readable short-form product stories.',
    role: 'Motion Designer / Editor',
    tools: ['After Effects', 'Figma', 'Pitch video'],
    timecode: '00:00:24:18',
    format: 'Motion promo',
    image: assetUrl('assets/motion-lensfix.jpg'),
    accent: 'ink',
  },
]

const capabilities = [
  {
    icon: Camera,
    title: 'Capture',
    details: ['Cinematography', 'Food and interior lighting'],
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

function HeroCard({ className, image, alt, label, tone, timecode }) {
  return (
    <div className={`hero-card ${className}`}>
      <img src={image} alt={alt} />
      <Label tone={tone}>{label}</Label>
      {timecode ? <span className="timecode">{timecode}</span> : null}
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
        alt="Bright architectural interior video still"
        label="real estate"
        tone="blue"
        timecode="00:01:08:16"
      />

      <HeroCard
        className="hero-card-food"
        image={assetUrl('assets/restaurant-sushi-avocado-roll.jpg')}
        alt="Restaurant sushi roll food photography"
        label="restaurant"
        tone="red"
        timecode="00:00:13:08"
      />

      <HeroCard
        className="hero-card-motion"
        image={assetUrl('assets/motion-lensfix.jpg')}
        alt="Motion graphics frame from Lens Fix+ project"
        label="motion"
        tone="yellow"
        timecode="00:00:24:18"
      />

      <HeroCard
        className="hero-card-commercial"
        image={assetUrl('assets/commercial-me7.jpg')}
        alt="Automotive commercial video still"
        label="commercial"
        tone="green"
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

function ProjectRow({ project }) {
  return (
    <motion.a
      className={`project-row tone-${project.accent}`}
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-number">
        <span>{project.id}</span>
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
        <img src={project.image} alt={`${project.title} project still`} />
        <span className="project-time">{project.timecode}</span>
        <span className="play-overlay" aria-hidden="true">
          <Play size={18} weight="fill" />
        </span>
        <ArrowUpRight className="project-arrow" size={26} weight="bold" aria-hidden="true" />
      </div>
    </motion.a>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [copied, setCopied] = useState(false)

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

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
              <div className="hero-kicker">Motion / food / space / story</div>
              <h1 aria-label="Kinetic Cutboard">
                <span>Kinetic</span>
                <span>Cutboard</span>
              </h1>
              <p className="intro">
                Boston-based video producer, shooter, editor, and content creator.
              </p>
              <p className="summary">
                I build polished visuals for restaurants, real estate, products, and
                short-form campaigns, from shoot planning to final export.
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
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">Selected work</span>
              <h2>5 cuts</h2>
            </div>
            <p>
              A focused mix of restaurant content, food photography, real estate video,
              commercial production, and short-form motion.
            </p>
            <div className="filter-tabs" aria-label="Project filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'active' : ''}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
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

          <div className="project-list">
            {visibleProjects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
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
              video editing, content production, restaurant media, and branded video.
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
            <img
              src={assetUrl('assets/food-ramen-three-bowls.jpg')}
              alt="Restaurant ramen food photography used as a portfolio closing still"
            />
            <span>Boston content creator / video editor</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
