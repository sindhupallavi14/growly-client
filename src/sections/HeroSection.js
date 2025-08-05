import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../styles/HeroSection.css';


export default function HeroSection() {
  return (
    <div className="hero-section text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold mb-3">
              Create High‑Converting Ads in Seconds — Powered by AI
            </h1>
            <p className="lead mb-4">
              No design or copywriting needed. Just enter your product and let <strong>Growly</strong> do the rest.
            </p>
            <Button variant="light" size="lg" href="#lead-form">
              🚀 Book Free Demo
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="/Images/hero.jpg"
              // alt="AI ad illustration"
            //   className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
