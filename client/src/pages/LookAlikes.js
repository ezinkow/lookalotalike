import React from 'react'
import LookAlikesDisplay from '../components/LookAlikesDisplay'
import Navbar from '../components/Navbar.js'

export default function Upload() {

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-1'>
                    </div>
                    <div className='col-10'>
                        <LookAlikesDisplay />
                    </div>
                    <div className='col-1'>
                    </div>
                </div>
            </div>
        </>
    )
}