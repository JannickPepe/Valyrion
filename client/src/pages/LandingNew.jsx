import shapeone from "../assets/images/shape/shape-1.svg";
import shapetwo from "../assets/images/shape/shape-2.svg";
import shapethree from "../assets/images/shape/shape-3.svg";
import shapefour from "../assets/images/shape/shape-4.svg";
import shapeheader from "../assets/images/shape/header-image.svg";
import { Link } from "react-router-dom";
import { IoStatsChartSharp } from "react-icons/io5";
import { landing } from "../utils/data";
import React from "react";



const LandingNew = () => {

    return (
        <section>

            <div className="min-h-[600px] bg-gray relative z-10 overflow-hidden lg:flex items-center mb-2">
                <div className="hero_shape shape_4">
                    <img src={shapefour} alt="shape" />
                </div>
                <div className="hero_shape shape_6">
                    <img src={shapeone} alt="shape" />
                </div>
                <div className="hero_shape shape_7">
                    <img src={shapethree} alt="shape" />
                </div>
                <div className="hero_shape shape_8">
                    <img src={shapetwo} alt="shape" />
                </div>
                <div className="hero_shape shape_9">
                    <img src={shapefour} alt="shape" />
                </div>
                <div className="hero_shape shape_10">
                    <img src={shapethree} alt="shape" />
                </div>
                <div className="hero_shape shape_11">
                    <img src={shapeone} alt="shape" />
                </div>

                <div className="container">
            
                    <div className="row">
                        <div className="w-full lg:w-1/2 mt-4 lg:-mt-24">
                            <div className="header_hero_content">
                                {landing.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <h5 className="hero_title font-bold mb-1 text-xl lg:px-2 underline flex items-center"><IoStatsChartSharp size={24} className="mr-1"/><span className="relative before:absolute before:inset-0 before:animate-typewriter before:bg-[#38bec9]">{item.companytitle}</span></h5>
                                        <div className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                                            <span className="text-theme-color">
                                                {item.subone}{" "}
                                            </span> 
                                            {item.subtwo}{" "}
                                            <span className="text-theme-color font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent">
                                                <span className="inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.snug))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.snug))] overflow-hidden">
                                                    <ul className="animate-text-slide-5 text-3xl sm:text-4xl lg:text-5xl">
                                                        <li>Charts</li>
                                                        <li>Schemas</li>
                                                        <li>Tables</li>
                                                        <li>Indicators</li>
                                                        <li>Overview</li>
                                                        <li aria-hidden="true">Charts</li>
                                                    </ul>
                                                </span>
                                            </span>
                                        </div>
                                        <p className="mt-8 lg:mr-8 font-base lg:text-lg">
                                            {item.textone} <span className="font-bold underline">{item.texttwo}</span> {item.textthree}
                                        </p>
                                        <div className="hero_btn mt-10 flex gap-8">
                                            <Link to='/register' className="main-btn bg-[#0e7c86] text-white hover:text-black">Register</Link>
                                            <Link to='/login' className="main-btn bg-[#54d1db] text-black hover:text-white">Login / Demo</Link>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div> 
                        
                        </div>
                    </div>
                </div>
                <div className="header_shape hidden lg:block"></div>

                <div className="header_image flex items-center">
                    <div className="image 2xl:pl-25">
                        <img src={shapeheader} alt="Header Image" />
                    </div>
                </div> 
            </div>
        </section>
    );

};

export default LandingNew;
