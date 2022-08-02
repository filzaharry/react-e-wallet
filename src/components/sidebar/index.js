import React from 'react'
import Logo from '../../assets/logo.png'
import {BiHomeAlt, BiGridAlt, BiCreditCard} from "react-icons/bi"
import { Link } from 'react-router-dom'


export default function Sidebar() {

    const menu = [
        {name: "Dashboard", icon: <BiHomeAlt/>, link:'/home'},
        {name: "Report", icon: <BiGridAlt/>, link:'/report'},
        {name: "Logout", icon: <BiCreditCard/>, link:'/'},
    ]
  return <div className='h-screen border-r border-gray-200 w-64 px-9 space-y-20'>
            <div className='flex flex-row items-center m-4'>
                <img src={Logo} alt="logo-sidebar" className='w-9 h-9 mr-2' />
                <div>E-WALLET</div>
            </div>
            <div>
                <div className='mb-4'>
                    Menu
                </div>
                <ul>
                    {menu.map((val, index) => {
                        return <li key={index} className="mb-7 flex flex-row items-center hover:bg-sky-100 ">
                            <Link to={val.link} className="flex flex-row ">
                                <div className='mr-5 mt-1'>{val.icon}</div>
                                <div>{val.name}</div>
                            </Link>
                        </li>;
                    })}
                </ul>
            </div>
        </div>

}
