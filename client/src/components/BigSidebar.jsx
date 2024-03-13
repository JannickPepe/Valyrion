
import { useState } from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import DashboardPOT from './DashboardPOT';



const BigSidebar = () => {
  
  const { showSidebar } = useDashboardContext();
  const [isVisible, setIsVisible] = useState(true);

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
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? `Close Contact` : 'Show Contact'}
              </button>
              {isVisible && (
                <div>
                  <DashboardPOT />
                </div>
              )}
          </div>
        </div>
      </div>
    </Wrapper>
  );

};


export default BigSidebar;
