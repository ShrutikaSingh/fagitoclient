import React,{Component} from 'react';
import { Col, Row,Container, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class login_form extends Component {
  render() {
    return (

        <Form>
          <FormGroup>
            <Label for="exampleAddress">Username</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="username"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Password</Label>
            <Input type="text" name="password" id="password" placeholder="password"/>
          </FormGroup>
        </Form>
    
      );
    }
  }
