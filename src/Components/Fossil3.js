// this component is responsible for displaying the 3rd Fossil Info

import React from 'react'
import '../App.css'

export default function Fossil3({fossils, setFossils, closefossils3, setClosefossils3}) {

    let audio= new Audio("secondary_click.mp3")
    const start = ()=>{
      audio.play()
    }

    const closeFossilInfo=()=>{
        setFossils(-1)
        setClosefossils3(false)
      }
    
    console.log(closefossils3)
    

  return (
    closefossils3 ? 
    <div className='fossils-info'>
      <div>
        <div>
            <div role='img' className='fossils-info-section'>
                <div className='stingray-image'></div>
                <p className='stingray-content1'>
                    Fossil Identified: <strong>Stingray</strong>
                </p>
                <p className='stingray-content'>
                    Depth of Fossil: <strong>64 meters</strong>
                </p>
                <p className='stingray-content-heading'>
                    Known Stingray facts:
                </p>
                <ul className='stingray-types'>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Saltwater Fish</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Eats small animals foound on the seafloor</p>
                    </li>
                    <li>
                        <span role='img'  >
                            <span  ></span>
                        </span>
                        <p>Lives in group</p>
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