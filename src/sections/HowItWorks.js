import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  { icon: '🖊️', title: 'Input Product', desc: 'Enter your product details' },
  { icon: '💡', title: 'AI Processing', desc: 'Growly generates creatives' },
  { icon: '🚀', title: 'Get Ads', desc: 'Download ad-ready formats' },
];

export default function HowItWorks() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <Row>
        {steps.map((step, i) => (
          <Col md={4} key={i}>
            <Card className="text-center mb-3">
              <Card.Body>
                <div style={{ fontSize: '2rem' }}>{step.icon}</div>
                <h5 className="mt-2">{step.title}</h5>
                <p>{step.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
