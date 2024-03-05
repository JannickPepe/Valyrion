
import { IoBarChartSharp } from 'react-icons/io5';
import { FaUsers, FaQuora } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdContactMail } from "react-icons/md";


const links = [
  {/*
  {
    text: 'add job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
    {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
 */},
  {
    text: 'stats',
    path: '.',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'teams',
    path: 'teams',
    icon: <FaUsers />,
  },
  {
    text: 'faq',
    path: 'faq',
    icon: <FaQuora />,
  },
  {
    text: 'contact',
    path: 'contact',
    icon: <MdContactMail />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
