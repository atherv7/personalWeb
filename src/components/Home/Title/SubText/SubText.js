import './SubText.css'
import React, {useRef, useEffect, useState} from 'react'
import {gsap} from 'gsap'
import { TextPlugin} from 'gsap/all';
import Scrambler from 'scrambling-text'

export function SubText() {
    gsap.registerPlugin(TextPlugin);
    let [tx, sTx] = useState('numbers'); 
    let scram = useRef(new Scrambler()); 
    let i = useRef(null); 
    let like = useRef(null);
    let cur = useRef(null);
    let cod = useRef(null); 
    let and = useRef(null);
    let num = useRef(null);
    let arr = ['c', 'o', 'd', 'i', 'n', 'g']; 
    let str;
    useEffect(() => {
        str = "";
        let time = gsap.timeline(); 
        time.fromTo(i, {opacity: 0, y: 20}, {opacity: 1, y: 0}); 
        time.fromTo(like, {opacity: 0, y: 20}, {opacity: 1, y: 0}); 
        gsap.to(cur, {opacity: 0, yoyo: true, repeat: -1, duration: 1.5});
        for(let ind = 0; ind < arr.length; ind++) {
            str += arr[ind]; 
            time.to(cod, {text: str, duration: .15}); 
        }
        time.fromTo(and, {opacity: 0, y: 20}, {opacity: 1, y: 0}); 
        time.fromTo(num, {opacity: 0, y: 20}, {opacity: 1, y: 0}); 
        setTimeout(() => {scram.current.scramble(tx, sTx, {characters: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']})},2400);
    }, []); 

    return (
        <div className="sub">
            <h2 className="text" ref={el => {i = el}}>I</h2>
            <h2 className="text" ref={el => {like = el}}>like</h2>
            <h2 className="text"><span className="coding" ref={el => {cod = el}}></span><span ref={el => {cur = el}} className="cursor">|</span></h2>
            <h2 className="text" ref={el => {and = el}}>and</h2>
            <h2 className="text" ref={el => {num = el}}><span>{tx}</span></h2> 
        </div>
    ); 
}