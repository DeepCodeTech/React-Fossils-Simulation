// this component is responsible for displaying the 2nd Fossil Info

import React from 'react'
import '../App.css'

export default function Fossil2({fossils, setFossils, closefossils2, setClosefossils2}) {

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

    const closeFossilInfo=()=>{
        setFossils(-1)
        setClosefossils2(false)
    }

    console.log(closefossils2)

  return (
    closefossils2 
    ? <div className='fossils-info'>
      <div>
        <div>
            <div role='img' className='fossils-info-section'>
                <div className='fossils-image rocklayers-image'>
                    <div role='img' className='rocklayers-image-content'>
                        <p>Ground</p>
                        <p>10 meters</p>
                        <p>50 meters</p>
                        <p>80 meters</p>
                        <p>100 meters</p>
                    </div>
                </div>
                <p className='tarantula-content1'>
                    Core Sample: <strong>Different Rock Layers</strong>
                </p>
                <p className='tarantula-content'>
                    Depth of Core Sample: <strong>100 meters</strong>
                </p>
                <p className='rocklayers-content-heading'>
                    Known core layer facts:
                </p>
                <ul className='rocklayers-types'>
                    <li >
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Made of Volcanic Rock</p>
                    </li>
                    <li >
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Contains large amount of algae and plant life indicative of the ocean floor</p>
                    </li>
                    <li >
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Contains very few plant and small animal fossils but does contain many different types of rocks</p>
                    </li>
                    <li >
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Contains large mammal fossils and abundant plant life</p>
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