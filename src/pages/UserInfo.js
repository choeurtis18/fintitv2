import { useState } from 'react';
import { NavLink } from "react-router-dom";

import Logo_header from "../components/logo_header";

const UserInfo = () => {
  const [selectedGender, setSelectedGender] = useState('Homme');

  const handleGenderToggle = () => {
    // Toggle entre 'Homme' et 'Femme'
    setSelectedGender(selectedGender === 'Homme' ? 'Femme' : 'Homme');
  };


  return (  
    <div>
    <Logo_header></Logo_header>

    <div className="flex z-10 flex-col items-stretch px-10 my-12 w-full text-zinc-800">
      <img
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        className="object-contain object-center self-center w-20 shadow-sm aspect-square"
      />
      <div className="self-center mt-3 text-base text-center text-neutral-600 text-opacity-80">
        @odilep
      </div>
      <div className="self-center mt-2.5 text-base text-center whitespace-nowrap text-neutral-600">
        Odile PACCACO
      </div>
      <div className="mt-9 text-base">Votre Nom</div>
      <input type="text" placeholder="Odile PACCACO" className="justify-center items-start py-3.5 pr-16 pl-4 mt-2.5 text-base whitespace-nowrap rounded-xl border border-amber-500 border-solid text-neutral-600">
      </input>
      <div className="mt-8 text-base"></div>
      <input type="email" placeholder="odile.paccaco@gmail.com" className="justify-center items-start py-3.5 pr-16 pl-4 mt-2.5 text-base rounded-xl border border-amber-500 border-solid text-neutral-600">
      </input>
      <div className="mt-8 text-base">Votre Numéro de Téléphone</div>
      <input type="number" placeholder="06 12 34 56 78"  className="justify-center items-start py-3.5 pr-16 pl-4 mt-1.5 text-base whitespace-nowrap rounded-xl border border-amber-500 border-solid text-neutral-600">    
      </input>
      
      <div className="mt-8 text-base">Genre</div>
        <div className="flex gap-5 justify-between items-stretch mt-2.5">
          <div
            className={`grow justify-center items-stretch px-11 py-3.5 text-base text-center rounded-xl border ${
              selectedGender === 'Homme'
                ? 'border-amber-500 text-neutral-600'
                : 'border-solid border-zinc-400 text-neutral-600'
            }`}
            onClick={handleGenderToggle}
          >
            Homme
          </div>
          <div
            className={`grow justify-center items-stretch px-11 py-3.5 text-base text-center rounded-xl border ${
              selectedGender === 'Femme'
                ? 'border-amber-500 text-neutral-600'
                : 'border-solid border-zinc-400 text-neutral-600'
            }`}
            onClick={handleGenderToggle}
          >
            Femme
          </div>
        </div>

        <NavLink to="/compte" className="grow justify-center px-11 py-4 text-base text-center rounded-xl border border-amber-500 border-solid text-neutral-600 my-8 bg-white">
        Enregistrer
        </NavLink>
    </div>
  </div>
  );
};

export default UserInfo;