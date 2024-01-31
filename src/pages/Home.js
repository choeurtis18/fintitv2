import React, { useEffect } from 'react';
import L from 'leaflet';

import Logo_header from "../components/logo_header";
import Location_header from "../components/location_header";
import GeoNotification from '../components/GeoNotification';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  useEffect(() => {
    const map = L.map('maps').setView([0, 0], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Fonction pour mettre à jour la position et les activités sur la carte
    const updateLocationAndActivitiesOnMap = () => {
      // Obtient la position actuelle de l'utilisateur
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 16);

          // Supprime les couches de marqueurs précédentes
          map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              layer.remove();
            }
          });

          // Ajoute un marqueur pour la position actuelle
          L.marker([latitude, longitude]).addTo(map);

          // Ajoute des marqueurs pour les activités de types spécifiques
          addMarkersForActivities(map, 'restaurant', [48.867, 2.345]);
          addMarkersForActivities(map, 'cinema', [48.865, 2.350]);
          addMarkersForActivities(map, 'musee', [48.870, 2.340]);
          // Ajoutez d'autres types et emplacements selon vos besoins
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error.message);
        }
      );
    };

    // Appel initial pour mettre à jour la position et les activités sur la carte
    updateLocationAndActivitiesOnMap();

    // Met à jour la position et les activités sur la carte toutes les 30 secondes (ou selon vos besoins)
    const updateInterval = setInterval(updateLocationAndActivitiesOnMap, 30000);

    // Nettoie l'intervalle lorsque le composant est démonté
    return () => clearInterval(updateInterval);
  }, []);

  // Fonction pour ajouter des marqueurs pour les activités d'un type spécifique
  const addMarkersForActivities = (map, activityType, coordinates) => {
    const marker = L.marker(coordinates).addTo(map);

    // Personnalisez l'icône en fonction du type d'activité
    switch (activityType) {
      case 'restaurant':
        marker.bindPopup('Restaurant');
        break;
      case 'cinema':
        marker.bindPopup('Cinéma');
        break;
      case 'musee':
        marker.bindPopup('Musée');
        break;
      // Ajoutez d'autres types selon vos besoins
      default:
        marker.bindPopup('Autre');
    }
  };

  return (
    <div>
        <Logo_header></Logo_header>
        <Location_header></Location_header>
        <GeoNotification></GeoNotification>
        <div id='maps' style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default Home;
