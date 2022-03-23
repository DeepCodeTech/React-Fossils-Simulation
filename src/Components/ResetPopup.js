// this component manage the popup which we get at clicking reset button

import React from 'react'
import '../App.css'

export default function ResetPopup({fossils,setFossils,setHeader,header,setStartpopup,setReset, setClosefossils1, setClosefossils2, setClosefossils3, setClosefossils4, setClosefossils5}) {

const HandleResetYes=()=>{
    setFossils(-1)
    setHeader(-1)
    setStartpopup(true)
    setReset(false)
    setClosefossils1(false);
    setClosefossils2(false);
    setClosefossils3(false);
    setClosefossils4(false);
    setClosefossils5(false);
}

const HandleResetNo=()=>{
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
            <p>Are you sure you want to reset</p>
        </div>
        <div className='reset-popup'>
            <button className='reset-button-no' type='button' title='close' onClick={()=> { HandleResetNo(); start();}}>
                <span className='text'>No</span>
                <span className='icon'></span>
            </button>
            <button className='reset-button-yes' type='button' title='close' onClick={()=> { HandleResetYes(); start();}}>
                <span className='text'>Yes</span>
                <span className='icon'></span>
            </button>
        </div>
     </div>
    </div>
    </>
  )
}
