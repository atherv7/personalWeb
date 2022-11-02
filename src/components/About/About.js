import './About.css'
import {InfoCard} from './InfoCard/InfoCard.js'
import {Resume} from './Resume/Resume.js'
import React from 'react'


export function About() {
    return (
        <div className="about">
            <h1 id="tit">About</h1>
            <InfoCard/>
            <Resume/>
        </div>
    ); 
}