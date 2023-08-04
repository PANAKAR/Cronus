import React from 'react';
import { Tilt } from 'react-tilt';
import {easeIn, motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import './about.css'
import { asset13, asset3, asset6} from '../assets';
import { asset23 } from '../assets';
import Footer from './footer';

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full min-h-[240px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div 
                        options = {{
                            max:45,
                            scale: 1,
                            speed: 450
                        }}
                        className="bg-tertiary rounded-[20px] py-6 px-12 min-h-[290px] flex justify-evenly items-center flex-col"
                    >
                        <img src={icon} alt={title}
                        className='w-16 h-16 object-contain' />
                        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                    </div>
            </motion.div>

        </Tilt>
    )
}

function About() {
  return (
    <>
            <p className={styles.heroSubText}style={{
                fontFamily: "monospace"
            }}>Introduction</p>
            <h1 className={styles.heroHeadText} style={{fontFamily: "monospace"}}>About Us.</h1>

           <div class="media">
                <div class="asset"><img src={asset13} alt="hot air balloons" style={{
                    borderRadius: "10%"
                }} /></div>
                <div class="content" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p style={{color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20%"}}>Cronus Gems has it's Head Office in Mumbai, India, and has state-of-the-art manufacturing units in Mumbai, Jaipur & Khambhat, India. </p>
                </div>
            </div>

        
            <div class="media1">
                <div class="asset" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p style={{color: "white"}}>Cronus Gems is a manufacturer, wholesaler, retailer and world-wide exporter of all types of Gold, Silver & Diamond Jewelry, Loose Diamonds, Precious & Semi-Precious Stones, Rough & Tumbled Semi-Precious Stones, Healing & Reiki Crystals & Orgonite Products, Decorative Meenakari Work Wooden Jewelry Boxes & Gift Boxes.</p>
                </div>
                <div class="content" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img src={asset23}  alt=""  style={{
                        borderRadius: "10%"
                    }}/>
                </div>
            </div>
       
            <div class="media2">
                <div class="asset" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                   <img src={asset3} alt="" style={{
                    borderRadius: "10%"
                   }} />
                </div>
                <div class="content" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p style={{color: "white"}}>
                    Our diamonds and gemstones are sourced from across the globe, and are IGI / GIA / GRS certified. 

                    Our business is fully customer-centric, and earning our customers' satisfaction by delivering customized world-class products, is our only goal.
                    </p>                    
                </div>
            </div>
        
            <div class="media3">
                <div class="asset" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                   
                    <p style={{color: "white"}}>Promoted by <span id='parul' style={{
                        color: "red"
                    }}> Parul Mehta </span>, with head office in Mumbai, India, and state-of-the-art manufacturing facilities in Jaipur & Khambhat, India, Cronus Gems is a leading manufacturer, wholesaler, retailer, and global exporter of diamonds, precious gemstones, semi-precious stones, customized jewelry, reiki & healing crystals, and orgonite products. 
                    <br />
                    <br />
                    <p style={{color: "white"}}> <span style={{
                        color: "red"
                    }}>Parul Mehta </span>is a CFA by education and NASD Series 7 & Series 63 licenses holder from the USA.

                    She has a global and diverse business experience in investment banking, diamonds, gemstones, customized jewelry design & manufacturing, reiki & healing crystals, and orgonite products.

                    Parul is also passionately and actively engaged in various social and philanthropic activities.</p>
                    </p>
                </div>
                <div class="content" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img src={asset6} alt=""  style={{
                        borderRadius: "10%"
                    }}/>
                </div>
            </div>
        {/* <div className="mt-20 flex flex-wrap gap-10">
            {services.map((services, index) => (
                <ServiceCard key={services.title} index={index}
                {...services}/>
            ))}
        </div> */}
        <Footer />

    </>
  )
}

export default SectionWrapper(About, "about")