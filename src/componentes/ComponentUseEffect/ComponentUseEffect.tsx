import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false);

    useEffect(()=>{
        console.log('estoy'); 'estoy'
    },[]);
    
    useEffect(()=>{
        console.log(state); false
    },[state]);

    return (
    <div>
        <p>{state ? "Es true" :  "Es false"}</p>
        <button onClick={()=>{
            setState(!state)
        }}>
            cambiar state
        </button>
    </div>
  )
}
