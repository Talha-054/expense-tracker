import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {



    

    return (
        <>
            <div className='p-4 bg-gray-200 h-[10vh] flex justify-evenly items-center'>
                <NavLink to={'/add'} className= {({isActive})=>` ${isActive? 'border-b-2' : 'border-b-0'} border-black text-black/60 text-xl hover:cursor-pointer hover:text-black font-bold`}> Add </NavLink>

                <NavLink to={'/data'} className= {({isActive})=>` ${isActive? 'border-b-2' : 'border-b-0'} border-black text-black/60 text-xl hover:cursor-pointer hover:text-black font-bold`}> View </NavLink>

                <NavLink to={'/analyse'} className= {({isActive})=>` ${isActive? 'border-b-2' : 'border-b-0'} border-black text-black/60 text-xl hover:cursor-pointer hover:text-black font-bold`}> Detail Analysis </NavLink>


            </div> 
        </>
    )
}

export default Header
