'use client'

import { useState, useEffect } from 'react'
import ArticlePage from './article-page'
import EnterprisePage from './enterprise-page'
import ContactPage from './contact-page'
import Footer from './footer'
import MapSection from './map-section'
import './article.css'
import './enterprise.css'

const heroSlides = [
  {
    image: '/480566325_500672686417112_637425762365498823_n.jpg',
    title: (
      <>
        PREMIUM ENERGIES<br />
        PARTNERS CÔTE<br />
        D'IVOIRE
      </>
    ),
    badge: 'DISTRIBUTION D’ÉNERGIES & SERVICES',
    buttonText: 'DÉCOUVRIR PEPCI',
    target: 'enterprise',
  },
  {
    image: '/481080979_500672526417128_1505254907481941854_n.jpg',
    title: (
      <>
        UN RÉSEAU MODERNE<br />ET PROCHE<br />DE VOUS
      </>
    ),
    badge: 'QUALITÉ & PROXIMITÉ AU QUOTIDIEN',
    buttonText: 'NOS PRODUITS & SERVICES',
    target: 'services',
  },
]

const stationImage = '/image-de-station.jpg'
const teamImage = '/mot-du-dg-team.jpg'
const mechanicImage = '/assets/img/hseq_attendant.jpg'
const cityImage = '/assets/img/hero_slide1.jpg'

const services = [
  {
    title: 'STATIONS SERVICES',
    image: '/image-de-station.jpg',
  },
  {
    title: 'OFFRE\nCONSO/BTOB',
    image: '/african-business-btob.jpg',
  },
  {
    title: 'LUBRIFIANTS',
    image: '/lubrifiants-pepci.jpg',
  },
  {
    title: 'GAZ\nDOMESTIQUE',
    image: '/assets/img/service_4_gaz.jpg',
  },
  {
    title: 'MOYENS\nDE PAIEMENT',
    image: '/sans-titre.jpg',
  },
]

const news = [
  { date: '07 JUIN 2023', tag: 'HYDROCARBURES', title: 'PEPCI, une énergie au service de la Côte d’Ivoire', image: '/assets/img/news_1.jpg' },
  { date: '07 JUIN 2023', tag: 'ACTUALITÉ', title: 'La qualité au cœur de nos stations-service', image: '/assets/img/news_2.jpg' },
  { date: '07 JUIN 2023', tag: 'ENGAGEMENT', title: 'Nos équipes vous accompagnent chaque jour', image: '/assets/img/news_3.jpg' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showArticle, setShowArticle] = useState(false)
  const [showEnterprise, setShowEnterprise] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('Accueil')

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Notre entreprise', href: '#entreprise' },
    { label: 'Nos produits & services', href: '#services' },
    { label: 'Notre actualité', href: '#actualite' },
    { label: 'Nous rejoindre', href: '#contact' },
    { label: 'Nous contacter', href: '#contact' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))

  const openEnterprise = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Notre entreprise')
    setShowEnterprise(true)
    setShowArticle(false)
    setShowContact(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const closeEnterprise = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Accueil')
    setShowEnterprise(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const openArticle = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Notre actualité')
    setShowArticle(true)
    setShowEnterprise(false)
    setShowContact(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const closeArticle = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Accueil')
    setShowArticle(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const openContact = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Nous contacter')
    setShowContact(true)
    setShowEnterprise(false)
    setShowArticle(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  const closeContact = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault()
    setActiveTab('Accueil')
    setShowContact(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const handleNavClick = (item: { label: string; href: string }, event: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveTab(item.label)
    setMenuOpen(false)
    if (item.label === 'Notre entreprise') {
      openEnterprise(event)
    } else if (item.label === 'Notre actualité') {
      openArticle(event)
    } else if (item.label === 'Nous contacter') {
      openContact(event)
    } else if (item.label === 'Accueil') {
      event.preventDefault()
      setShowEnterprise(false)
      setShowArticle(false)
      setShowContact(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleGlobalNavigate = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'Accueil') {
      setShowEnterprise(false)
      setShowArticle(false)
      setShowContact(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (tab === 'Notre entreprise') {
      setShowArticle(false)
      setShowContact(false)
      setShowEnterprise(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (tab === 'Notre actualité') {
      setShowEnterprise(false)
      setShowContact(false)
      setShowArticle(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (tab === 'Nous contacter') {
      setShowEnterprise(false)
      setShowArticle(false)
      setShowContact(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setShowEnterprise(false)
      setShowArticle(false)
      setShowContact(false)
      setTimeout(() => {
        const id = tab === 'Nos produits & services' ? 'services' : 'contact'
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  if (showContact) {
    return <ContactPage onBack={closeContact} onNavigate={handleGlobalNavigate} />
  }
  if (showArticle) {
    return <ArticlePage onBack={closeArticle} onNavigate={handleGlobalNavigate} />
  }
  if (showEnterprise) {
    return <EnterprisePage onBack={closeEnterprise} onNavigate={handleGlobalNavigate} />
  }
  return (
    <main className="site-shell">
      <header className="topbar">
        <a
          href="#accueil"
          className="brand"
          aria-label="PEPCI accueil"
          onClick={(event) => {
            event.preventDefault()
            setActiveTab('Accueil')
            setShowEnterprise(false)
            setShowArticle(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src="/450859769_341480009003048_1830045632571275504_n-removebg-preview.png"
            alt="Logo PEPCI"
            className="brand-logo"
          />
          <span>PEPCI</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={activeTab === item.label ? 'active' : ''}
              onClick={(event) => handleNavClick(item, event)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="accueil"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.68), rgba(0,0,0,.25)), url(${heroSlides[currentSlide].image})`,
          transition: 'background-image 0.6s ease-in-out',
        }}
      >
        <div className="hero-copy">
          <p className="eyebrow light" style={{ color: '#fff', marginBottom: '14px' }}>
            {heroSlides[currentSlide].badge}
          </p>
          <h1>{heroSlides[currentSlide].title}</h1>
          <a
            className="outline-button"
            href={heroSlides[currentSlide].target === 'enterprise' ? '#entreprise' : '#services'}
            onClick={(e) => {
              if (heroSlides[currentSlide].target === 'enterprise') {
                openEnterprise(e)
              }
            }}
          >
            {heroSlides[currentSlide].buttonText} <span>→</span>
          </a>
        </div>
        <div className="slider-controls">
          <button type="button" aria-label="Slide précédente" onClick={prevSlide} style={{ cursor: 'pointer' }}>‹</button>
          <button type="button" aria-label="Slide suivante" onClick={nextSlide} style={{ cursor: 'pointer' }}>›</button>
        </div>
        <div className="dots">
          {heroSlides.map((slide, index) => (
            <i
              key={slide.image}
              className={currentSlide === index ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
              role="button"
              tabIndex={0}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="entreprise" className="intro section-grid">
        <img src={teamImage} alt="Le Directeur Général et l’équipe PEPCI en station-service" />
        <div className="copy-block"><p className="eyebrow">UN REGARD SUR L’AVENIR</p><h2>MOT DU DG</h2><p>Notre vision est d’être un acteur majeur dans le domaine des énergies. La sécurité, le respect de l’environnement, l’écoute et la satisfaction de nos clients et partenaires figurent en tête de nos priorités.</p><p>PEPCI se veut une société engagée et ancrée dans son époque, travaillant sur tous les canaux porteurs et d’avenir.</p><a className="green-button" href="#entreprise" onClick={openEnterprise}>DÉCOUVREZ NOTRE ENTREPRISE <span>→</span></a></div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <p className="eyebrow">POUR RÉPONDRE À VOS BESOINS</p>
          <h2>NOS PRODUITS ET SERVICES</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.title.replace('\n', ' ')} />
              <div className="service-overlay">
                <h3 className="service-card-title">{service.title}</h3>
                <div className="service-card-action">
                  <span className="service-red-dash" />
                  <span className="service-link-text">EN SAVOIR PLUS</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commitment section-grid" id="engagement">
        <div className="commitment-image-stack">
          <img
            src="/pompiste-decoupe.png"
            alt="Pompiste PEPCI - Notre Engagement"
            className="commitment-decoupe-img"
          />
        </div>
        <div className="commitment-copy">
          <div className="commitment-heading">
            <p className="eyebrow">NOTRE IMPACT</p>
            <h2>NOTRE ENGAGEMENT</h2>
          </div>
          <div className="green-panel">
            <p>
              Premium Energies Partners Côte d'Ivoire est une entreprise ivoirienne qui s'engage à fournir des services d'énergie sûrs, respectueux de l'environnement et de haute qualité. La santé, la sécurité et la satisfaction de nos clients et partenaires sont nos plus grandes priorités. Nous nous sommes engagés à respecter les exigences HSEQ et à réduire les impacts environnementaux.
            </p>
            <a
              className="hse-button"
              href="#entreprise"
              onClick={openEnterprise}
            >
              LIRE NOTRE CHARTE HSE
            </a>
          </div>
        </div>
      </section>

      <MapSection />

      <section id="actualite" className="news-section"><div className="section-heading news-heading"><div><p className="eyebrow">NOTRE ACTUALITÉ</p><h2>DÉCOUVREZ NOTRE ACTUALITÉ</h2></div><a className="small-button" href="#actualite" onClick={openArticle}>PLUS D’ACTUALITÉS</a></div><div className="news-grid">{news.map((item) => <article className="news-card" key={item.title}><img src={item.image} alt="" /><div><p className="date">Publié le {item.date} | {item.tag}</p><h3>{item.title}</h3><a href="#actualite">LIRE <span>→</span></a></div></article>)}</div></section>

      <Footer onNavigate={handleGlobalNavigate} />
    </main>
  )
}
