import pdf from '../files/Vinay_Resume.pdf'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import {useState} from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styles from "../css/NavBar";

const useStyles = makeStyles(styles);

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
                            {/*<img className={classes.logoImg} width='100%' height='100%' src={logo} alt='Logo' style={{color:"#f00"}}/>*/}
                        {/*<ReactLogo  />*/}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                                    <path d="M64.82 86.34L64.82 86.34Q63.00 87.89 59.16 89.06Q55.33 90.23 50.78 90.23L50.78 90.23Q45.32 90.23 41.42 88.61Q37.52 86.98 36.09 84.13L36.09 84.13Q34.66 81.14 32.58 76.39Q30.50 71.65 28.22 65.80Q25.95 59.95 23.54 53.38Q21.14 46.81 18.93 40.05Q16.72 33.30 14.77 26.80Q12.82 20.30 11.39 14.58L11.39 14.58Q13.21 12.75 16.65 11.26Q20.10 9.77 24.00 9.77L24.00 9.77Q28.81 9.77 31.86 11.78Q34.92 13.80 36.35 19.25L36.35 19.25Q39.86 31.99 43.43 43.63Q47.01 55.27 50.91 67.88L50.91 67.88L51.69 67.88Q55.20 55.66 58.90 41.23Q62.61 26.80 65.99 12.50L65.99 12.50Q68.33 11.33 71.00 10.55Q73.66 9.77 77.04 9.77L77.04 9.77Q81.85 9.77 85.23 11.91Q88.61 14.06 88.61 19.00L88.61 19.00Q88.61 21.86 87.24 27.31Q85.88 32.77 83.73 39.60Q81.59 46.43 78.92 53.84Q76.26 61.25 73.59 67.81Q70.93 74.38 68.59 79.38Q66.25 84.39 64.82 86.34Z"
                                          className={classes.logoColor}></path>
                                </svg>
                            </svg>

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
