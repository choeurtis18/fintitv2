import { NavLink } from "react-router-dom";

const Compte = () => {
    return (
        <div>
            <div className="flex flex-row items-center p-8 w-full gap-4">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <div>
                    <h5 className="text-2xl font-bold">Bonnie Green</h5>
                    <span className="text-lg font-normal text-gray-700">@Bobonie</span>
                </div>
            </div>

            <div className="flex flex-col gap-6">
             <NavLink to="/userinfo" className="flex flex-column items-center gap-4 mx-8 p-4 border border-gray-200 rounded-lg shadow bg-white">
                <div className='px-4 py-2 rounded-lg flex items-center'>
                    <i className="uil uil-home text-3xl"></i>
                </div>
                 
                <p className="text-xl">Données personnelles</p>
            </NavLink>  

            <NavLink className="flex flex-column items-center gap-4 mx-8 p-4 border border-gray-200 rounded-lg shadow bg-white">
                <div className='px-4 py-2 rounded-lg flex items-center'>
                    <i className="uil uil-setting text-3xl"></i>
                </div>
                 
                <p className="text-xl">Paramètres</p>
            </NavLink>             
            </div>

        </div>
    );
};
  
export default Compte;