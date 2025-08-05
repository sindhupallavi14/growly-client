import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function LeadForm({ onSubmit, submitted }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container id="lead-form" className="py-5">
      <h2 className="text-center mb-4">Book Your Free Demo</h2>
      {submitted && <Alert variant="success">Thank you! We’ll be in touch soon.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control name="name" placeholder="Name" required onChange={handleChange} value={formData.name} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control name="phone" type="tel" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select name="businessType" required value={formData.businessType} onChange={handleChange}>
            <option value="">Select Business Type</option>
            <option>Freelancer</option>
            <option>Coach</option>
            <option>Small Business</option>
            <option>Ecommerce Seller</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" name="message" placeholder="Message" rows={3} required value={formData.message} onChange={handleChange} />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="primary">Submit</Button>
        </div>
      </Form>
    </Container>
  );
}
