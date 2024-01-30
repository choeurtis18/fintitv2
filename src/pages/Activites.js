import { NavLink } from "react-router-dom";
import { useState } from 'react';

import Logo_header from "../components/logo_header";
import { activites_list } from "../assets/activite.js";

const Activites = () => {
    const [searchType, setSearchType] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleSearchChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const filteredActivites = activites_list.filter((item) =>
        item.titre.toLowerCase().includes(searchType.toLowerCase()) &&
        (selectedType === "" || item.type.toLowerCase() === selectedType.toLowerCase())
    );

    const uniqueTypes = [...new Set(activites_list.map(item => item.type))];

    return (
        <div>
            <Logo_header></Logo_header>

            <div className="px-6">
                <input
                    type="text"
                    placeholder="Le bon ti..."
                    value={searchType}
                    onChange={handleSearchChange}
                    className="w-full h-12 my-4 p-2 border border-gray-300 rounded-2xl"
                />

                <div className="filtre_type">
                    <label htmlFor="typeFilter" className="block text-gray-700 font-bold mb-2">Filtrer par type:</label>
                    <select
                        id="typeFilter"
                        value={selectedType}
                        onChange={handleTypeChange}
                        className="w-full h-12 my-2 p-2 border border-gray-300 rounded-2xl"
                    >
                        <option value="">Tous les types</option>
                        {uniqueTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                {
                filteredActivites.map((item, index) => (
                    <NavLink key={index} to={"/activites/" + item.id} className="w-full flex flex-col justify-center my-4 logo p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.titre}</h5>
                        <p className="font-normal text-gray-700">{item.adresse}</p>
                    </NavLink>
                ))
                }
            </div>
        </div>
    );
};
  
export default Activites;