import './Modal.css'
import React, {useRef, useEffect} from 'react' 
import {Document, Page} from 'react-pdf'
import pdf from "./test.pdf"
import {gsap} from 'gsap'
export function Modal({setModVis}) {
    let back = useRef(null); 
    let anim = null;
    useEffect(()=>{
        anim = gsap.fromTo(back, {opacity: 0, y: -45}, {opacity: 1, y:0}); 
    }, []);


    return (
        <div className='backModal' ref={el => {back = el}}>
            <div className='contModal'>
                <button onClick={() => {setModVis(false)}}>X</button>
                <Document file={pdf}>
                <Page/> 
                </Document>
            </div>
        </div>
        
    ); 
}