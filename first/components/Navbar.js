import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-gray-950 text-white flex justify-between px-4 h-16 items-center '>
            <div className='logo text-lg font-bold'>GetMechai</div>

            {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

            <div>
                <Link href={'/login'} >
                    <button className="border bg-purple-950 p-2 px-4 rounded-full mx-2">Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
