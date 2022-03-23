// this is the component which will get displayed at the beginning of the webpage or when resetting it

import React from 'react'
import '../App.css'

export default function StartPopup({setStartpopup}) {
    const HandleStartpopup =()=>{
        setStartpopup(false)
    }

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

  return (
    <>
    <div className='popup-background'>

    </div>

    <div className='info-container'>
    <div>
        <span></span>
    </div>
    <div>
        <div>
            <p>It is 3030, and a group of scientists are digging up different areas in a state park to try and see what clues they can find about the past.</p>
        </div>
        <div className='info-popup-close'>
            <button className='start-popup-button ' type='button' title='close' onClick={()=> { HandleStartpopup(); start();}}>
                <span className='text'>Start</span>
                <span className='icon'></span>
            </button>
        </div>
    </div>
    </div>
    </>
  )
}
