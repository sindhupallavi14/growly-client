import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
  { icon: '🛠️', title: 'AI Creative Generator', desc: 'Automatically generate standout ad designs.' },
  { icon: '✍️', title: 'Headline Optimizer', desc: 'AI-powered headline suggestions.' },
  { icon: '📤', title: 'Export Ad Formats', desc: 'Download ready-for-use ads for all platforms.' },
];

export default function Features() {
  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center mb-4">Key Features</h2>
      <Row>
        {features.map((feat, i) => (
          <Col md={4} key={i}>
            <Card className="text-center mb-3">
              <Card.Body>
                <div style={{ fontSize: '2rem' }}>{feat.icon}</div>
                <h5 className="mt-2">{feat.title}</h5>
                <p>{feat.desc}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
