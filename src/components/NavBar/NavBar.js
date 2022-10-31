import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: './home'},
        {id: 2, name: 'Products', path: './home'},
        {id: 3, name: 'Orders', path: './home'},
        {id: 4, name: 'Contact', path: './home'},
        {id: 5, name: 'About', path: './home'},
    ]
    return (
        <nav className='bg-pink-200 p-4'>
           <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ? <XMarkIcon /> : <Bars3Icon/>
            }
           </div>
           <ul className={`bg-pink-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
           </ul>
        </nav>
    );
};

export default NavBar;