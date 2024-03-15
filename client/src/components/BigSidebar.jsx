
import { useState } from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import DashboardPOT from './DashboardPOT';
import NoPOT from './NoPOT';
import { TbHandClick } from "react-icons/tb";



const BigSidebar = () => {
  
  const { showSidebar } = useDashboardContext();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
          <div className='text-center mt-8' >
              <div className='flex items-center justify-start ml-10 hover:text-[#2cb1bc]'>
                <TbHandClick className='mr-3' size={24} />
                <button onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? `Close Contact` : 'Show Contact'}
                </button>
              </div>
              
            {isVisible ? <DashboardPOT /> : <NoPOT />}
              
          </div>
        </div>
      </div>
    </Wrapper>
  );

};


export default BigSidebar;
