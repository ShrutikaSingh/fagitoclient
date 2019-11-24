import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import ConatctUs from '../img/contact_main.jpg';
import phone from '../img/icons_img/phone.png';
import address from '../img/icons_img/address.png';
import email from '../img/icons_img/email.jpg';
import web from '../img/icons_img/website.jpg';
import ContactForm from '../containers/contact_form';

const i_style={
    color:"black",
    fontSize:"18px",
    paddingLeft:"10%"
  };

const bg={
  backgroundColor:"#79B243",
  borderRadius:"10px",
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
        }}
    />
);

const H1_style={
fontFamily: "librebaskerville-bold",
fontSize: "3.1rem",
color:'green',

};


class AboutUs extends Component {
  render() {
    return (
      <React.Fragment >
         <img src={ConatctUs} alt="services" height="80%" width="100%"></img>
       <Container >
       <br></br>
       <br></br>
        <Row>

          <Col style={i_style} lg={3}>
            <h4></h4>
            <img src={phone} alt="contact" width="40%"  ></img>
            <h4>Phone</h4>
            <br></br>
            <p >+91-9834930939<br></br>
            +91-8781984154</p>
          </Col>
          <Col style={i_style} alt="contact" lg={3}>
              <img src={address} alt="contact" width="50%" ></img>
              <h4>Address</h4>
              <br></br>
              <p>NO.2,MIT Road,Kothrud,Pune </p>
          </Col>
          <Col style={i_style} alt="contact" lg={3}>
              <img src={email} alt="contact" width="40%" ></img>
              <h4>Email</h4>
              <br></br>
              <p>info@fagito<br></br>contact@fagito</p>
          </Col>
          <Col style={i_style} alt="contact" lg={3}>
              <img src={web} alt="contact"  width="40%" ></img>
              <h4>Website</h4>
              <br></br>
              <p>www.fagito.com</p>
          </Col>
        </Row>
        <ColoredLine color="#79B243" />
           <Container >
               <Row >
               <Col/>
                   <Col style={H1_style} lg={3}>
                          <h4>CONTACT</h4>
                          <h1> Get In Touch</h1>
                    </Col>
                <Col/>
               </Row>
                      <Row >
                      <Col lg={2}/>
                        <Col style={bg} lg={8} >
                          <ContactForm />
                        </Col>
                        <Col lg={2}/>
                      </Row>

                      <br></br>
            </Container>
       </Container>
      </React.Fragment>
    )
  }
}

export default AboutUs;
