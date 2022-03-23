import React, {useState, useEffect} from 'react';
import './App.css';
import FossilsInfo from './Components/FossilsInfo';
import Header from './Components/Header';
import StartPopup from './Components/StartPopup';
import { HashLoader } from 'react-spinners';

function App() {

  //we are creating this state for rendering the loader
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    }, 4000)

  }, [])

  // we are creating a audio function which will be used to render sound at buttons click
  let audio= new Audio("secondary_click.mp3")
  const start = ()=>{
    audio.play()
  }

  // we are creating a state to display the fossils info section whenever reuired or on button click
  const [fossils, setFossils] = useState(-1)
  console.log(fossils)

  // we are creating a state to cotrol the display of the strating guide popup
  const [startpopup, setStartpopup]= useState(true)
  const [reset, setReset] = useState(false)
  
  // using this we are controling which fossil info will be showed on the right content
  const handleFossilCLick = (value) =>{
    setFossils(value)
  }

  // we are creating a state to control the rendering of fossils info section on fossil button on and off
  const [closefossils1, setClosefossils1] =useState(false)
  const [closefossils2, setClosefossils2] =useState(false)
  const [closefossils3, setClosefossils3] =useState(false)
  const [closefossils4, setClosefossils4] =useState(false)
  const [closefossils5, setClosefossils5] =useState(false)

  const FossilClick1=()=>{
    setClosefossils1(!closefossils1)
    setClosefossils2(false)
    setClosefossils3(false)
    setClosefossils4(false)
    setClosefossils5(false)
  }

  const FossilClick2=()=>{
    setClosefossils2(!closefossils2)
    setClosefossils1(false)
    setClosefossils3(false)
    setClosefossils4(false)
    setClosefossils5(false)
  }

  const FossilClick3=()=>{
    setClosefossils3(!closefossils3)
    setClosefossils2(false)
    setClosefossils1(false)
    setClosefossils4(false)
    setClosefossils5(false)
  }

  const FossilClick4=()=>{
    setClosefossils4(!closefossils4)
    setClosefossils1(false)
    setClosefossils3(false)
    setClosefossils2(false)
    setClosefossils5(false)
  }

  const FossilClick5=()=>{
    setClosefossils5(!closefossils5)
    setClosefossils2(false)
    setClosefossils3(false)
    setClosefossils4(false)
    setClosefossils1(false)
  }
  

  return (
  <>
    <div className="container">
      {
        loader ?(<div className='loader'>
        <HashLoader size={200} color={'#ba5b08'} loader={loader} /> </div>
        )
        :

      (<div className='inner-container'>
        {/* Using header we will access Resetpopup and infopopup buttons and sections, also we will pass the state to them as they are child components */}
        <Header setFossils={setFossils} fossils={fossils} setStartpopup={setStartpopup} setReset={setReset} reset={reset} setClosefossils1={setClosefossils1} setClosefossils2={setClosefossils2} setClosefossils3={setClosefossils3} setClosefossils4={setClosefossils4} setClosefossils5={setClosefossils5} />
        {/*  Using Startpopup we are rendering the starting popup which will appear on our homepage  */}
        {startpopup ? <StartPopup setStartpopup={setStartpopup} /> : null}
        <div className='content'>
          <div className='content-section'>
              {/* From here our main left content layout starts */}
              <div className='left-content'>
                <div className='main-image'>
                  {/* All the fossils buttons are accessed in this container */}
                  <div className='tarantula-fossil'>
                    <button id='tarantula' type='button' className='tarantula-fossil-button' title='Dig site in the small pond area near the beach' aria-pressed='false' onClick={() => { handleFossilCLick(0); start(); FossilClick1(); setReset(true);}}></button>
                  </div>
                  <div className='rocklayers-fossil'>
                    <button id='rocklayers' type='button' className='rocklayers-fossils-button' title='Dig site in grasslands' aria-pressed='false' onClick={()=> { handleFossilCLick(1); start(); FossilClick2(); setReset(true); }}></button>
                  </div>
                  <div className='stingray-fossil'>
                    <button id='stingray' type='button' className='stingray-fossil-button' title='Dig site 3 is on the beach near the river' aria-pressed='false' onClick={()=>{ handleFossilCLick(2); start(); FossilClick3(); setReset(true); }}></button>
                  </div>
                  <div className='coyote-fossil'>
                    <button id='coyote' type='button' className='coyote-fossil-button' title='Dig site on the top of rocky mountain' aria-pressed='false' onClick={()=> { handleFossilCLick(3); start(); FossilClick4(); setReset(true); }}></button>
                  </div>
                  <div className='pottery-fossil'>
                    <button id='pottery' type='button' className='pottery-fossil-button' title='Dig site at the beach near grasslands' aria-pressed='false' onClick={()=> { handleFossilCLick(4); start(); FossilClick5(); setReset(true); }}></button>
                  </div>
                </div>
              </div>
              <div className='right-content'>
                {/* in this container our main right content area is accessed */}
                <div className='top-right-content'>
                  <div className='top-right-content-text'>
                    <h1>
                      Each dot on the map indicates a dig location. Select the dots to discover specifics about what was found.
                    </h1>
                  </div>
                  {/* Now we will call child component FossilInfo in which each fossils details can be acccesed, and also passing the state as it is */}
                  <FossilsInfo fossils={fossils} setFossils={setFossils} closefossils1={closefossils1} closefossils2={closefossils2} closefossils3={closefossils3} closefossils4={closefossils4} closefossils5={closefossils5} setClosefossils1={setClosefossils1} setClosefossils2={setClosefossils2} setClosefossils3={setClosefossils3} setClosefossils4={setClosefossils4} setClosefossils5={setClosefossils5} />
                </div>
              </div>
          </div>
        </div>
      </div>)}
    </div>
  </>
  );
}

export default App;
