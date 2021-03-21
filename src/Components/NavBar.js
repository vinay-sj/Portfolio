import logo from "../logo.png";
import pdf from '../files/Vinay_Resume.pdf'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import {useState} from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(2),
        height: '50px',
        border: 'solid 3px',
        "border-color": theme.palette.secondary.main,
        "border-radius": "0px",
        padding: '0px',
        "min-width": '50px',
        width: '50px',
        ...theme.style.rmOutline,
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        '& img': {
            transition: theme.transitions.create(["transform"], {
                duration: theme.transitions.duration.standard
            }),
            '&:hover': {
                ...theme.actions.rotate,
            }
        },
        '&:hover': {
            ...theme.actions.scale,
        }
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navButtons: {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        ...theme.style.rmOutline,

    },
    menuButtons: {
        "justify-content": "center",
        margin: "auto",
        color: theme.palette.primary,
        '&:hover': {
            color: theme.palette.secondary.main,
        },
        ...theme.style.rmOutline,
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleSwitchMode = () => {
        props.setLightMode(!props.lightMode);
    }

    const handleMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMenuClose}
        >

            <MenuItem component='a' href="#about"
                      onClick={handleMenuClose}
                      aria-label="link to about section" className={classes.menuButtons}>
                About
            </MenuItem>
            <MenuItem component='a' href="#work"
                      onClick={handleMenuClose}
                      aria-label="link to experiences section" className={classes.menuButtons}>
                Experiences
            </MenuItem>
            <MenuItem component='a' href="#projects"
                      onClick={handleMenuClose}
                      aria-label="link to projects section" className={classes.menuButtons}>
                Projects
            </MenuItem>
            <MenuItem component='a' href="#contact"
                      onClick={handleMenuClose}
                      aria-label="link to contact section" className={classes.menuButtons}>
                Contact
            </MenuItem>
            <MenuItem component='a' href={pdf}
                      onClick={handleMenuClose}
                      target='_blank'
                      rel="noopener noreferrer"
                      aria-label="link to download resume" className={classes.menuButtons}>
                <CloudDownloadIcon className="mr-1"/>Resume
            </MenuItem>

            <MenuItem>
                <IconButton
                    aria-label="switch mode"
                    onClick={handleSwitchMode}
                    color="inherit"
                    className={classes.menuButtons}

                >
                    {props.lightMode && <Brightness7Icon/>}
                    {!props.lightMode && <Brightness4Icon/>}
                </IconButton>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color='inherit'>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Button
                            edge="start"
                            className={classes.logo}
                            color="inherit"
                            aria-label="open drawer"
                            href="#home"
                        >
                            <img className={classes.logoImg} width='100%' height='100%' src={logo} alt='Logo'/>
                        </Button>

                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <Button href="#about" aria-label="link to about section" className={classes.navButtons}>
                                About
                            </Button>
                            <Button href="#work" aria-label="link to experience section" className={classes.navButtons}>
                                Experiences
                            </Button>
                            <Button href="#projects" aria-label="link to projects section"
                                    className={classes.navButtons}>
                                Projects
                            </Button>
                            <Button href="#contact" aria-label="link to contact section" className={classes.navButtons}>
                                Contact
                            </Button>
                            <Button aria-labelledby="hi"
                                    href={pdf}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    aria-label="link to download resume" className={classes.navButtons}>
                                <Box mr={0.5}><CloudDownloadIcon/></Box>Resume
                            </Button>
                            <IconButton
                                aria-label="switch mode"
                                onClick={handleSwitchMode}
                                className={classes.navButtons}
                            >
                                {props.lightMode && <Brightness7Icon/>}
                                {!props.lightMode && <Brightness4Icon/>}
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            <Toolbar/>
        </div>
    );
}
