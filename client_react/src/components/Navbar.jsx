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
                        <div className='flex  space-x-2' >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-400"
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon
                                        icon="search" // Use the icon name you imported from FontAwesome
                                        className="h-5 w-5 text-gray-400"
                                    />
                                </div>
                            </div>
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
