import React from 'react'

import { useState } from 'react';

const FirstPlayer = ({ settoggle }) => {


    const [users, setform] = useState('')


    const changeform = (e) => {
        setform((prev) => ({
            ...prev,
            users: e.target.value
        }))
    }


    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(users)
        setform('')
        settoggle((prev) => prev != prev)
    }

    return (
        <div className="App">
            <div className='player1'>
                <form onSubmit={handelSubmit}>
                    <input type='text' placeholder='player1' onChange={changeform} />
                    <button type='submit'>submit</button>
                </form >
            </div>
        </div>
    )
}

export default FirstPlayer
