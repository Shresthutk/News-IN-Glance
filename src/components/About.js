import React from 'react'
import Header from './Header'
import Navbar from './Navbar'




export default function About() {
    
        return (
            <div className="custom-height ">
                <Navbar/>
                <Header heading="About"/>
                <div className="container">
                <p className="light-font title is-5 is-flex is-align-items-center custom-height-2">This is a react js project which uses function based component.<br></br>
                gnews.io is used with country filter as India <br></br>to provid headlines that keeps you updated at a glance!
                </p>
                </div>
            </div>
        )
    }

