import React from 'react'

import { useState } from 'react';

const SecondPlayer = () => {


    const [users, setform] = useState('')



    const changesecondform = (e) => {
        setform((prev) => ({
            ...prev,
            users: e.target.value
        }))
    }




    const handelplayer2Submit = (e) => {
        e.preventDefault()
        console.log(users)
    }


    return (
        <div className="App">
            <div className='player2'>
                <form onSubmit={handelplayer2Submit}>
                    <input type='text' placeholder='player2' onChange={changesecondform} />
                    <button type='submit'>Start the Match</button>
                </form >
            </div>
        </div>
    )
}

export default SecondPlayer
