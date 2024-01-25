import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Tab, Row, Nav, Col, Card, Button, Container } from 'react-bootstrap';
import servicesData from '../../data/services.json';
import './style.css';

function Services() {
  return (
    <div className="services-container" id="services">
      <Container>
      <h2 className="team-section-heading">Explore our Services</h2>
      <p>We offer a comprehensive range of services designed to meet your specific care requirements. Our highly trained staff is experienced in providing support for:</p>

      <Tab.Container id="services-tabs" defaultActiveKey={servicesData.tabs[0].id}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {servicesData.tabs.map(tab => (
                <Nav.Item key={tab.id}>
                  <Nav.Link eventKey={tab.id}>
                    {tab.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {servicesData.tabs.map(tab => (
                <Tab.Pane key={tab.id} eventKey={tab.id}>
                  <Card>
                    <Card.Img variant="top" src={tab.image} />
                    <Card.Body>
                      <Card.Title>{tab.title}</Card.Title>
                      <Card.Text>{tab.content}</Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    </div>
  );
}

export default Services;