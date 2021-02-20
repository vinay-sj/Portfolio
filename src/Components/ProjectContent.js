import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function ProjectContent(name, img, githubLink, extLink, detailList, dir) {
    const details = (detailList) => {
        return (
            (detailList || []).map((detail, index) => {
                return (
                    <li key={index}>{detail}</li>
                );
            })
        );
    }
    const linksinpage = (link, icon) => {
        if (link) {
            return (
                <a
                    className="github"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {icon}
                    {/*<GitHubIcon fontSize="medium"  className='mr-4'/>*/}
                    {/*<FontAwesomeIcon icon={faGithub} size="2x" className='mr-4'/>*/}
                </a>
            )
        } else {
            return (
                <></>
            )
        }
    }
    const direction = (dir) => {
        if (dir === 'left') {
            return (
                <>
                    <Col lg={6}><img className='project-img' src={img} alt=''/></Col>
                    <Col lg={6} className="my-auto">
                        <ul className='project-content'>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, <GitHubIcon style={{"fontSize": "30px"}} className='mr-4'/>)}
                        {linksinpage(extLink, <OpenInNewIcon style={{"fontSize": "37px"}} className='mr-4'/>)}
                    </Col>
                </>
            )
        } else {
            return (
                <>
                    <Col lg={6} className='my-auto order-2 order-md-2 order-lg-1 order-xl-1'>
                        <ul className='project-content'>
                            {details(detailList)}
                        </ul>
                        {linksinpage(githubLink, <GitHubIcon style={{"fontSize": "30px"}} className='mr-4'/>)}
                        {linksinpage(extLink, <OpenInNewIcon style={{"fontSize": "37px"}} className='mr-4'/>)}
                    </Col>
                    <Col lg={6} className='order-1 order-md-1 order-lg-2 order-xl-2 my-auto'><img
                        className='project-img'
                        src={img} alt=''/></Col>
                </>
            )
        }
    }
    return (
        <Container className='mt-4'>
            <h2 className='mb-3'>{name}</h2>
            <Row>
                {direction(dir)}
            </Row>
        </Container>
    )
}

export default ProjectContent;