// this component is responsible for displaying the 4th Fossil Info

import React from 'react'
import '../App.css'

export default function Fossil4({fossils, setFossils, closefossils4, setClosefossils4}) {

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

    const closeFossilInfo=()=>{
        setFossils(-1)
        setClosefossils4(false)
      }

  return (
    closefossils4 ? <div className='fossils-info'>
    <div>
        <div>
            <div role='img' className='fossils-info-section'>
                <div className='coyote-image'></div>
                <p className='coyote-content1'>
                    Fossil Identified: <strong>Coyote Tracks</strong>
                </p>
                <p className='coyote-content'>
                    Depth of Fossil: <strong>23 meters</strong>
                </p>
                <p className='coyote-content-heading'>
                    Known Coyote facts:
                </p>
                <ul className='coyote-types'>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Hunts alone or in pair</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Omnivore</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Habitat varies from wooded areas to prairies to deserts</p>
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