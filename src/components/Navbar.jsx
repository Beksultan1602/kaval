import React from 'react';
import Logo from '../assets/images/png/kaval-logo.png'
const Navbar = ({children}) => {
    const navbarItems = ['Home', 'About us']
    return (
        <div className="container mx-auto">
            <div className='flex items-center justify-between'>
                <img className='max-w-[510px] cursor-pointer' src={Logo} alt="Logo"/>
                <ul className='flex items-center justify-between gap-16'>
                    {
                        navbarItems.map(item => {
                            return <li className='font-medium cursor-pointer hover:text-sky-500'>{ item }</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;