// this component is responsible for displaying the 1st Fossil Info

import React from 'react'
import '../App.css'

export default function Fossil1({fossils, setFossils,closefossils1,setClosefossils1}) {

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

    const closeFossilInfo=()=>{
        setFossils(-1)
        setClosefossils1(false)
    }

    
  console.log(closefossils1)

  return (
    closefossils1 ? <div className='fossils-info'>
    <div>
        <div>
            <div role='img' className='fossils-info-section'>
                <div className='fossils-image tarantula-image'></div>
                <p className='tarantula-content1'>
                    Fossil Identified: <strong>Tarantula</strong>
                </p>
                <p className='tarantula-content'>
                    Depth of Fossil: <strong>35 meters</strong>
                </p>
                <p className='tarantula-content-heading'>
                    Known Tarantula facts:
                </p>
                <ul className='tarantula-types'>
                    <li>
                        <span role='img' >
                            <span ></span>
                        </span>
                        <p>Spider</p>
                    </li>
                    <li>
                        <span role='img' >
                            <span ></span>
                        </span>
                        <p>Hunts at night and eats small insects</p>
                    </li>
                    <li>
                        <span role='img' >
                            <span ></span>
                        </span>
                        <p>Hunts at night and eats small insects</p>
                    </li>
                </ul>
            </div>
            <button className='close-button' type='button' title='Close' onClick={()=>{closeFossilInfo(); start();}}>
                <span className='text'>Close</span>
                <span className='icon'></span>
            </button>
        </div>
    </div>
</div>: null
     
  )
}
