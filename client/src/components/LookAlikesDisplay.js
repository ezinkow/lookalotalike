import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Plus from '../images/Plus.png'
import Minus from '../images/Minus.png'

export default function Uploads() {
    const [lookAlikes, setLookAlikes] = useState([])
    const [score, setScore] = useState(4)
    // const [score, setScore] = useState('')

    // Fetch all entries in lookalike table
    useEffect(() => {
        async function fetchLookALikes() {
            try {
                const lookAlikesResponse = await axios('api/lookalike')
                setLookAlikes(lookAlikesResponse.data)
                console.log(lookAlikesResponse.data)
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

    async function handlePlusClick(id) {
        let thisObj = lookAlikes.find(thisId => thisId.id === id)
        console.log('this obj', thisObj)
        //set current score as const
        let currentScore = Number(thisObj.score)
        //add 1 to current score
        currentScore++
        setScore(currentScore)
        //update db
        await axios.put(`api/lookalike/${id}`, {
            score
        })
    }

    return (
        <>
            {lookAlikes.length > 0 ? lookAlikes.map(lookalike =>
                <div className='container'>
                    <div className="row">
                        <div className="col-2">
                            <img src={lookalike.url1} />
                        </div>
                        <div className="col-2">
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
                            <img src={Plus} className='sign' onClick={() => { handlePlusClick(lookalike.id) }} />
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
            ) : ""
            }
        </>
    )
}