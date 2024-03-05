
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms, FaUsers, FaQuora } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

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
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
