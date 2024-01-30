import React, { useEffect, useState } from 'react';

const GeoNotification = () => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setNotification('Géolocalisation non prise en charge par votre navigateur');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setNotification(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            }, () => {
                setNotification('Impossible de récupérer votre position');
            });
        }
    }, []);

    return (
        <div>
            {notification}
        </div>
    );
};

export default GeoNotification;