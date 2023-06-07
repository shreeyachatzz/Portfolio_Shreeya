import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import contactLogo from "../../Assets/Contact-main.png";

function Contact(){

  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_PUBLIC_ID);
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
        <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={contactLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          <Col size={12} md={6}>
          <h2>GET IN <span className="purple">TOUCH</span></h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                  <Col md={12} className="home-about-social">
                    <ul className="home-about-social-links">
                      <li className="social-icons">
                        <a
                          href="https://github.com/shreeyachatzz"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <AiFillGithub />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a
                          href="https://www.linkedin.com/in/shreeyachatterji/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                        >
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a
                          href="https://www.instagram.com/shreeya_chatz/"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour home-social-icons"
                        >
                          <AiFillInstagram />
                        </a>
                      </li>
                    </ul>
                   </Col>
                    <Col sm={18} className="px-1">
                      <input type="text" name="name_from" placeholder="Name" onChange={(e) => onFormUpdate('Name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email_from" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

export default Contact;