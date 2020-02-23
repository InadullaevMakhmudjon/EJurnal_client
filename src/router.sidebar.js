import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import EmailIcon from '@material-ui/icons/Email';
import StorageIcon from '@material-ui/icons/Storage';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import Create from 'pages/author/Create';
import Articles from 'pages/author/Atricles';
import Users from 'pages/admin/Users';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Authors from 'pages/admin/Authors';
import { ADMIN, AUTHOR, EDITOR } from './utils/roles';

// 1 Role Admin, 2 Role Author, 3 Role Student
export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    roles: [ADMIN, AUTHOR, EDITOR],
    component: () => <></>,
  },
  {
    path: '/create',
    name: 'create',
    icon: CreateIcon,
    roles: [AUTHOR],
    component: Create,
  },
  {
    path: '/users',
    name: 'Users',
    icon: GroupAddIcon,
    roles: [ADMIN],
    component: Users,
  },
  {
    path: '/authors',
    name: 'Authors',
    icon: SupervisorAccountIcon,
    roles: [ADMIN],
    component: Authors,
  },
  {
    path: '/articles',
    name: 'Articles',
    icon: AssignmentIcon,
    roles: [AUTHOR, EDITOR],
    component: Articles,
  },
  {
    path: '/instruction',
    name: 'Instruction',
    icon: InfoIcon,
    roles: [AUTHOR, EDITOR],
    component: () => <></>,
  },
  {
    path: '/news',
    name: 'News',
    icon: EmailIcon,
    roles: [ADMIN],
    component: () => <></>,
  },
  {
    path: '/announcement',
    name: 'Announcements',
    icon: AnnouncementIcon,
    roles: [ADMIN],
    component: () => <></>,
  },
  {
    path: '/information',
    name: 'Information',
    icon: StorageIcon,
    roles: [ADMIN],
    component: () => <></>,
  },
  {
    path: '/rejected_articles',
    name: 'Rejected',
    icon: ThumbDownIcon,
    roles: [EDITOR],
    component: () => <></>,
  },
  {
    path: '/accepted_articles',
    name: 'Accepted',
    icon: ThumbUpIcon,
    roles: [EDITOR],
    component: () => <></>,
  },
];
