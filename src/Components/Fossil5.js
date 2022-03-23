// this component is responsible for displaying the 5th Fossil Info

import React from 'react'
import '../App.css'

export default function Fossil5({fossils, setFossils, closefossils5, setClosefossils5}) {

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

    const closeFossilInfo=()=>{
        setFossils(-1)
        setClosefossils5(false)
      }

  return (
    closefossils5 ? <div className='fossils-info'>
    <div>
        <div>
            <div role='img' className='fossils-info-section'>
                <div className='pottery-image'></div>
                <p className='pottery-content1'>
                    Fossil Identified: <strong>Pottery</strong>
                </p>
                <p className='pottery-content'>
                    Depth of Fossil: <strong>47 meters</strong>
                </p>
                <p className='pottery-content-heading'>
                    Known pottery facts:
                </p>
                <ul className='pottery-types'>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Made by baking wet dirt in the sun in the molds</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Human made</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Used to carry dry good or liquids</p>
                    </li>
                </ul>
            </div>
            <button className='close-button' type='button' title='Close' onClick={()=>{closeFossilInfo(); start();}}>
                <span className='text'>Close</span>
                <span className='icon'></span>
            </button>
        </div>
    </div>
</div> : null
  )
}