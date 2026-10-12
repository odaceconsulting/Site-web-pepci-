'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import Footer from './footer'
import './contact.css'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Notre entreprise', href: '#entreprise' },
  { label: 'Nos produits & services', href: '#services' },
  { label: 'Notre actualité', href: '#actualite' },
  { label: 'Nous rejoindre', href: '#contact' },
  { label: 'Nous contacter', href: '#contact' },
]

export default function ContactPage({
  onBack,
  onNavigate,
}: {
  onBack: (event?: React.MouseEvent<HTMLAnchorElement>) => void
  onNavigate?: (tab: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleNavClick = (tab: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault()
    setMenuOpen(false)
    if (onNavigate) {
      onNavigate(tab)
    } else if (tab === 'Accueil') {
      onBack(e)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="contact-site site-shell">
      {/* Header harmonisé avec la charte */}
      <header className="topbar">
        <a href="#accueil" className="brand" aria-label="PEPCI accueil" onClick={(e) => handleNavClick('Accueil', e)}>
          <img
            src="/450859769_341480009003048_1830045632571275504_n-removebg-preview.png"
            alt="Logo PEPCI"
            className="brand-logo"
          />
          <span>PEPCI</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
          ☰
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.label === 'Nous contacter' ? 'active' : ''}
              onClick={(e) => handleNavClick(item.label, e)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Banner conforme à contacts.html */}
      <section
        className="page-banner"
        style={{
          background: "linear-gradient(135deg, rgba(0,153,77,0.9), rgba(0,122,61,0.95)), url('/assets/img/hero_slide1.jpg') center/cover",
          padding: '70px 0',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '3rem',
              textTransform: 'uppercase',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}
          >
            NOUS CONTACTER
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              opacity: 0.9,
              maxWidth: '850px',
              margin: '0 auto',
            }}
          >
            Nos équipes sont à votre écoute pour toute demande d'information ou de partenariat
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid conforme à contacts.html */}
      <section className="section" style={{ padding: '80px 0', background: '#f9fbf9' }}>
        <div className="contact-section-container">
          {/* Contact Form */}
          <div
            className="contact-form-box"
            style={{
              flex: 1.2,
              background: '#ffffff',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #eeeeee',
            }}
          >
            <span className="subtitle">FORMULAIRE DE CONTACT</span>
            <h3
              className="title"
              style={{
                fontFamily: 'var(--font-heading)',
                marginBottom: '25px',
                fontSize: '1.8rem',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              ENVOYEZ-NOUS UN MESSAGE
            </h3>

            {isSubmitted && (
              <div
                style={{
                  background: '#e9f7ef',
                  border: '1px solid #c3e6cb',
                  color: '#155724',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  marginBottom: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                }}
              >
                <CheckCircle2 size={22} color="#00994d" />
                <div>
                  <strong>Message envoyé avec succès !</strong>
                  <div style={{ fontSize: '13px', opacity: 0.9, marginTop: '2px' }}>
                    Nos équipes vous répondront dans les plus brefs délais.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div
                className="form-grid-2"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px',
                  marginBottom: '15px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      color: '#222',
                    }}
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom et prénom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cccccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      color: '#222',
                    }}
                  >
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cccccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div
                className="form-grid-2"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px',
                  marginBottom: '15px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      color: '#222',
                    }}
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+225 07 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cccccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      color: '#222',
                    }}
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Offre B2B, Carburant, Cartes..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cccccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 700,
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-heading)',
                    color: '#222',
                  }}
                >
                  Votre Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Rédigez votre message ici..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #cccccc',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                style={{
                  background: 'var(--primary-green)',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 32px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
              >
                <span>Envoyer le message</span>
                <Send size={15} />
              </button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div
            className="contact-sidebar-box"
            style={{
              flex: 0.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                background: 'var(--dark-green)',
                padding: '35px',
                borderRadius: '8px',
                color: '#ffffff',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 800,
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                NOS COORDONNÉES
              </h4>

              <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent-red)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                    }}
                  >
                    Siège Social
                  </strong>
                  <span style={{ fontSize: '14px', opacity: 0.9, fontFamily: 'var(--font-body)' }}>
                    Abidjan Plateau, Côte d'Ivoire
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Phone size={20} color="var(--accent-red)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                    }}
                  >
                    Téléphone
                  </strong>
                  <span style={{ fontSize: '14px', opacity: 0.9, fontFamily: 'var(--font-body)' }}>
                    <a href="tel:+2252720000000" style={{ color: '#fff', textDecoration: 'none' }}>
                      +225 27 20 00 00 00
                    </a>{' '}
                    /{' '}
                    <a href="tel:+2250700000000" style={{ color: '#fff', textDecoration: 'none' }}>
                      +225 07 00 00 00 00
                    </a>
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Mail size={20} color="var(--accent-red)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                    }}
                  >
                    Adresse Email
                  </strong>
                  <span style={{ fontSize: '14px', opacity: 0.9, fontFamily: 'var(--font-body)' }}>
                    <a href="mailto:contact@p-energies.com" style={{ color: '#fff', textDecoration: 'none' }}>
                      contact@p-energies.com
                    </a>
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Clock size={20} color="var(--accent-red)" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                    }}
                  >
                    Horaires d'ouverture
                  </strong>
                  <span style={{ fontSize: '14px', opacity: 0.9, fontFamily: 'var(--font-body)' }}>
                    Du Lundi au Vendredi : 8h00 - 17h00
                  </span>
                </div>
              </div>
            </div>

            {/* Small Map */}
            <div
              id="contact-map"
              className="contact-map-wrapper"
              style={{
                width: '100%',
                height: '220px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #eeeeee',
              }}
            >
              <iframe
                title="Carte Siège PEPCI Abidjan Plateau"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.035%2C5.315%2C-4.005%2C5.335&amp;layer=mapnik&amp;marker=5.325%2C-4.02"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer officiel */}
      <Footer onNavigate={(tab) => handleNavClick(tab, { preventDefault: () => {} } as any)} />
    </main>
  )
}
