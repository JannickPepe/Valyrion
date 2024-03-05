
import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';



const Navbar = () => {

  const { toggleSidebar, user } = useDashboardContext();

  var [date,setDate] = useState(new Date());
    
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });



  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h4 className='logo-text'>dashboard: {user?.name} {user?.lastName} </h4>

          <div className='flex justify-center items-center mt-2'>
            <p className='mx-2'>Time and Date:</p>
            <p style={{display:'inline-block'}}>{date.toLocaleTimeString()}</p>
            <p className='mx-2' style={{display:'inline-block'}}>{date.toLocaleDateString()}</p>
          </div>
        </div>

        <div className='btn-container'>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );

};


export default Navbar;
