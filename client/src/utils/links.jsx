
import { IoBarChartSharp } from 'react-icons/io5';
import { FaUsers, FaQuora } from 'react-icons/fa';
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
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
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
    text: 'support',
    path: 'support',
    icon: <MdContactMail />,
  },
];

export default links;
