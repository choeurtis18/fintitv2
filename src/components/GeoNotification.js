import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

const GeoNotification = () => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setNotification('Géolocalisation non prise en charge par votre navigateur');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                
                // setNotification(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
                setNotification(`Une petite faim ? Il y Picto - Sandwicherie artisanale à 300m de vous !`);
            }, () => {
                setNotification('Impossible de récupérer votre position');
            });
        }
    }, []);

    return (
        <Popup open={notification !== null} closeOnDocumentClick onClose={() => setNotification(null)}>
            <div className="p-4 bg-gradient-to-r from-[#FE911E] to-[#F25F24] text-white rounded-lg shadow-md fixed top-0 left-0 right-0 mt-4 mx-4">
                {notification}
            </div>
        </Popup>
    );
};

export default GeoNotification;