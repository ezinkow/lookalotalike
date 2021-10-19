import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function UploadForm() {
    const [caption, setCaption] = useState('')
    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('')
    const [score, setScore] = useState(0)
    
    // Set Caption
    function handleCaptionChange(event) {
        setCaption(event.target.value)
        console.log(event.target.value)
    }

    // Set URL1
    function handleUrl1Change(event) {
        setUrl1(event.target.value)
    }

    // Set URL2
    function handleUrl2Change(event) {
        setUrl2(event.target.value)
    }

    // Send caption and urls to database and reset fields
    function handleImageUpload(event) {
        event.preventDefault()
        axios.post('api/lookalike', {
            caption,
            url1,
            url2,
            score
        })
        setCaption("")
        setUrl1("")
        setUrl2("")
    }
    return (
        <>
            <div className="form">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Caption</Form.Label><br/>
                        <Form.Control type="Text" placeholder="Caption" value={caption} onChange={handleCaptionChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Paste URL of images below</Form.Label>
                        <Form.Label>Storing images in a database costs money, and this is a free site, so please paste the URL of your images below. If your images are on your local computer, use a free url host site like <a href='https://postimages.org/' target="_blank">PostImage</a> or <a href='https://imgur.com/upload' target="_blank">imgur</a>.</Form.Label>
                        <Form.Control type="Text" placeholder="Paste URL" value={url1} onChange={handleUrl1Change} />
                        <Form.Control type="Text" placeholder="Paste URL" value={url2} onChange={handleUrl2Change} />
                    </Form.Group>
                    <Button onClick={handleImageUpload}>Submit</Button>
                </Form>
            </div>
        </>
    )
}