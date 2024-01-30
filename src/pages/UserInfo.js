import * as React from "react";
import { NavLink } from "react-router-dom";

// Déclaration de la fonction MyComponent en dehors du composant UserInfo
function MyComponent(props) {
  return (
    <div className="flex flex-col items-stretch mx-auto w-full bg-white max-w-[480px] rounded-[35px]">
      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-10 py-11 aspect-[3.45]">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/955810d3787aa019dd3e5f89f46a4af61f5c7c4e840576b77a8f2a5b76b15eac?"
          className="object-cover object-center absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45336a3221c611f7f886e568cbfe7dc554364aaf87a05c37dbc5834c262ffe74?"
          className="object-contain object-center shrink-0 mt-3 w-2 aspect-[0.57] stroke-[2px] stroke-black"
        />
        <div className="relative flex-auto text-xl text-black">
          Données personnelles
        </div>
      </div>
      <div className="flex z-10 flex-col items-stretch px-10 -mt-3.5 w-full text-zinc-800">
        <img
          loading="lazy"
          srcSet="..."
          className="object-contain object-center self-center w-20 shadow-sm aspect-square"
        />
        <div className="self-center mt-3 text-base text-center text-neutral-600 text-opacity-80">
          @odilep
        </div>
        <div className="self-center mt-2.5 text-base text-center whitespace-nowrap text-neutral-600">
          Odile PACCACO
        </div>
        <div className="mt-9 text-base">Votre Nom</div>
        <div className="justify-center items-start py-3.5 pr-16 pl-4 mt-2.5 text-base whitespace-nowrap rounded-xl border border-amber-500 border-solid text-neutral-600">
          Odile PACCACO
        </div>
        <div className="mt-8 text-base">Votre E-mail</div>
        <div className="justify-center items-start py-3.5 pr-16 pl-4 mt-2.5 text-base rounded-xl border border-amber-500 border-solid text-neutral-600">
          odile.paccaco@gmail.com
        </div>
        <div className="mt-8 text-base">Votre Numéro de Téléphone</div>
        <div className="justify-center items-start py-3.5 pr-16 pl-4 mt-1.5 text-base whitespace-nowrap rounded-xl border border-amber-500 border-solid text-neutral-600">
          06 12 34 56 78
        </div>
        <div className="mt-8 text-base">Genre</div>
        <div className="flex gap-5 justify-between items-stretch mt-2.5">
          <div className="grow justify-center items-stretch px-11 py-3.5 text-base text-center rounded-xl border border-amber-500 border-solid text-neutral-600">
            Homme
          </div>
          <div className="grow justify-center items-stretch px-11 py-3.5 text-base text-center rounded-xl border border-solid border-zinc-400 text-neutral-600">
            Femme
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-9 mt-40 w-full">
        <div className="flex gap-5 justify-between items-stretch max-w-full w-[207px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c4e664452753d6dfbd11f00ac3e9ea1c1dd4e2edee31a2ce133c4d3a7e32203?"
            className="object-contain object-center flex-1 shrink-0 w-full aspect-[0.74]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46f0e6e880142683e7d5df71fbdd0b832547d086b58371fcbef49badab7526f?"
            className="object-contain object-center flex-1 shrink-0 w-full aspect-[0.85]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd11f761751a910914a52138f9bb3350c8119f77b0a62f6fee4648d907bfbccf?"
            className="object-contain object-center flex-1 shrink-0 items-center w-full aspect-[0.59]"
          />
        </div>
      </div>
    </div>
  );
}

const UserInfo = () => {
  return (
    <div>
      {/* Appel de la fonction MyComponent */}
      {MyComponent()}
    </div>
  );
};

export default UserInfo;