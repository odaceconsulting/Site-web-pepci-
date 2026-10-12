'use client'

import React from 'react'

interface FooterProps {
  onNavigate?: (tab: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleClick = (tab: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(tab)
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer_main">
        {/* Colonne 1 : Marque PEPCI */}
        <div className="footer_main-block footer_main-brand">
          <a
            href="#accueil"
            className="brand"
            onClick={(e) => handleClick('Accueil', e)}
            aria-label="Accueil PEPCI"
          >
            <img
              src="/450859769_341480009003048_1830045632571275504_n-removebg-preview.png"
              alt="Logo PEPCI"
              className="brand_logo"
            />
          </a>
          <p className="footer_main-block_subtitle footer_main-block_subtitle--brand">
            <strong>Premium Energies Partners Côte d'Ivoire</strong>
            <br />
            L’énergie de demain, aujourd’hui.
          </p>
        </div>

        {/* Colonne 2 : Nos produits et services */}
        <div className="footer_main-block">
          <h6 className="footer_main-block_title">Nos produits et services</h6>
          <ul className="footer_main-block_nav">
            <li>
              <a href="#services" onClick={(e) => handleClick('Nos produits & services', e)}>
                STATIONS SERVICES
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleClick('Nos produits & services', e)}>
                NOTRE OFFRE B2B
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleClick('Nos produits & services', e)}>
                LUBRIFIANTS
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleClick('Nos produits & services', e)}>
                GAZ BUTANE
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleClick('Nos produits & services', e)}>
                PAIEMENT
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Notre entreprise */}
        <div className="footer_main-block">
          <h6 className="footer_main-block_title">Notre entreprise</h6>
          <ul className="footer_main-block_nav">
            <li>
              <a href="#entreprise" onClick={(e) => handleClick('Notre entreprise', e)}>
                Notre mission
              </a>
            </li>
            <li>
              <a href="#entreprise" onClick={(e) => handleClick('Notre entreprise', e)}>
                Notre engagement HSE
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Notre actualité */}
        <div className="footer_main-block">
          <h6 className="footer_main-block_title">Notre actualité</h6>
          <ul className="footer_main-block_nav">
            <li>
              <a href="#actualite" onClick={(e) => handleClick('Notre actualité', e)}>
                Articles
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 5 : Nous rejoindre */}
        <div className="footer_main-block">
          <h6 className="footer_main-block_title">Nous rejoindre</h6>
          <ul className="footer_main-block_nav">
            <li>
              <a href="#contact" onClick={(e) => handleClick('Nous contacter', e)}>
                Offres d'emploi
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleClick('Nous contacter', e)}>
                Nous contacter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre inférieure de copyright et réseaux */}
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom-copyright">
            © 2024 PEPCI - Premium Energies Partners Côte d'Ivoire. Tous droits réservés.
          </div>
          <div className="footer_bottom-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
