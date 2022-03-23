// this component manage the popup which we get at clicking info button

import React from 'react'
import '../App.css'

export default function Infopopup({fossils,setFossils,setHeader}) {
    console.log(fossils)
    console.log(setHeader)
    const HandleInfo =()=>{
        setFossils(fossils)
        setHeader(-1)
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
                <p>Each dot on the map indicates a dig location and gives specifics about what was found. Select the dots to know more.</p>
            </div>
            <div className='info-popup-close'>
                <button className='info-popup-close-button' type='button' title='close' onClick={()=> { HandleInfo(); start();}}>
                    <span className='text'>Close</span>
                    <span className='icon'></span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
