import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

import Logo_header from "../components/logo_header";
import { activites_list } from "../assets/activite.js";

const Activites = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
      
    if (searchInput.length > 0) {
        activites_list.filter((activite) => {
            return activite.type.match(searchInput);
        });
    }

    return (
        <div>
            <Logo_header></Logo_header>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}    
            />
            <div className="px-6">
            {
            activites_list.map((item, index) => {
                return (
                    <NavLink key={index} to={"activites/"+item.id} className="w-full flex flex-col justify-center my-4 logo p-6 bg-white border border-gray-200 rounded-lg shadow">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.titre}</h5>
                    <p class="font-normal text-gray-700">{item.adresse}</p>

                    </NavLink>
                )
            })
            }
            </div>
        </div>
    );
};
  
export default Activites;