import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import Logo_header from "../components/logo_header";
import Location_header from "../components/location_header";


const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Home = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'YOUR_API_KEY',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
    <div>
        <Logo_header></Logo_header>
        <Location_header></Location_header>

        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.0961779618087!2d2.3416491505986627!3d48.86884582690801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3c8ab00dff%3A0xdb158c2db686cbcf!2sEEMI!5e0!3m2!1sfr!2sfr!4v1706609311598!5m2!1sfr!2sfr" 
                width="100%" height="450" style={{ border: 0 }} 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
        >
            <Marker position={center} />
        </GoogleMap>
        </div>
    </div>
    );
};
  
export default Home;