/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { mhan } from '../../assets'
import { myPages } from '../../constants'
import { fadeAnimation, slideAnimation } from '../../utils/motion'
import { Menu, X } from 'lucide-react'
const Navbar = () => {

    const [activePageId, setActivePageId] = useState("");
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    return (
        <AnimatePresence>
            <nav
                className='w-full sticky left-0 top-0 z-50 bg-white'>
                <div className='max-w-7xl mx-auto px-5 flex items-center justify-between h-16'>
                    <Link to='/' className="flex items-center gap-2"
                        onClick={() => {
                            setActivePageId("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={mhan} alt="logo" className='w-9 h-9 object-contain' />
                    </Link>

                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {myPages.map((page) => (
                            <li key={page.id}
                                className={`${activePageId === page.id ? "text-yellow-500" : "text-gray-700"} text-gray-700 hover:text-yellow-500 text-sm cursor-pointer`}
                                onClick={() => setActivePageId(page.id)}
                            >
                                <Link to={`/${page.id}`}>{page.title}</Link>
                            </li>
                        ))}

                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        {isMobileMenuOpened
                            ? (<X
                                onClick={() => (setIsMobileMenuOpened(!isMobileMenuOpened))}
                                className='cursor-pointer'
                                size={30}
                            />)
                            : (<Menu
                                onClick={() => (setIsMobileMenuOpened(!isMobileMenuOpened))}
                                className='cursor-pointer'
                                size={30}
                            />)
                        }
                        <motion.div
                            className='fixed z-60 w-[300px] z-50 h-screen bg-white top-0 right-0 px-5 shadow-xl'
                            initial={{ x: '100%' }}
                            // animate={{ x: 0 }}
                            transition={{ duration: 0.2 }}
                            variants={{
                                open: { x: 0 },
                                closed: { x: '100%' }
                            }}
                            animate={isMobileMenuOpened ? 'open' : 'closed'}
                        >
                            <div className='flex justify-end h-20 items-center'>
                                <X onClick={() => (setIsMobileMenuOpened(!isMobileMenuOpened))} />
                            </div>

                        </motion.div>


                        <motion.div
                            className={`${isMobileMenuOpened ? "flex" : "hidden"} z-40 w-screen h-screen fixed top-0 left-0 glassmorphism `}
                            initial={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            variants={{
                                open: { opacity: 1 },
                                close: { opacity: 0 }
                            }}
                            animate={isMobileMenuOpened ? 'open' : 'closed'}
                        />
                    </div>
                </div>
            </nav>
        </AnimatePresence >
    )
}

export default Navbar
