import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { activites_list } from "../assets/activite.js";

const Activite = () => {
    const { id } = useParams();
    const [activite, setActivite] = useState(null);

    useEffect(() => {
        // Convertir l'id en nombre
        const activiteId = parseInt(id, 10);

        // Trouver l'activité correspondant à l'id
        const activiteTrouvee = activites_list.find(item => item.id === activiteId);

        // Mettre à jour l'état avec l'activité trouvée
        setActivite(activiteTrouvee);
    }, [id]);

    if (!activite) {
        // Si aucune activité trouvée, vous pouvez gérer cela ici (peut-être rediriger vers une page d'erreur)
        return <div>Aucune activité trouvée</div>;
    }

    return (
        <div className="text-center my-12 mx-8">
            <h2 className="text-3xl font-semibold">{activite.titre}</h2>
            <p className="text-base my-4">{activite.description}</p>

            <div>
                <p className="text-xl text-gray-500">{activite.type}</p>
                <p className="text-lg">{activite.adresse}</p>
            </div>
        </div>
    );
};

export default Activite;
