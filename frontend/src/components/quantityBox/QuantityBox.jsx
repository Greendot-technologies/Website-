/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const QuantityBox = () => {
    const [inputValue, setinputValue] = useState(1);
    // const [cartItems, setcartItems] = useState([]);







    return (
        <div className='addCartSection pt-4 pb-4 d-flex align-items-center '>
            <div className='counterSec mr-3'>
                <input type='number' value={inputValue} />
                <span className='arrow plus'
                   
                
                ><KeyboardArrowUpIcon /></span>


                <span className='arrow minus'

                ><KeyboardArrowDownIcon /></span>
            </div>

        </div>
    )
}

export default QuantityBox;