import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <>
        <nav className="z-50 fixed bottom-0 bg-gradient-to-r from-[#FE911E] to-[#F25F24] w-full h-16 text-white">
            <ul className="grid h-full max-w-lg grid-cols-3 mx-auto">
            {
                props.nav_list.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.link} className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-[#F25F24] group">
                            <i className={item.icon +" nav__icon"}></i>
                            <span className="text-sm">
                            {item.name} 
                            </span>
                        </NavLink>
                    )
                })
            }
            </ul>
        </nav>
        <Outlet />
        </>
    );
};

export default Navigation;