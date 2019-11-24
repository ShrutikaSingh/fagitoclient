import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import ligo from '../../foodlogo.jpg';

const f_style={
    backgroundColor:'black',
    color:'white',
}
const h2_style={
    color:'green',
}
export default class Footer extends Component{
    render(){
        return(
            <div style={f_style}>
              <br></br>
            <Row>
              <Col sm={12} lg={1}></Col>
                <Col sm={6} lg={2}>
                   <div>
                      <img src={ligo} alt="services" className="navbar-brand" height="210px"></img>
                    </div>
                 </Col>

                 <Col sm={6} lg={3}>
                       <div>
                       <h2 style={h2_style} >ABOUT FAGITO</h2>
                       <br></br>
                       <p>
                          At Fagito, we provide a full range of automotive services and repairs to drivers throughout Scottsdale, Tempe, and Phoenix. We have affordable prices and focus on getting you back in no time whenever you need a repair. We build a relationship with our clients, keeping their full range of needs in mind with every repair.
                       </p>
                       </div>
                 </Col>

                 <Col sm={12} lg={2}>
                       <div>
                       <h2 style={h2_style}>Links</h2>
                       <br></br>
                          <ul>
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
                              <li>Login </li>
                              <li>Signup</li>
                          </ul>
                       </div>
                 </Col>
                 <Col sm={12} lg={3}>
                       <div>
                       <h1 style={h2_style}>Contact Us</h1>
                          <p>
                          <br></br>
                              NO.2, Nisarg Anand Society,
                              <br></br>
                               Pimple Nilakh, Pune 27
                               <br></br>
                              jackmymotor@gmail.com
                              <br></br>
                              +91-90119454694
                              <br></br>
                          </p>
                       </div>
                 </Col>
            </Row>
            <br></br>
            <br></br>
            </div>
        )
    }
}
