import React from 'react';
import '../styles/FeatureSection.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsPhone, BsSend, BsPeople, BsListCheck } from 'react-icons/bs';

const features = [
  {
    id: '01',
    icon: <BsPhone size={30} />,
    title: 'User-Friendly Interface',
    description: 'Our platform offers seamless task management to boost your efficiency.',
  },
  {
    id: '02',
    icon: <BsSend size={30} />,
    title: 'Collaborate & Share Effortlessly',
    description: 'Invite team members to work together and achieve your goals faster.',
  },
  {
    id: '03',
    icon: <BsPeople size={30} />,
    title: 'Effortless Collaboration',
    description: 'Invite team members to work together and achieve your goals faster.',
  },
  {
    id: '04',
    icon: <BsListCheck size={30} />,
    title: 'Seamless Access',
    description: 'Stay connected and manage your tasks on the go with ease.',
  },
];

function FeatureSection() {
  return (
    <section className="features py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4 ftitle">Transform Your Productivity with Our</h2>
        <h2 className="text-center fw-bold mb-5 ftitle">Innovative To-Do List Features</h2>
        <Row>
          {features.map((feature) => (
            <Col md={3} key={feature.id}>
              <Card className="feature-card text-center p-4 mb-4">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5 className="feature-title mb-2">{feature.title}</h5>
                <div className="feature-underline mb-3"></div>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-number">{feature.id}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeatureSection;
