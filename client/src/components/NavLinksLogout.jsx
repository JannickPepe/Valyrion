
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const NavLinks = ({ isBigSidebar }) => {

  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, } = link;
        const { role } = user;
        
        // Check if you are admin or not - for showing admin menu
        if (path === 'admin' && role !== 'admin') return;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className='flex items-center justify-center text-base font-semibold text-slate-100 hover:text-slate-800'>
              {text}
            </span>
          </NavLink>
        );
      })}
    </div>
  );

};

export default NavLinks;
