import React from 'react'
import {m, motion} from 'framer-motion'
import {styles} from '../styles'
import { hero } from '../assets'
import './hero.css'
import { asset15 } from '../assets'
import Navbar from './Navbar'
import About from './About'
import Footer from './footer'

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="d-sm-flex align-items-center justify-content-between w-100" style={{ height: "100vh" }}>
        <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
          <h1 className="col-md-2 display-4 font-weight-bold" id='heading' style={{color: "white"}}>Timeless Trends, Captured in Gems: Welcome to<span style={{ color: "#9B5DE5" }}>Cronus.</span></h1>
          
        </div>
        <div className="col-md-8 h-100 clipped" style={{ minHeight: "350px", backgroundPosition: "center", backgroundSize: "cover" }}>

        </div>
      </div>
      <div id='director' className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" style={{background: "none"}}>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-center" style={{background: "none"}}>
            <motion.dev 
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
      <About />
    </section>
  )
}

export default Hero
