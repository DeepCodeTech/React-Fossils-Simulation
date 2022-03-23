// this component manages which fossil info is going to show on their respective button clicks

import React from 'react';
import Fossil1 from './Fossil1';
import Fossil2 from './Fossil2';
import Fossil3 from './Fossil3';
import Fossil4 from './Fossil4';
import Fossil5 from './Fossil5';

export default function FossilsInfo({fossils, setFossils, closefossils1, closefossils2,closefossils3,closefossils4,closefossils5,setClosefossils1, setClosefossils2, setClosefossils3, setClosefossils4, setClosefossils5}) {

  // we have used switch case here to find which fossil button is being pressed and then display it accordingly

    const fossilsInfo =(x) =>{
        switch (x) {
          case 0:
            return <Fossil1 fossils={fossils} setFossils={setFossils} closefossils1={closefossils1} setClosefossils1={setClosefossils1} />;
    
          case 1:
            return <Fossil2 fossils={fossils} setFossils={setFossils} closefossils2={closefossils2} setClosefossils2={setClosefossils2} />;
    
          case 2:
            return <Fossil3 fossils={fossils} setFossils={setFossils} closefossils3={closefossils3} setClosefossils3={setClosefossils3} />;
    
          case 3:
            return <Fossil4 fossils={fossils} setFossils={setFossils} closefossils4={closefossils4} setClosefossils4={setClosefossils4} />;
    
          case 4:
            return <Fossil5 fossils={fossils} setFossils={setFossils} closefossils5={closefossils5} setClosefossils5={setClosefossils5} />;
        
          default :
          return <></>
        }
    }

  return (
    fossilsInfo(fossils)
  )
}
