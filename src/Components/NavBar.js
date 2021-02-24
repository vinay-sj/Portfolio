import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import logo from "../logo.png";
import './../css/NavBar.css';
import pdf from '../files/Vinay_Resume.pdf'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar
                sticky={'top'}
                collapseOnSelect
                expand="lg"
                className="header-margin"
                variant="dark"
            >
                <div className='container'>
                    <Navbar.Brand>
                        <div className='d-inline-flex link-format'>
                            <Nav.Link href="#home">
                                <div className='logo' id="logo">
                                    <img width='100%' src={logo} alt='Logo'/>
                                </div>
                            </Nav.Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href='#about' className="mr-4">
                                <Nav.Item>About</Nav.Item>
                            </Nav.Link>
                            <Nav.Link href='#work' className="mr-4">
                                <Nav.Item>Experiences</Nav.Item>
                            </Nav.Link>
                            <Nav.Link href='#projects' className="mr-4">
                                <Nav.Item>Projects</Nav.Item>
                            </Nav.Link>
                            <Nav.Link href='#contact' className="mr-4">
                                <Nav.Item>Contact</Nav.Item>
                            </Nav.Link>
                            <Nav.Link
                                href={pdf}
                                target='_blank'
                                className="mr-4"
                                rel="noopener noreferrer"
                            >
                                <Nav.Item>
                                    <CloudDownloadIcon className="mr-1"/>
                                    Resume
                                </Nav.Item>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavBar;