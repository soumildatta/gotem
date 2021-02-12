import React from 'react'

const Navbar = () => {
    return (
        <div className="h-10 px-8 flex justify-between items-center bg-blue-500 text-white">
            <h2 className="text-2xl" >GOTEM</h2>
            <div className="flex">
                <p className="mx-4"> Log In </p>
                <p> Sign Up </p>
            </div>
        </div>
    )
}

export default Navbar;