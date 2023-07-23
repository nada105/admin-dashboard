
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Typography, styled, useTheme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutlined, PieChartOutlineOutlined, ReceiptLongOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import  {grey}  from '@mui/material/colors';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));




{/*-----------------------------Arrays-------------------*/}
const Array1 =[

  {"text":"Dashboard", "icon":<HomeOutlined/> ,"path":"/"},
  {"text":"Manage Team", "icon":<PeopleOutlined/> ,"path":"/team"},
  {"text":"Contacts Information", "icon":<ContactsOutlined/> ,"path":"/contacts"},
  {"text":"Invoices Balances", "icon":<ReceiptLongOutlined/> ,"path":"/invoices"},
];


const Array2 =[

  {"text":"Profile Form", "icon":<PeopleOutlined/> ,"path":"/form"},
  {"text":"Calender", "icon":<CalendarTodayOutlined/> ,"path":"/calender"},
  {"text":"FAQ Page", "icon":<HelpOutlineOutlined/> ,"path":"/faq"},
];



const Array3 =[

  {"text":"Bar Chart", "icon":<BarChartOutlined /> ,"path":"/bar"},
  {"text":"Pie Chart", "icon":<PieChartOutlineOutlined/> ,"path":"/pie"},
  {"text":"Line Chart", "icon":<TimelineOutlined/> ,"path":"/line"},
  {"text":"Geagraphy Chart", "icon":<MapOutlined/> ,"path":"/geography"},
];




{/*-----------------------------Arrays-------------------*/}

 const SideBar = ({open, handleDrawerClose}) => {
    
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation();
  return (
    <>
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

{/*---------------------line--------------------------*/}
<Divider />
{/*---------------------line--------------------------*/}

{/*------------------------AVATAR---------------------*/}
<Avatar alt="Cindy Baker" sx={{mx:"auto" ,with:open ? 50 : 40 ,height:open ? 50 : 40 , my:1,border:"2px solid gray" ,transition:"0.25s"}} src="../../1024px-Crystal_personal.svg.png" />

<Typography  align='center' sx={{fontSize: open ? 17 : 0 ,transition:"0.25s"}} >NaDa Salem</Typography>
<Typography  align='center' sx={{fontSize: open ? 15 : 0 ,transition:"0.25s" ,color:theme.palette.info.main}}>Admin</Typography>










{/*---------------------line--------------------------*/}
        <Divider />
{/*---------------------line--------------------------*/}

{/*----------------------LIST-------------------*/}
        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 20,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname === item.path ?  theme.palette.mode === "dark" ? grey [800] : grey [300] : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >

                  {/*-------TO DISPLAY ICON--------*/}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
{/*----------------------LIST-------------------*/}

        {/*------line-----*/}
        <Divider />
        {/*------line-----*/}


        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 20,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname === item.path ?  theme.palette.mode === "dark" ? grey [800] : grey [300] : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

         {/*------line-----*/}
         <Divider />
        {/*------line-----*/}


{/*----------------------LIST-------------------*/}
<List>
          {Array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={()=>{
                navigate(item.path)
              }}
                sx={{
                  minHeight: 20,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname === item.path ?  theme.palette.mode === "dark" ? grey [800] : grey [300] : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >

                  {/*-------TO DISPLAY ICON--------*/}
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
</List>

{/*----------------------LIST-------------------*/}
      </Drawer>







    </>
  )
}


export default SideBar;
