import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllCountriesList from './AllCountriesList';
import CurrentCountryStats from './CurrentCountryStats';
import GlobalMap from './GlobalMap';

const MidSectionContainer = () => {
  return (
    <Container className='MidSection'>
      <Row>
        <Col xs='12' sm='12' md='12' lg='12' xl='12'>
          <div className='GlobalMap'>
            <GlobalMap />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs='12' sm='12' md='6' lg='6' xl='6'>
          <div className='currentCountryStates'>
            <CurrentCountryStats />
          </div>
        </Col>
        <Col xs='12' sm='12' md='6' lg='6' xl='6'>
          <div className='AllCountriesList'>
            <AllCountriesList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MidSectionContainer;
