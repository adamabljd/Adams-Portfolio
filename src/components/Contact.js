import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm('service_ceni3cr', 'template_76zlbjd', form.current, {
        publicKey: 'GDLdu1q3-LrC97mvd',
      })
      .then(
        () => {
          setButtonText("Send");
          setStatus({ success: true, message: 'Message sent successfully' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText("Send");
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" name="user_name"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text"  placeholder="Last Name" name="user_lastname"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="user_email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="user_phone"/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message"></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
