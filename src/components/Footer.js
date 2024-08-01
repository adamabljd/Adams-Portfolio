import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Squeaky_logo.png';
import linkedinLogo from "../assets/img/linkedinLogo.svg";
import cvLogo from "../assets/img/cvLogo.svg";
import instaLogo from "../assets/img/instaLogo.svg";
import itchioLogo from "../assets/img/itch-io.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="mt-4" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/adam-abouljoud-b380851a4/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="" /></a>
              <a href="./CV.pdf" download="CV.pdf"><img src={cvLogo} alt="Icon" className="text-light" /></a>
              <a href="https://squeakygames.itch.io/" target="_blank" rel="noopener noreferrer"><img src={itchioLogo} alt="itch.io" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
