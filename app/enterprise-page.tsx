'use client'

import { useState } from 'react'
import Footer from './footer'

const people = [
  ['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directeur ...'],
  ['https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directrice ...'],
  ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directeur ...'],
  ['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directeur ...'],
  ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directeur ...'],
  ['https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directrice ...'],
  ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directrice ...'],
  ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85', 'Koné KASSOUM', 'Directeur ...'],
]

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre entreprise', href: '#entreprise' },
  { label: 'Nos produits & services', href: '#services' },
  { label: 'Notre actualité', href: '#actualite' },
  { label: 'Nous rejoindre', href: '#contact' },
  { label: 'Nous contacter', href: '#contact' },
]

export default function EnterprisePage({
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
    <main className="enterprise-site">
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
              className={item.label === 'Notre entreprise' ? 'active' : ''}
              onClick={(e) => handleNavClick(item.label, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="enterprise-crumb">Notre entreprise &gt; Vision et mission</div>
      <section className="enterprise-intro"><h1>ICI UNE PROPOSITION DE VALEUR SUR<br />VOTRE FORMIDABLE <em>ÉQUIPE</em></h1><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p></section>
      <section className="people-grid">{people.map(([image, name, role], index) => <article className="person-card" key={`${name}-${index}`}><div className="person-photo"><img src={image} alt={role} /><div className="person-social"><span>in</span><span>✉</span><span>◔</span></div></div><h3>{name}</h3><p>{role}</p></article>)}</section>
      <section className="join-section"><h2>ICI UNE PROPOSITION DE VALEUR SUR<br />POUR <em>REJOINDRE VOTRE ÉQUIPE</em></h2><div><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><a className="green-button" href="#contact">REJOINDRE NOTRE ÉQUIPE</a></div></section>
      <section className="contact-banner"><div><h2>VOUS AVEZ UNE QUESTION ?<br />NOTRE ÉQUIPE SERA RAVIE<br />DE <em>VOUS ASSISTER</em></h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><a className="green-button" href="#contact">NOUS CONTACTER MAINTENANT</a></div><img src={people[5][0]} alt="Membre de l'équipe PEPCI" /></section>
      <Footer onNavigate={(tab) => handleNavClick(tab, { preventDefault: () => {} } as any)} />
    </main>
  )
}
