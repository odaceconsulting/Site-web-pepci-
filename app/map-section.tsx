'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Station {
  name: string
  city: string
  lat: number
  lng: number
  region: string
}

const STATIONS: Station[] = [
  // District d'Abidjan & Sud
  { name: 'Station PEPCI d’Abidjan - Plateau', city: 'Abidjan (Plateau)', lat: 5.325, lng: -4.020, region: 'Abidjan' },
  { name: 'Station PEPCI d’Abidjan - Port-Bouët', city: 'Abidjan (Port-Bouët)', lat: 5.258, lng: -3.935, region: 'Abidjan' },
  { name: 'Station PEPCI d’Abidjan - Cocody', city: 'Abidjan (Cocody)', lat: 5.352, lng: -3.978, region: 'Abidjan' },
  { name: 'Station PEPCI d’Abidjan - Yopougon', city: 'Abidjan (Yopougon)', lat: 5.340, lng: -4.085, region: 'Abidjan' },
  { name: 'Station PEPCI d’Abidjan - Treichville', city: 'Abidjan (Treichville)', lat: 5.305, lng: -4.010, region: 'Abidjan' },
  { name: 'Station PEPCI d’Abidjan - Marcory', city: 'Abidjan (Marcory)', lat: 5.295, lng: -3.985, region: 'Abidjan' },
  { name: 'Station PEPCI de Bingerville', city: 'Bingerville', lat: 5.355, lng: -3.890, region: 'Abidjan' },
  { name: 'Station PEPCI de Grand-Bassam', city: 'Grand-Bassam', lat: 5.210, lng: -3.740, region: 'Sud-Comoé' },

  // Centre & Yamoussoukro
  { name: 'Station PEPCI de Yamoussoukro', city: 'Yamoussoukro', lat: 6.815, lng: -5.275, region: 'Bélier' },
  { name: 'Station PEPCI de Toumodi', city: 'Toumodi', lat: 6.550, lng: -5.020, region: 'Bélier' },
  { name: 'Station PEPCI de Bouaké', city: 'Bouaké', lat: 7.690, lng: -5.030, region: 'Gbêkê' },
  { name: 'Station PEPCI de Tiébissou', city: 'Tiébissou', lat: 7.160, lng: -5.220, region: 'Bélier' },

  // Centre-Ouest & Sud-Ouest
  { name: 'Station PEPCI de Daloa', city: 'Daloa', lat: 6.875, lng: -6.450, region: 'Haut-Sassandra' },
  { name: 'Station PEPCI de Bouaflé', city: 'Bouaflé', lat: 6.990, lng: -5.750, region: 'Marahoué' },
  { name: 'Station PEPCI de Gagnoa', city: 'Gagnoa', lat: 6.130, lng: -5.940, region: 'Gôh' },
  { name: 'Station PEPCI de Soubré', city: 'Soubré', lat: 5.780, lng: -6.600, region: 'Nawa' },
  { name: 'Station PEPCI de San Pédro', city: 'San Pédro', lat: 4.750, lng: -6.640, region: 'San Pédro' },
  { name: 'Station PEPCI de Sassandra', city: 'Sassandra', lat: 4.950, lng: -6.080, region: 'Gbôklé' },

  // Ouest
  { name: 'Station PEPCI de Man', city: 'Man', lat: 7.410, lng: -7.550, region: 'Tonkpi' },
  { name: 'Station PEPCI de Duékoué', city: 'Duékoué', lat: 6.740, lng: -7.350, region: 'Guémon' },

  // Nord
  { name: 'Station PEPCI de Korhogo', city: 'Korhogo', lat: 9.450, lng: -5.620, region: 'Poro' },

  // Est & Gontougo
  { name: 'Station PEPCI d’Abengourou', city: 'Abengourou', lat: 6.730, lng: -3.490, region: 'Indénié-Djuablin' },
  { name: 'Station PEPCI d’Agnibilékrou', city: 'Agnibilékrou', lat: 7.130, lng: -3.200, region: 'Indénié-Djuablin' },
  { name: 'Station PEPCI de Bondoukou', city: 'Bondoukou', lat: 8.040, lng: -2.800, region: 'Gontougo' },

  // Lagunes & Agnéby-Tiassa
  { name: 'Station PEPCI d’Agboville', city: 'Agboville', lat: 5.930, lng: -4.220, region: 'Agnéby-Tiassa' },
  { name: 'Station PEPCI d’Adzopé', city: 'Adzopé', lat: 6.100, lng: -3.860, region: 'La Mé' },
]

export default function MapSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // 1. Ajouter la feuille de style Leaflet si elle n'est pas déjà présente
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
      document.head.appendChild(link)
    }

    const initMap = () => {
      const L = (window as any).L
      if (!L || !mapContainerRef.current) return
      if (mapInstanceRef.current) return

      // Initialiser la carte Leaflet centrée sur la Côte d'Ivoire
      const map = L.map(mapContainerRef.current, {
        center: [7.55, -5.4],
        zoom: 7,
        minZoom: 5,
        maxZoom: 18,
        scrollWheelZoom: false,
      })
      mapInstanceRef.current = map

      // Couche officielle OpenStreetMap (100 % gratuit, sans aucune clé API requise)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | PEPCI',
      }).addTo(map)

      // Icône personnalisée Leaflet avec Picto PEPCI
      const pepciIcon = L.icon({
        iconUrl: '/picto-pepci.png',
        iconSize: [34, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -42],
        className: 'pepci-map-marker',
      })

      // Placer les marqueurs des stations avec infobulle au clic et au survol
      STATIONS.forEach((station) => {
        const marker = L.marker([station.lat, station.lng], { icon: pepciIcon }).addTo(map)
        const isNorth = station.lat > 8.5 // Korhogo au nord

        // Infobulle détaillée au clic (nom de la station, ville, région, services)
        marker.bindPopup(
          `
          <div class="pepci-popup">
            <div class="pepci-popup-header">
              <span class="pepci-popup-tag">Station PEPCI</span>
              <h4 class="pepci-popup-title">${station.name}</h4>
            </div>
            <div class="pepci-popup-body">
              <p class="pepci-popup-row"><strong>Ville :</strong> <span>${station.city}</span></p>
              <p class="pepci-popup-row"><strong>Région :</strong> <span>${station.region}</span></p>
              <p class="pepci-popup-services">Carburants &bull; Lubrifiants &bull; Gaz</p>
            </div>
            <div class="pepci-popup-footer">
              <span class="pepci-popup-badge">Ouvert 24h/24 &bull; 7j/7</span>
            </div>
          </div>
        `,
          {
            maxWidth: 290,
            minWidth: 230,
            className: isNorth ? 'pepci-custom-leaflet-popup pepci-popup-bottom' : 'pepci-custom-leaflet-popup',
            offset: isNorth ? [0, 205] : [0, 7],
            autoPan: false,
          }
        )

        // Fermer le tooltip au clic quand le popup s'ouvre
        marker.on('popupopen', () => {
          marker.closeTooltip()
        })

        // Infobulle rapide au survol
        marker.bindTooltip(`<b>${station.name}</b>`, {
          direction: 'top',
          offset: [0, -40],
          className: 'pepci-map-tooltip',
        })
      })

      setMapLoaded(true)
    }

    if ((window as any).L) {
      initMap()
    } else {
      let script = document.getElementById('leaflet-js') as HTMLScriptElement | null
      if (!script) {
        script = document.createElement('script')
        script.id = 'leaflet-js'
        script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
        script.async = true
        document.body.appendChild(script)
      }
      script.addEventListener('load', initMap)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section className="map-section" id="carte">
      <div className="section-heading">
        <p className="eyebrow">PLUS DE 30 STATIONS</p>
        <h2>PLUS PROCHE DE NOS CLIENTS</h2>
      </div>
      <div className="leaflet-map-wrapper">
        <div ref={mapContainerRef} className="leaflet-map-container" />
      </div>
    </section>
  )
}
