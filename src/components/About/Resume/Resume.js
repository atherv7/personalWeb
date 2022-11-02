import './Resume.css'
import lottie from 'lottie-web'
import React, {useState, useRef, useEffect} from 'react'
import {Modal} from './Modal/Modal.js'
import animData from './lightning.json'
export function Resume() {
    let anim = useRef(null); 
    let [modalVis, setModVis] = useState(false); 
    useEffect(()=>{
        const inst = lottie.loadAnimation({
            container: anim.current, 
            renderer: 'svg',
            loop: true, 
            autoplay: true, 
            animationData: animData, 
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice', 
                className: 'lightning',
                id: 'light'
            }
        });

        return () => inst.destroy(); 
    }, []); 

    return (
        <div className='butt'>
            <div className='anim' ref={anim}></div>
            <button onClick={()=>{setModVis(true)}}>Resume</button>
            {modalVis && <Modal setModVis={setModVis}/>}
        </div>
    );
}