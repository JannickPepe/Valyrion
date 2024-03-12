
import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';



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
          <div className='px-4 lg:pl-10 fixed inset-x-0 bottom-2 mx-auto flex justify-start'>
            <div className='text-xl font-semibol bg-teal-500 px-2 py-1 rounded-md'>
              Point of Contact
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );

};


export default BigSidebar;
