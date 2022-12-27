import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const NavHeader = () => {
    return (
        <header class="text-white body-font bg-blue-600">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  justify-between">
                <a class="flex title-font font-medium items-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-2xl font-semibold uppercase">TOKENWIZ</span>
                </a>
                
                <div className='flex text-lg justify-end'>
                    <span className='font-semibold tracking-2'> Welcome! Stefan Harar</span>
                    <FaUserCircle className='text-3xl mx-3' />
                </div>
            </div>
        </header>

)
}
export default NavHeader