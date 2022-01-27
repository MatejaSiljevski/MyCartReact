import React from 'react'
import { useGlobalContext } from '../context/context'
import Bag from '../media/icons/bag.svg'

function Navbar() {
    const {amount} = useGlobalContext()

    return (
        <nav>
            <div className="nav-center">
                <h3>HotDeals</h3>
                <div className="nav-container">
                    <img src={Bag} alt="" />
                    <div className="amount-container">
                        <div className="total-amount">{amount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
