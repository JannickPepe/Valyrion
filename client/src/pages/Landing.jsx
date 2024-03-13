
import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { logoslider } from '../utils/data';
import LandingNew from './LandingNew';


const Landing = () => {

    return (

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

    );

};

export default Landing;