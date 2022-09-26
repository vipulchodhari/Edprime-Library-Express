import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export const Navbar = () => {
    const [openM, setOpenM] = React.useState(true);
    const [openS, setOpenS] = React.useState(true);
    const handleClick = () => {
        setOpenM(!openM);
        setOpenS(!openS);
    };
    const handleClickSec = () => {
        setOpenS(!openS);
    };
    return <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div style={{ position: 'relative', marginTop: '40px' }}>
                    <SearchIcon className='navbar-searchIcon' />
                    <form className='navbar-form'>
                        {/* <img className='navbar-searchIcon' src={SearchIcon} alt='' /> */}
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
                <h2 className='navbar-heading'>Library</h2>
                <Toolbar />
                <Divider />
                <List>
                    {/* <Link to='/' className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon className='navbar-icon d-icon1' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Dashboard' />
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                    {/* <Link to='/books' className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuBookIcon className='navbar-icon d-icon2' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Books' />
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                    {/* <Link to="/author" className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon className='navbar-icon d-icon3' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Author' />
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                    <Link to="/member" className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon className='navbar-icon d-icon3' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Member' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    {/* <Link to="/category" className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <TrackChangesIcon className='navbar-icon d-icon4' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Category' />
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                    {/* <Link to='/issueBook' className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <SettingsIcon className='navbar-icon d-icon5' />
                            </ListItemIcon>
                            <ListItemText primary="Set Up" />
                            {openM ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Link to="/activemember" className='link-decoration'>
                        <Collapse in={!openM} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton onClick={handleClickSec} style={{color:'rgb(51,146,230)', fontWeight:'600'}} sx={{ pl: 5 }}>
                                    <ListItemText primary="Master" />
                                    {/* <ListItemText primary="Master" />
                                    {open ? <ExpandLess /> : <ExpandMore />} */}
                                </ListItemButton>
                            </List>   
                            </Collapse> 
                            <Link to="/addmember" className='link-decoration'>
                                <Collapse in={!openS} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Category List" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <Link to="/memberlist" className='link-decoration'>
                                <Collapse in={!openS} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Publisher Master" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <Link to="/expiredmember" className='link-decoration'>

                                    <Collapse in={!openS} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary="Author Master" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>

                                </Link>
                            </Link>    
                        </Link>
                    
                    </Link>
                    {/* </Link> */}
                    {/* <Link to='/demo' className='link-decoration'> */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <QuizIcon className='navbar-icon d-icon5' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Demo' />
                        </ListItemButton>
                    </ListItem>
                    {/* </Link> */}
                </List>
            </Drawer>

        </Box>
        {/* <Category/> */}
    </div>
}
