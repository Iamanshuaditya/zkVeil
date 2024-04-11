import React from 'react'
import { navLinks } from '../utils/constants';
import logo from '../assets/icons/logo.png'

const Header: React.FC = () => {

    return (
        <>
            <header className='w-full fixed top-0'>
                <nav className="bg-black bg-opacity-20 w-full">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1107px] px-4 lg:px-5 py-10">
                        <a href="#" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="zkVeil Logo"/>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#" className="text-black px-[15px] py-[6px] font-bold">Buy $ZKV</a>
                            <a href="#" className="text-black px-[15px] py-[6px] font-bold bg-[#D9D9D9]">Bridge</a>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {
                                    navLinks.map((link, index) => {
                                        return (
                                            <li key={index} className={`${index < navLinks.length -1 ? 'pr-5' : ''} ${index > 0 ? 'pl-5' : ''} !m-0 flex items-center`}>
                                                <a href={link.href} key={index} className={`block py-[6px] ${link.title === 'Home' ? 'bg-active px-[15px] ': ''} m-0`} aria-current="page">{link.title}</a>
                                                <div className='border-r border-black h-[18px] relative right-[-20px]'></div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header