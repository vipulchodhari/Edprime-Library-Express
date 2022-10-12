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
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/navbar.css';

const drawerWidth = 240;

export const Navbar = () => {
    let master = ["Category List", "Publisher Master", "Author Master", "Genre Master", "Language Master",
        "Class Master", "Subject Master", "Membership Plans", "Location Master"]

    let librarySetting = ["General Settings", "Checkout & Borrowings", "Reservations", "Renew",
        "Fine Charges", "Book Health Chage", "Membership Plan"]
    const [openM, setOpenM] = React.useState(true);
    const [openS, setOpenS] = React.useState(true);
    const [openL, setOpenL] = React.useState(true);
    const [openB, setOpenB] = React.useState(true);
    const navigate = useNavigate()
    const handleClick = () => {
        setOpenM(!openM);
        setOpenS(true)
        setOpenL(true)
    };
    const handleClickSec = () => {
        setOpenS(!openS)
        setOpenL(true)
    };
    const handleClickLibrarySetting = () => {
        setOpenL(!openL)
        setOpenS(true)
    };
    const handleClickBook = () => {
        setOpenB(!openB)
    }
    const handleNavigate = (el) => {
        // console.log("receive end point", el)
        if (el === "Category List") {
            navigate('/category')
        } else if (el === "Author Master") {
            navigate('/author')
        } else if (el === "Genre Master") {
            navigate('/genre')
        } else if (el === "Language Master") {
            navigate('/language')
        } else if (el === "Publisher Master") {
            navigate('/publisher')
        } else if (el === "Language Master") {
            navigate('/language')
        } else if (el === "Class Master") {
            navigate('/class')
        } else if (el === "Subject Master") {
            navigate('/subject')
        } else if (el === "Membership Plans") {
            navigate('/membership')
        } else if (el === "Location Master") {
            navigate('/location')
        } else if (el === "General Settings") {
            navigate('/general-settings')
        } else if (el === "Checkout & Borrowings") {
            navigate('/checkout-borrowings')
        } else if (el === "Renew") {
            navigate('/renew')
        } else if (el === "Reservations") {
            navigate('/reservations')
        } else if (el === "Membership Plan") {
            navigate('/membershipplan')
        } else if (el === "Book Health Chage") {
            navigate('/bookhealthcharges')
        } else if (el === "Fine Charges") {
            navigate('fine-charges')
        }
    }

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
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
                <h2 className='navbar-heading'>Library</h2>
                <Toolbar />
                <Divider />
                <List>
                    <Link to='/' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon className='navbar-icon d-icon1' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Dashboard' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClickBook}>
                            <ListItemIcon>
                                <MenuBookIcon className='navbar-icon d-icon2' />
                            </ListItemIcon>
                            <ListItemText className='navbar-icon-text' primary='Books' />
                        </ListItemButton>
                    </ListItem>
                    <div className='book-dropdown-cont'>
                        <Collapse in={!openB} timeout="auto" unmountOnExit><hr />
                        <ListItem disablePadding>
                            <Link to='/book-list' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Book List' />
                                </List>
                            </Link>
                        </ListItem>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/book-units' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Books Units' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/import-books' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Import Books' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/issue-book' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Issue Book' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/deposite-book' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Deposite Book' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/books-reservation' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Books Reservations' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/issued-book-units' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Issued Book Units' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/scrapped-books' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Scrapped Books' />
                                </List>
                            </Link>
                        </Collapse>
                        <Collapse in={!openB} timeout="auto" unmountOnExit>
                            <Link to='/renewal-requests' className='link-decoration'>
                                <List component="div" disablePadding>
                                    <ListItemText className='master-text' sx={{ pl: 3.5 }} primary='Renewal Requests' />
                                </List>
                            </Link>
                        </Collapse>
                    </div>
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
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <SettingsIcon className='navbar-icon d-icon5' />
                            </ListItemIcon>
                            <ListItemText primary="Set Up" />
                            {openM ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </ListItem>
                    <Collapse in={!openM} timeout="auto" unmountOnExit><hr />
                        <List component="div" disablePadding>
                            <ListItemButton onClick={handleClickSec}
                                style={{ color: 'rgb(51,146,230)', fontWeight: '600' }}
                                sx={{ pl: 4.5 }}>
                                <ListItemText primary="Master" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <div className='book-dropdown-cont'>
                        {master.map((el, i) => {
                            return <div key={i} >
                                <Collapse in={!openS} timeout="auto" unmountOnExit onClick={(e) => handleNavigate(el)}>
                                    <List component="div" disablePadding style={{ cursor: 'pointer' }}>
                                        {/* <ListItemButton sx={{ pl: 7 }}> */}
                                        <ListItemText 
                                            sx={{ pl: 3.5 }} 
                                            primary={el}
                                            className='master-text' 
                                            onClick={() => {
                                                // document.body.style.background = 'darkgreen'
                                            }}
                                        />
                                        {/* </ListItemButton> */}
                                    </List>
                                </Collapse>
                            </div>
                        })}
                    </div>
                    <Collapse in={!openM} timeout="auto" unmountOnExit><hr/>
                        {/* <Link to='/library-settings' className='link-decoration'> */}
                        <List component="div" disablePadding>
                            <ListItemButton onClick={handleClickLibrarySetting}
                                style={{ color: 'rgb(51,146,230)', fontWeight: '600' }}
                                sx={{ pl: 4.5 }}>
                                <ListItemText primary="Library Settings" />
                            </ListItemButton>
                        </List>
                        {/* </Link> */}
                    </Collapse>
                    <div className='book-dropdown-cont'>
                    {librarySetting.map((el, i) => {
                        return <div key={i} >
                            <Collapse in={!openL} timeout="auto" unmountOnExit onClick={(e) => handleNavigate(el)}>
                                <List component="div" disablePadding>
                                    {/* <ListItemButton sx={{ pl: 7 }}> */}
                                        <ListItemText className='master-text' sx={{ pl: 3.5 }} primary={el} style={{ cursor: 'pointer' }}/>
                                    {/* </ListItemButton> */}
                                </List>
                            </Collapse>
                        </div>
                    })}
                    </div>
                    {/* <Link to='/library-settings' className='link-decoration'> */}
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
    </div>
}