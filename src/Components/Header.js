// this component manages the working of reset and info button

import React,{useState} from 'react'
import ResetPopup from './ResetPopup';
import Infopopup from './Infopopup';
import '../App.css'

export default function Header({fossils,setFossils,setStartpopup, setReset, reset, setClosefossils1, setClosefossils2, setClosefossils3, setClosefossils4, setClosefossils5}) {

let audio= new Audio("secondary_click.mp3")
const start = ()=>{
  audio.play()
}

console.log(reset)

// we are  creating a state to show the popups whenever needed or on the button click
const[header, setHeader] = useState(-1)

// we are using switch case to choose between reset and info buttons popups respectively
const Handleheader = (y) =>{
    switch (y) {
        case 5:
            return <ResetPopup fossils={fossils}
            setFossils={setFossils}
            setHeader={setHeader}
            header={header}
            setStartpopup={setStartpopup}
            setReset={setReset}
            setClosefossils1={setClosefossils1}
            setClosefossils2={setClosefossils2}
            setClosefossils3={setClosefossils3}
            setClosefossils4={setClosefossils4}
            setClosefossils5={setClosefossils5} />

        case 6:
            return <Infopopup fossils={fossils}
            setFossils={setFossils}
            setHeader={setHeader}
            header={header} />
    
        default:
            <></>
            break
    }



}

  return (
    <>
    <div className='reset'>
          <button id='Reset' type='button' disabled={reset===false} onClick={()=> { setHeader(5); start(); }} className='reset-button' title='Reset'>
            <span className='reset-image' ></span>
            <span className='reset-text' >Reset</span>
          </button>
          <button id='Info' type='button' onClick={()=> { setHeader(6); start();}} className='info-button' title='Info'>
            <span className='info-image'></span>
          </button>
    </div>
    <div>
    {/* whatever value switch case gets from button clicking reset or info button w=gets storesd in handleHeader and gets displayed respectively */}
     {Handleheader(header)}
    </div>
    </>
  )
}
