import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Container, Row} from "react-bootstrap";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import React from "react";

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
    const linksinpage = (link, faGithub) => {
        if (link) {
            return (
                <a
                    className="github"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" className='mr-4'/>
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
                        {linksinpage(githubLink, faGithub)}
                        {linksinpage(extLink, faExternalLinkAlt)}
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
                        {linksinpage(githubLink, faGithub)}
                        {linksinpage(extLink, faExternalLinkAlt)}
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