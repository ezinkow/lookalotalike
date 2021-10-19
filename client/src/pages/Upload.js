import React from 'react'
import UploadForm from '../components/UploadForm'
import Navbar from '../components/Navbar.js'

export default function Upload() {

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                    </div>
                    <div className='col-4'>
                        <UploadForm />
                    </div>
                    <div className='col-4'>
                    </div>
                </div>
            </div>
        </>
    )
}