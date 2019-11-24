import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class contactForm extends Component {
  render() {
    return (
      <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input type="text"
        name="name" id="exampleEmail"
        placeholder="Enter Your Name Here"/>
      </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email:</Label>
      <Input type="email" name="email" placeholder="Enter Your Name Here" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Related to:</Label>
      <Input type="select" name="select" id="exampleSelect">
        <option>Customer</option>
        <option>Manger</option>
        <option>Resturant Worker</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="subject">Subject:</Label>
      <Input type="text" name="subject" placeholder="Enter the subject here"/>
    </FormGroup>
    <FormGroup>
      <Label for="exampleText">Message: </Label>
      <Input type="textarea" name="text" id="exampleText" placeholder="Enter your message"/>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" />{' '}
        Check me out
      </Label>
    </FormGroup>
    <Button>Submit</Button>
  </Form>
    );
  }
}
