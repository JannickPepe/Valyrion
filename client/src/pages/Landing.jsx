
import React, { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { logoslider } from '../utils/data';
import LandingNew from './LandingNew';


// API LINK
const url = "https://api.quotable.io/random";

const Landing = () => {

    // API state const
    const [quotes, setQuotes] = useState([]);
    //Fetch Quotes from API
    const getQuote = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setQuotes(data));
    };
    useEffect(() => {
        getQuote();
    }, []);
    const getNewQuote = () => {
        getQuote();
    };
    
    const { content, author } = quotes;

    return (
        <>
            <Wrapper>
                <nav>
                    <Logo />
                </nav>
                <LandingNew /> 

                {logoslider.map((logoslider, index) => (
                    <React.Fragment key={index}>
                        <h3 className='flex justify-center text-center mt-16 mb-4 px-2 lg:px-0'>{logoslider.title}</h3>
                        <div className="flex overflow-hidden space-x-16 group mb-4">

                            <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                                {logoslider.logos.map((logo, index) => (
                                    <React.Fragment key={index}>
                                        <img loading="lazy" src={logo} className="max-w-none" alt="Image 1" />
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                                {logoslider.logos.map((logo, index) => (
                                    <React.Fragment key={index}>
                                        <img loading="lazy" src={logo} className="max-w-none" alt="Image slider" />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </Wrapper>
            <div className="max-w-[600px] px-2 mt-10 mb-6 mx-auto">
                <div className="text-center">
                    <p className="text-sm px-2 text-gray-600 font-extralight">(Api Quotes fetching example)</p>
                    <h3 className="px-2 font-normal mb-2">Different Testing Reviews</h3>
                </div>
                <div className="bg-[#38bec9] py-1 px-2 mt-2 rounded-lg ">
                    <div className="text my-2 px-2 text-center">
                        <p>{content}</p>
                    </div>
                    <div className="author text-center text-white">
                        <h5>{author}</h5>
                    </div>
                    <div className="button-container mx-2">
                        <button className="underline font-semibold pb-1" onClick={getNewQuote}>New Quote</button>
                    </div>
                </div>
            </div>

        </>
        
    );

};

export default Landing;