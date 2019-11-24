import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';//how did this comeß
import Info from './info';
import CarouselMain from './carousel';
import Cards from './cards';


const divStyle = {
  paddingTop: '50px',
  color:"#48602d",
  fontfamily:"Roboto"
};

class Home extends Component {
    render(){
    return(
           <React.Fragment>
                <CarouselMain/>
                <div class="col-lg-12 text-center text-space mt-200" style={divStyle}>
                    <h4 class="g-header-text">Fine Dining Restaurant Software</h4>
                    <h5>Ensure seamless Fine Dine operations with FATIGO and provide enhanced customer experience to your customers</h5>
                </div>
                <Info/>
                <Cards/>

                <Container>
                  <Row>
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <div><a class="btn-orange-fill" href="/book-service"><h2 style={divStyle}> Download the app » </h2></a></div>
                    </Col>
                    <Col lg={4}></Col>
                  </Row>
                  <br></br>
                  <br></br>
                </Container>


          </React.Fragment>
    )
   }
  }

  export default Home;
