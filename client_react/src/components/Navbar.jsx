import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 py-5">
                <div className=" flex flex-col md:flex-row items-center justify-between">
                    <Link to={'/'} className="flex items-center self-center text-2xl font-semibold whitespace-nowrap text-white m-5">
                        Cuida Tu Comunidad
                    </Link>
                    {location.pathname !== '/create' && (
                        <div className=' flex px-5' >
                            <Link to={'create'} className="flex items-center">
                                <span
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    <span className="hidden md:inline">Nueva tarea</span> {/* Oculta en pantallas md o menores */}
                                    <FontAwesomeIcon
                                        icon="plus" // Use the icon name you imported from FontAwesome
                                        className="w-fit text-white"
                                    />
                                </span>
                            </Link>
                        </div>
                    )}

                </div>
            </nav>
        </>
    )
}
