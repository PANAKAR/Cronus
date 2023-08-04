import React from 'react'
import './ChooseUs.css'
import Footer from './footer'
import { asset22, asset6, asset5, asset10 } from '../assets'

const ChooseUs = () => {
  return (
    <div className="y-us-section">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                    <div className="y-us-head">
                        <div className="y-us-title text-white bg-black">
                            <h2 >Why us?</h2>
                            <span className="y-us-title-border"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="y-us-content">
                        <div className="service-3">
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <span className="glyphicon glyphicon-cog icon bg-primary"></span>
                                    </div>
                                    <div className="y-us-content">
                                        <p>World's finest IGI / GIA / GRS certified Natural Diamonds, CVD Diamonds, HPHT Diamonds. <br />
                                        ◇ Finest Quality Moissanite Diamonds. <br />
                                        ◇ World-Class Designer Hallmarked Jewelry in Gold, Silver, Platinum, Diamonds, Precious Stones & Semi-Precious Stones.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <span className="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div class="y-us-content">
                                        <p> We also manufacture customized jewelry as per our customers' desired designs & requirements. <br />
                                            ◇ All types of Precious & Semi-Precious Stones, Fresh Water Pearls, Salt Water Pearls. <br />
                                            ◇ All types of Rough Gemstones, Tumbled Gemstones, Cabochons, Geodes, Clusters.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <span className="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div className="y-us-content">
                                        <p>
                                            ◇ All types of Healing Crystals, Orgonite Healing Jewelry & Orgonite Products. <br />
                                            ◇ All types of customized Semi-Precious Stone Jewelry. <br />
                                            ◇ Decorative Jewelry Boxes & Gifting Boxes made in Brass, Copper, German Silver, Silver &  Wood with Meenakari Work Carvings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="why-choose-banner">
                        <img src={asset10} alt="" style={{
                            borderRadius: "10%",
                        }} />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="y-us-contentbox">
                        <div className="service-3">
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                    <div className="y-us-content">
                                        <p>
                                        Our state-of-the-art manufacturing facilities in Mumbai, Jaipur & Khambhat in India are equipped with extremely skilled artisans, to manufacture jewelry products on a very large scale, inorder to meet our global bulk delivery requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <span className="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div class="y-us-content">
                                        <p>We are working 24/7 to deliver products of best quality, at best prices, and within shortest delivery timelines to our global customers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-box">
                                <div className="clearfix">
                                    <div className="iconset">
                                        <span className="glyphicon glyphicon-cog icon"></span>
                                    </div>
                                    <div className="y-us-content">
                                        <p>
                                        Cronus Gems is a leading manufacturer, wholesaler, retailer, and world-wide of World's finest IGI / GIA / GRS certified Natural Diamonds, CVD Diamonds, HPHT Diamonds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ChooseUs
