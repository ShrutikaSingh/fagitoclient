import React,{Component} from 'react';
import { Col, Row,Container, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class Example extends Component {
  render() {
    return (
      <Container>
      <Form>
        <FormGroup>
          <Label for="exampleAddress">Username</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="username"/>
        </FormGroup>
        <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="exampleAddress">Owner</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="Restaurant Owner"/>
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
          <Label for="exampleAddress">Contact</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="your contact"/>
        </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="abc@gmail.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password " />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">About</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder=""/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Address</Label>
              <Input type="text-area" name="city" id="1234 Main St"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">GSTIN</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>

        </Row>
        <Button>Sign in</Button>
      </Form>
      </Container>
    );
  }
}
