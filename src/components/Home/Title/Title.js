import './Title.css'
import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {SubText} from './SubText/SubText.js'

export function Title() {
    let hi = useRef(null);
    let imCov = useRef(null); 
    let im = useRef(null);

    useEffect(() => {
        gsap.fromTo(hi, {opacity: 0, x: -70}, {opacity: 1, x: 0, duration: 1.25});
        let ImTl = gsap.timeline(); 
        ImTl.fromTo(imCov, {scaleX: 0}, {transformOrigin: "100% 100%", scaleX: 1}); 
        ImTl.fromTo(im, {opacity: 0}, {opacity: 1, duration: 0.1}); 
        ImTl.to(imCov, {transformOrigin: "0% 0%", scaleX: 0});  
    }, []); 

    return (
        <div className="container">
            <div className="title">
                <h1 className="words" ref={el => {hi = el}}>Hi,</h1>
                <div id="ImCover" ref={el => {imCov = el}}></div>
                <h1 className="words" ref={el => {im = el}}>I'm</h1>
                <h1 className="words">Atharv</h1>
            </div>
            <SubText/>
        </div> 
    ); 
}