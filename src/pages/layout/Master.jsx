/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Master = (props) => {


    return (
        <div>
            <Navbar />
            <div className='bg-gray-100 min-h-screen my-0'>
                <div className='max-w-6xl mx-auto px-5'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Master