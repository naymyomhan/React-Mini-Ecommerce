/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, ChevronDown, EqualNotIcon, HelpCircle, Menu, Search, X } from 'lucide-react'
import { US, MM } from 'country-flag-icons/react/3x2'

import { logo } from '../../assets'
import { myPages } from '../../constants'
const Navbar = () => {

    const [selectingLanguage, setSelectingLanguage] = useState(false);

    const [activePageId, setActivePageId] = useState("");
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const [searchKeyword, setSearchKeyword] = useState();

    const handleSearch = () => {
        alert(searchKeyword);
        setSearchKeyword("");
    }
    return (
        <nav className='w-full sticky left-0 top-0 z-50 bg-white'>

            {/* Nav Bar Head */}
            <div className='max-w-6xl mx-auto px-5 flex items-center justify-between h-10'>

                <div className='flex flex-row items-center h-full'>
                    {/* Change Language */}
                    <div>
                        <button
                            className='group flex flex-row items-center'
                            onClick={() => { setSelectingLanguage(!selectingLanguage) }}
                        >
                            <MM title='Myanmar' className='h-3' />
                            <span className="text-sm group-hover:text-gray-400 text-gray-500 ml-2">Myanmar</span>
                            <ChevronDown size={18} className='text-gray-500 group-hover:text-gray-400 ml-1' />
                        </button>

                        {selectingLanguage && (
                            <div className='absolute pl-5 pr-14 py-5 bg-white rounded-sm border border-gray-300 mt-3 ml-5 shadow-xl flex flex-col items-start'>
                                <button
                                    className='flex flex-row items-center'
                                    onClick={() => { setSelectingLanguage(!selectingLanguage) }}
                                >
                                    <MM title='Myanmar' className='h-3' />
                                    <span className="text-sm text-gray-500 ml-2">Myanmar</span>
                                </button>

                                <button
                                    className='flex flex-row items-center mt-4'
                                    onClick={() => { setSelectingLanguage(!selectingLanguage) }}
                                >
                                    <US title='English' className='h-3' />
                                    <span className="text-sm text-gray-500 ml-2">English</span>
                                </button>
                            </div>
                        )}

                    </div>

                    {/* Start Selling */}
                    <Link to='/seller/register' className='text-sm text-gray-500 ml-4 hover:text-gray-400'>Start Selling</Link>
                </div>

                <div className='flex flex-row items-center h-full'>
                    <Link to='#' className='group flex flex-row items-center'>
                        <Bell size={18} className='text-gray-500 group-hover:text-gray-400' />
                        <span className='ml-1 text-sm text-gray-500 group-hover:text-gray-400 font-bold'>Notification</span>
                    </Link>
                    <Link to='#' className='group flex flex-row items-center ml-4 mr-4'>
                        <HelpCircle size={18} className='text-gray-500 group-hover:text-gray-400' />
                        <span className='ml-1 text-sm text-gray-500 group-hover:text-gray-400 font-bold'>Help</span>
                    </Link>

                    <Link to='/user/register' className='text-sm text-gray-600 ml-4 hover:text-gray-400 font-bold'>Sign Up</Link>
                    <div className='w-[1px] mx-3 h-5 bg-gray-400' />
                    <Link to='/user/login' className='text-sm text-gray-600 hover:text-gray-400 font-bold'>Login</Link>
                </div>
            </div>


            <hr></hr>

            {/* Nav Bar Body */}
            <div className='max-w-6xl mx-auto px-5 flex items-center h-20'>
                <Link to='/' className="flex items-center gap-2"
                    onClick={() => {
                        setActivePageId("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className='h-20 object-contain' />
                </Link>

                <div className='flex flex-row items-center w-full ml-10 mr-10'>
                    <input onChange={(e) => { setSearchKeyword(e.target.value) }} value={searchKeyword} type="text" className='h-10 border border-gray-200 rounded-tl-md rounded-bl-md focus:border-gray-300 outline-none w-full px-4 text-gray-600' placeholder='Search in Shopping' />
                    <button onClick={handleSearch} className='flex items-center rounded-tr-md rounded-br-md justify-center h-10 w-14 bg-orange-500 text-white'><Search size={20} /></button>
                </div>

                <ul className='list-none flex flex-row gap-10'>
                    {myPages.map((page) => (
                        <li key={page.id}
                            className={`${activePageId === page.id ? "text-yellow-500" : "text-gray-700"} text-gray-700 hover:text-yellow-500 text-sm cursor-pointer`}
                            onClick={() => setActivePageId(page.id)}
                        >
                            <Link to={`/${page.id}`}>{page.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <hr></hr>

            {/* Nav Bar Fooder */}
            <div className='max-w-6xl mx-auto px-5 flex items-center justify-center h-12'>

                <div className='flex flex-row items-center h-full gap-8'>
                    <Link to='#' className='nav_b_menu_item'>Home</Link>
                    <Link to='#' className='nav_b_menu_item'>Flash Sale</Link>
                    <Link to='#' className='nav_b_menu_item'>Blogs</Link>
                    <Link to='#' className='nav_b_menu_item'>Brands</Link>
                    <Link to='#' className='nav_b_menu_item'>Categories</Link>
                </div>
            </div>


        </nav>
    )
}

export default Navbar
