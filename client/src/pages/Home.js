import React from 'react'
import Navbar from '../components/Navbar'
import LookAlikesDisplay from '../components/LookAlikesDisplay'


export default function Home() {


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