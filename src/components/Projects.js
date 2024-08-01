import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjectModal from './ProjectModal';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { importAll } from '../utils/importImages';

const projectImages = importAll(require.context('../assets/img/projects', true, /\.(png|jpe?g|svg)$/));
const skillLogos = importAll(require.context('../assets/img/skills', false, /\.(png|jpe?g|svg)$/));
const proImages = importAll(require.context('../assets/img/pro', true, /\.(png|jpe?g|svg)$/));

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "C-Tool",
      description: "Development of a robot testing software.",
      imgUrl: projectImages['zodiac/ct1.png'],
      skills: [{ skill: 'ReactJs', skillLogo: skillLogos['react.svg'] },
      { skill: 'HTML5', skillLogo: skillLogos['html5.png'] },
      { skill: 'CSS3', skillLogo: skillLogos['css.svg'] },
      { skill: 'Figma', skillLogo: skillLogos['figma.svg'] },
      { skill: 'electron', skillLogo: skillLogos['electron.png'] },
      { skill: 'JS', skillLogo: skillLogos['js.svg'] },
      { skill: 'TS', skillLogo: skillLogos['typescript.png'] },],
      images: [projectImages['zodiac/ct1.png'], projectImages['zodiac/ct2.png'], projectImages['zodiac/ct3.png']]
    },
    {
      title: "Resatoul",
      description: "Full-Stack development of a reservation tool.",
      imgUrl: projectImages['resatoul/rt1.png'],
      skills: [{ skill: 'Php', skillLogo: skillLogos['php.svg'] },
      { skill: 'Symfony', skillLogo: skillLogos['symfony.svg'] },
      { skill: 'HTML5', skillLogo: skillLogos['html5.png'] },
      { skill: 'CSS3', skillLogo: skillLogos['css.svg'] },
      { skill: 'Figma', skillLogo: skillLogos['figma.svg'] },
      { skill: 'SQL', skillLogo: skillLogos['sql.svg'] },
      { skill: 'JS', skillLogo: skillLogos['js.svg'] }],
      images: [
        projectImages['resatoul/rt1.png'],
        projectImages['resatoul/rt2.png'],
        projectImages['resatoul/rt3.png'],
        projectImages['resatoul/rt4.png'],
        projectImages['resatoul/rt5.png'],
      ]
    },
    {
      title: "Cat-astrohpic Dodge!",
      description: "(In Development) Hypercasual game. You're a cat avoiding objects that are falling.",
      imgUrl: projectImages['catastrophic-dodge/catastrophicDodgeLogo.jpg'],
      link: 'https://squeakygames.itch.io/cat-astrophic-dodge',
      skills: [{ skill: 'Unity', skillLogo: skillLogos['unity.svg'] },
      { skill: 'C#', skillLogo: skillLogos['csharp.svg'] },
      { skill: 'Figma', skillLogo: skillLogos['figma.svg'] },],
      images: [
        projectImages['catastrophic-dodge/cd-1.png'],
        projectImages['catastrophic-dodge/cd-2.png'],
        projectImages['catastrophic-dodge/cd-3.png']
      ]
    },
    {
      title: "Lab tool",
      description: "Design of a dashboard for pool and tanks tracking",
      imgUrl: projectImages['lab-tool/lt-1.png'],
      skills: [{ skill: 'Figma', skillLogo: skillLogos['figma.svg'] },],
      images: [projectImages['lab-tool/lt-1.png'], projectImages['lab-tool/lt-2.png'], projectImages['lab-tool/lt-3.png'],
      projectImages['lab-tool/lt-4.png'], projectImages['lab-tool/lt-5.png'], projectImages['lab-tool/lt-6.png']]
    },
    {
      title: "Squeaky Games Blog",
      description: "Mobile app design. A game reviews blog and social space hybrid.",
      imgUrl: projectImages['squeakyGamesMobile/sgLogo.png'],
      skills: [{ skill: 'ReactJs', skillLogo: skillLogos['figma.svg'] }],
      images: [
        projectImages['squeakyGamesMobile/sg1.png'], projectImages['squeakyGamesMobile/sg2.png'], projectImages['squeakyGamesMobile/sg3.png'],
        projectImages['squeakyGamesMobile/sg4.png'], projectImages['squeakyGamesMobile/sg5.png'], projectImages['squeakyGamesMobile/sg6.png'],
        projectImages['squeakyGamesMobile/sg7.png'], projectImages['squeakyGamesMobile/sg8.png']
      ]
    },
    {
      title: "Squore",
      description: "Enhanced the user interface for the search and filter functionalities, focusing on improving user experience and accessibility through intuitive design principles.",
      imgUrl: projectImages['squore/squoreLogo.jpg'],
      skills: [{ skill: 'Figma', skillLogo: skillLogos['figma.svg'] }],
      images: [
        projectImages['squore/squore1.png'], projectImages['squore/squore2.png'], projectImages['squore/squore3.png'],
        projectImages['squore/squore4.png'], projectImages['squore/squore5.png'], projectImages['squore/squore6.png'],
        projectImages['squore/squore7.png'], projectImages['squore/squore8.png']
      ],
    },
  ];

  const profesionals = [
    {
      title: "Zodiac Fluidra",
      description: "Development of a robot testing software.",
      imgUrl: projectImages['zodiac/zodiacLogo.png'],
    },
    {
      title: "Clemenceau Medical Center",
      description: "Development of a nurse learning tool",
      imgUrl: proImages['cmcLogo.png'],
    },
    {
      title: "Makhzoumi Foundation",
      description: "SQL.",
      imgUrl: proImages['mf.jpg'],
    },
    {
      title: "Universite Paul Sabatier UT3",
      description: "Full-Stack development of a reservation tool.",
      imgUrl: proImages['ut3Logo.png'],
    },
    {
      title: "CRL",
      description: "Full-Stack development of a reservation tool.",
      imgUrl: proImages['crlLogo.png'],
    },
    {
      title: "Scuio-IP",
      description: "Full-Stack development of a reservation tool.",
      imgUrl: proImages['scuioLogo.png'],
    },
    {
      title: "VectorLogo",
      description: "Enhanced the user interface for the search and filter functionalities, focusing on improving user experience and accessibility through intuitive design principles.",
      imgUrl: proImages['vectorLogo.png'],
    },
    {
      title: "Upsilon",
      description: "Full-Stack development of an ERP.",
      imgUrl: proImages['upsilonLogo.png'],
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className='mb-5'>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Profesional Experiences</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleCardClick(project)}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            profesionals.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => {}}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      {selectedProject && (
        <ProjectModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={selectedProject.title}
          images={selectedProject.images}
          description={selectedProject.description}
          skills={selectedProject.skills || []}
          link={selectedProject.link || ''}
        />
      )}
    </section>
  )
}
