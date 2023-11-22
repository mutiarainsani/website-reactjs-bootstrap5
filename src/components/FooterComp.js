import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Mutiara.</h3>
          </Col>
          <Col className="text-end">
            <i class="fa-brands fa-facebook text-white mx-lg-3 fs-1 mx-2"></i>
            <i class="fa-brands fa-twitter text-white mx-lg-3 fs-1 mx-2"></i>
            <i class="fa-brands fa-linkedin text-white mx-lg-3 fs-1 mx-2"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">&copy; Copyright by Mutiara Insani 2023, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
