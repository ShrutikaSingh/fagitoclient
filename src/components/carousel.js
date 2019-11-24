import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Row,Col, Container} from 'reactstrap';

import bg1 from '../img/food6.webp';
class CarouselMain extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="main_img">
                <Container fluid>
                    <Row>
                        <Col>
                                 <img src={bg1} alt="services" height="100%" width="100%"></img>
                         </Col>
                    </Row>
                </Container>
                </div>
                </React.Fragment>

        );
    }
}



export default CarouselMain;
