import shapeone from "../assets/images/shape/shape-1.svg";
import shapetwo from "../assets/images/shape/shape-2.svg";
import shapethree from "../assets/images/shape/shape-3.svg";
import shapefour from "../assets/images/shape/shape-4.svg";
import shapeheader from "../assets/images/shape/header-image.svg";
import { Link } from "react-router-dom";
import { IoStatsChartSharp } from "react-icons/io5";


const LandingNew = () => {

    return (
        <section>
            <div className="min-h-[600px] bg-gray relative z-10 overflow-hidden lg:flex items-center mb-2">
                <div className="hero_shape shape_1">
                    <img src={shapeone} alt="shape" />
                </div>
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
                                <h5 className="hero_title font-bold text-xl px-2 underline flex items-center"><IoStatsChartSharp size={24} className="mr-1"/>Valyrion</h5>
                                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                                <span className="text-theme-color">Creative</span> Multipurpose Statictics <span className="text-theme-color">
                                    Templates</span>
                                </h2>
                                <p className="mt-8 lg:mr-8 ">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                </p>
                                <div className="hero_btn mt-10 flex gap-8">
                                    <Link to='/register' className="main-btn hover:text-black">Register</Link>
                                    <Link to='/login' className="main-btn hover:text-black">Login / Demo</Link>
                                </div>
                            
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
