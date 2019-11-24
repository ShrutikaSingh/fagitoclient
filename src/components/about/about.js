import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import about_img from '../../img/about_us.png';
import mech from '../../img/ab_us.webp';
import Content from './col_about';

const divStyle = {
  color: 'grey',
  paddingTop: '50px',
};

const t_style={
  color:"green",
  fontSize:"30px",
};


class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
         <img src={about_img} style={divStyle} alt="about_us" height="100%" width="100%"></img>
       <Container >
        <Row>
          <Col style={divStyle} lg={9}>
          <p style={t_style}>Some of our services</p>
              <h5>
              On average our mechanics have over ten years of experience and most are master technicians with ASE Certifications.
              <br/>
              <br/>
              We extensively screen all of our mechanics with background, criminal, and reference checks.
              <br/>
              <br/>
              On each mechanic’s profile page, you’ll see a full list of all their certifications, years of experience, job skills, and feedback from real customers. We constantly monitor the performance of our mechanics to make sure they’ll provide you with professional and courteous service.
              <br/>
              <br/>
              At YourMechanic,
              you can trust the people who are working on your car.
              </h5>
          </Col>
          <Col style={divStyle} lg={3}>
              <img src={mech} alt="about" height="100%" width="100%" ></img>
          </Col>
        </Row>
       </Container>

       <Content/>
      
      </React.Fragment>
    )
  }
}

export default AboutUs;
