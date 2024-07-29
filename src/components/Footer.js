import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/ieee mb blue.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ 
  width: '60%', 
  height: '50px', 
  display: 'flex', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
  margin: '0 auto', 
  backgroundColor: '#f8f9fa', 
  borderRadius: '10px', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
}}>
  <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} className="hnn">Home</a>
  <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} className="hnn">Contact</a>
  <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} className="hnn">Accessibility</a>
  <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} className="hnn">IEEE Ethics Reporting</a>
  <a href="#" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }} className="hnn">Terms</a>
</div>
<div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
  <p style={{ fontSize: '20px' }}>
    © Copyright 2024 IEEE – All rights reserved. Use of this website signifies your agreement to the 
    <span className="ieee-txt" style={{ textDecoration: 'underline' }}> IEEE Terms and Conditions</span>. 
    A not‑for‑profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
  </p>
</div>
    </footer>
  )
}
