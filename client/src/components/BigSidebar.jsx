
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import DashboardPOT from './DashboardPOT';


const BigSidebar = () => {
  
  const { showSidebar } = useDashboardContext();

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
          <DashboardPOT />
        </div>
      </div>
    </Wrapper>
  );

};


export default BigSidebar;
