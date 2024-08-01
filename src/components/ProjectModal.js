import React from 'react';
import { Modal, Button, Image, ListGroup, Carousel } from 'react-bootstrap';

const ProjectModal = ({ show, onHide, name, images, description, skills, link }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='project-modal'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="image-container" style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
          <Carousel>
            {images.map((image, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <Image
                    src={image}
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Carousel.Item>)
            })}
          </Carousel>
        </div>
        <div className="skills-container mt-4">
          <h5 className='mr-3'>Skills:</h5>
          <ListGroup horizontal variant="flush" className="d-flex flex-wrap">
            {skills.map((skill, index) => (
              <ListGroup.Item key={index} className="border-0">
                <Image
                  src={skill.skillLogo}
                  alt={skill.skill}
                  style={{ width: '2rem', height: '2rem' }}
                  // className="mr-2"
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <h5 className="mt-3">Description:</h5>
        <p>{description}</p>
        {link && (
          <p className="mt-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Click here to play!
            </a>
          </p>
        )}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#181017' }}>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
