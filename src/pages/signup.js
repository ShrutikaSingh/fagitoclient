import React,{Component, Fragment} from 'react';
import { Col, Row, } from 'reactstrap';
import signup_image from '../img/signup2.jpg';
import Register from '../components/register';
import { Card, CardBody,  } from 'reactstrap';
class SignupPage extends Component{
    render(){
        return(
            <Fragment>
                    <Row>
                        <Col lg="3" >
                        </Col>

                        <Col lg="9" xs='12' sm='12' md='12'>
                                <Row>
                                    <Col lg="8" xs='12' sm='12' md='12'>
                                        <img src={signup_image} alt="services" width='100%'></img>
                                    </Col>
                                </Row>

                                <Card>
                                    <CardBody>
                                    <Row>
                                        <Col lg="8" xs='12' sm='12' md='12'>
                                            <Card>
                                                <CardBody>
                                                    <Register></Register>
                                                </CardBody>
                                            </Card>
                                         </Col>
                                     </Row>
                                     </CardBody>
                                </Card>
                        </Col>
                        <Col lg="1" xs='12' sm='12' md='12'>
                        </Col>
                    </Row>
            </Fragment>
        )
    }
}

export default SignupPage;
