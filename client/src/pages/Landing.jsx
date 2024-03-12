
import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { companyLogos } from '../utils/data';
import LandingNew from './LandingNew';


const Landing = () => {

    return (

        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <LandingNew /> 

            <h3 className='flex justify-center mt-16 mb-4'>Companies Who Have Joined the Cause</h3>
            <div className="flex overflow-hidden space-x-16 group mb-4">
                <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                    {companyLogos.map((icon, index) => (
                        <React.Fragment key={index}>
                            <img loading="lazy" src={icon} className="max-w-none" alt="Image 1" />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    {companyLogos.map((icon, index) => (
                        <React.Fragment key={index}>
                            <img loading="lazy" src={icon} className="max-w-none" alt="Image slider" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </Wrapper>

    );

};

export default Landing;