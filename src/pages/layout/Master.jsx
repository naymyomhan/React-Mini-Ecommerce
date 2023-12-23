/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Master = (props) => {


    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Master