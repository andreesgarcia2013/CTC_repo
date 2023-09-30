import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <Link to={'/'} className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cuida Tu Comunidad</span>
                    </Link>
                    {location.pathname !== '/create' && (
                        <Link to={'create'} className="flex items-center">
                            <span 
                                type="button" 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Nueva tarea
                            </span>
                        </Link>
                    )}

                </div>
            </nav>
        </>
    )
}
