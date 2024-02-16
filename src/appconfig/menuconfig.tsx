import { TMainMenuType } from '@/types/TNavBar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainMenuItems: TMainMenuType[] = [
    {
      Key: 'Dashboard',
      Title: 'Dashboard',
      Url: '/dashboard',
      Icon: <DashboardIcon/>,
      SubMenu: [],
      IsExpand: false,
    },
    {
      Key: 'Orders',
      Title: 'Orders',
      Url: '/orders',
      Icon: <ShoppingCartIcon />,
      SubMenu: [],
      IsExpand: false,
    },
    {
      Key: 'Customers',
      Title: 'Customers',
      Url: '',
      Icon: <PeopleIcon />,
      SubMenu: [
        {
          Key: 'NewCustomers',
          Title: 'New Customers',
          Url: '/new-customers',
          Icon: <BarChartIcon />,
        },
      ],
      IsExpand: false,
    },
  ];

  export const secondaryMenuItems: TMainMenuType[] = [
    {
      Key: 'Reports',
      Title: 'Reports',
      Url: '/reports',
      Icon: <AssignmentIcon />,
      SubMenu: [],
      IsExpand: false,
    }
  ];

