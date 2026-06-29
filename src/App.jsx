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
const resumeUrl = '/assets/resume-mingzi-ye.pdf'
const email = 'ye.mingz@northeastern.edu'
const linkedinUrl = 'https://www.linkedin.com/in/MingziYe'

const filters = ['All', 'Architecture', 'Commercial', 'Motion', 'Documentary']

const projects = [
  {
    id: '01',
    category: 'Architecture',
    title: 'Modern Marble Residence',
    eyebrow: 'Architectural & home tour',
    location: 'Boston-ready reel',
    description:
      'Capturing light, material, and spatial flow through cinematic interior storytelling.',
    role: 'Producer / Shooter / Editor',
    tools: ['Sony FX3', 'Interior lighting', 'DaVinci Resolve'],
    duration: '01:28',
    image: '/assets/architecture-overhead.jpg',
    accent: 'blue',
  },
  {
    id: '02',
    category: 'Commercial',
    title: 'Auto Campaign Shorts',
    eyebrow: 'Commercial video',
    location: 'Mobile-first campaign',
    description:
      'Short-form branded stories built for fast platform rhythm and product clarity.',
    role: 'Commercial Director',
    tools: ['Campaign concept', 'Shoot direction', 'Social edit'],
    duration: '00:45',
    image: '/assets/commercial-me7.jpg',
    accent: 'coral',
  },
  {
    id: '03',
    category: 'Motion',
    title: 'Lens Fix+ App Explainer',
    eyebrow: 'Motion graphics',
    location: 'UI / AR concept',
    description:
      'Motion-led explainers that turn technical ideas into fast, readable visuals.',
    role: 'Motion Designer / Editor',
    tools: ['After Effects', 'Figma', 'Pitch video'],
    duration: '00:37',
    image: '/assets/motion-lensfix.jpg',
    accent: 'yellow',
  },
  {
    id: '04',
    category: 'Documentary',
    title: 'A Bit of Chaoshan',
    eyebrow: 'Documentary production',
    location: 'Narrative short',
    description:
      'Documentary craft focused on people, place, food culture, and observed detail.',
    role: 'Producer / Editor',
    tools: ['Story structure', 'Field production', 'Sound mix'],
    duration: '04:12',
    image: '/assets/documentary-chaoshan.jpg',
    accent: 'green',
  },
]

const capabilities = [
  {
    icon: Camera,
    title: 'Shooting',
    details: ['Cinematography', 'Camera operation'],
  },
  {
    icon: Scissors,
    title: 'Editing',
    details: ['Creative edit', 'Story pacing'],
  },
  {
    icon: Palette,
    title: 'Color',
    details: ['DaVinci Resolve', 'Color workflow'],
  },
  {
    icon: FilmSlate,
    title: 'Motion',
    details: ['After Effects', 'MG animation'],
  },
  {
    icon: FigmaLogo,
    title: 'Design',
    details: ['Figma', 'UI prototypes'],
  },
  {
    icon: VideoCamera,
    title: 'Production',
    details: ['Drone shots', 'Lighting setup'],
  },
]

const experience = [
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
  {
    date: '2025 - Present',
    title: 'MPS Digital Media',
    company: 'Northeastern University',
    note: 'Graduate work in digital storytelling, usability, interactive media, and Figma-based prototypes.',
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

function HeroCollage() {
  return (
    <motion.div
      className="hero-collage"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="hero-card hero-card-monitor">
        <img src="/assets/motion-lensfix.jpg" alt="Motion graphics frame from Lens Fix+ project" />
        <Label tone="red">shoot</Label>
        <span className="timecode">00:00:24:18</span>
      </div>

      <div className="hero-card hero-card-main">
        <img src="/assets/architecture-hero.jpg" alt="Bright architectural interior video still" />
        <Label tone="blue">architectural</Label>
        <span className="timecode">00:00:11:07</span>
      </div>

      <div className="hero-card hero-card-edit">
        <img src="/assets/architecture-detail.jpg" alt="Interior detail frame from home tour" />
        <Label tone="red">edit</Label>
      </div>

      <div className="hero-card hero-card-small">
        <img src="/assets/architecture-overhead.jpg" alt="Overhead interior frame" />
        <Label tone="yellow">design-driven</Label>
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
      className="project-row"
      href={portfolioUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
    >
      <div className={`project-index accent-${project.accent}`}>
        <span>{project.id}</span>
        <small>{project.category}</small>
        <ArrowUpRight size={22} weight="bold" aria-hidden="true" />
      </div>

      <div className="project-copy">
        <div className="chip-line">
          <span className={`chip chip-${project.accent}`}>{project.eyebrow}</span>
          <span className="chip chip-neutral">{project.location}</span>
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

      <div className="project-image">
        <img src={project.image} alt={`${project.title} project still`} />
        <span>{project.duration}</span>
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
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Mingzi Ye home">
          <span>Mingzi Ye</span>
          <strong>Video Producer</strong>
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#work">Portfolio</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          <a href="#contact">Contact</a>
          <a className="nav-icon" href={portfolioUrl} target="_blank" rel="noreferrer" aria-label="Open full portfolio">
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-kicker">
              Motion / story / space
            </div>
            <h1>Kinetic Cutboard</h1>
            <p className="intro">
              Hi, I am Mingzi Ye - a video producer, shooter, and editor based in Boston.
            </p>
            <p className="summary">
              I craft visual stories for architecture, brands, and real people - from
              concept to final cut. 5+ years across commercial, architectural,
              documentary, and motion graphics work.
            </p>
            <div className="hero-actions">
              <ButtonLink href={portfolioUrl} icon={ArrowRight}>View portfolio</ButtonLink>
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
            <h2>4 projects</h2>
          </div>
          <p>
            A selection across architecture, commercial, motion graphics, and
            documentary production.
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
          <p>Hands-on production skills for teams that need one person who can plan, shoot, edit, and deliver.</p>
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
            A production path that moves from commercial sets and broadcast teams
            into graduate digital media work.
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
          <h2>Let's create something great.</h2>
          <span>I am always open to new opportunities</span>
        </div>
        <div className="contact-panel">
          <p>
            Interested in working together? I am available for co-op and
            full-time creative media opportunities.
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
            <ButtonLink href={portfolioUrl} icon={ArrowUpRight}>Full portfolio</ButtonLink>
            <ButtonLink href={`mailto:${email}`} icon={PaperPlaneTilt} variant="outline">
              Email me
            </ButtonLink>
          </div>
        </div>
        <img
          className="contact-image"
          src="/assets/architecture-detail.jpg"
          alt="Bright architectural interior used as portfolio closing still"
        />
      </section>
    </main>
  )
}

export default App
