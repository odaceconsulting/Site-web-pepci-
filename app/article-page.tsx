import { useState } from 'react'
import Footer from './footer'

const related = [
  { title: 'Sed ut perspiciatis unde omnis iste n Sed ut perspiciatis unde omnis iste', image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=800&q=80' },
  { title: 'Sed ut perspiciatis unde omnis iste n Sed ut perspiciatis', image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Sed ut perspiciatis unde omnis iste n Sed ut perspiciatis unde om', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80' },
]

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre entreprise', href: '#entreprise' },
  { label: 'Nos produits & services', href: '#services' },
  { label: 'Notre actualité', href: '#actualite' },
  { label: 'Nous rejoindre', href: '#contact' },
  { label: 'Nous contacter', href: '#contact' },
]

export default function ArticlePage({
  onBack,
  onNavigate,
}: {
  onBack: (event: React.MouseEvent<HTMLAnchorElement>) => void
  onNavigate?: (tab: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (tab: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onNavigate) {
      onNavigate(tab)
    } else if (tab === 'Accueil') {
      onBack(e)
    }
  }

  return (
    <main className="article-site">
      <header className="topbar">
        <a href="#accueil" className="brand" aria-label="PEPCI accueil" onClick={(e) => handleNavClick('Accueil', e)}>
          <img src="/450859769_341480009003048_1830045632571275504_n-removebg-preview.png" alt="Logo PEPCI" className="brand-logo" />
          <span>PEPCI</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.label === 'Notre actualité' ? 'active' : ''}
              onClick={(e) => handleNavClick(item.label, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="article-crumb">Notre actualité</div><div className="article-banner" />
      <section className="article-feature"><article className="feature-story"><div className="feature-image" /><h1>Sed ut perspiciatis unde omnis iste n Sed ut perspiciatis unde om</h1></article><aside className="article-side"><div className="side-title" /><div className="side-placeholder" /></aside></section>
      <article className="article-copy"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></article>
      <section className="other-articles"><h2>AUTRES ARTICLES</h2><div className="other-grid">{related.map((item) => <article key={item.title}><img src={item.image} alt="" /><h3>{item.title}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ...</p><a href="#actualite">Lire plus <span>→</span></a></article>)}</div><div className="pagination"><span>←</span><b>1</b><b>2</b><b>3</b><b>4</b><b>5</b><span>→</span></div></section>
      <Footer onNavigate={(tab) => handleNavClick(tab, { preventDefault: () => {} } as any)} />
    </main>
  )
}
