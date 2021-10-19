import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Plus from '../images/Plus.png'
import Minus from '../images/Minus.png'

export default function Uploads() {
    const [lookAlikes, setLookAlikes] = useState([])
    const [plus, setPlus] = useState('')

    // Fetch all entries in lookalike table
    useEffect(() => {
        async function fetchLookALikes() {
            try {
                const response = await axios('api/lookalike')
                setLookAlikes(response.data)
                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchLookALikes()
    }, [])

    // console log what comes back from lookalike table
    useEffect(() => {
        console.log(lookAlikes)
    })

    // function handlePlusClick(event) {
    //     setPlusSign(event.target.value)
    //get current score
    //set current score as const
    //add 1 to current score
    //set state as new score
    // }

    return (
        <>
            {lookAlikes.length > 0 ? lookAlikes.map(lookalike =>
                <div className='container'>
                    <div className="row">
                        <div className="col-3">
                            <img src={lookalike.url1} />
                        </div>
                        <div className="col-3">
                            <img src={lookalike.url2} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 caption'>
                            {lookalike.caption}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3 votes'>
                            {/* <img src={Plus} onClick={handlePlusClick}/> */}
                        </div>
                        <div className='col-3 votes'>
                            {/* <img src={Minus} onClick={handleMinusClick}/> */}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 score'>
                            Score: {lookalike.score}
                        </div>
                    </div>
                </div>
            ) : ""}
        </>
    )
}