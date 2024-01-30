import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <>
        <nav className="absolute bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <ul className="grid h-full max-w-lg grid-cols-3 mx-auto">
            {
                props.nav_list.map((item) => {
                    return (
                        <NavLink to={item.link} className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            <i className={item.icon +" nav__icon"}></i>
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
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