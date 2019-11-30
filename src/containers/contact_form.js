import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Services from '../services/services'
export default class contactForm extends Component {
  state = {
    Email: '',
    Name: '',
    Contact: '',
    Message: ''
  }

  updateText = (event) => {
    let newState = {};
    newState[event.currentTarget.name] = event.currentTarget.value;
    this.setState(newState);
  }
  submitFeedback = async () => {
    const request = new Services();
    const response = await request.sendFeedback(this.state);
    if (response.status !== 201) {
      console.log(response.error);
    }
    else{
      console.log(response.message);
    }
  }
  render() {

    return (
      <Form>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="Name" id="name"
            placeholder="Enter Your Name Here"
            onChange={this.updateText}
            required
            value={this.state.Name}
          />

        </FormGroup>

        <FormGroup>
          <Label >Email:</Label>
          <Input
            type="email"
            name="Email"
            placeholder="Enter Your Name Here"
            onChange={this.updateText}
            value={this.state.Email}
          />
        </FormGroup>

        <FormGroup>
          <Label>Contact:</Label>
          <Input
            type="text"
            name="Contact"
            placeholder="Contact"
            onChange={this.updateText}
            value={this.state.Contact}
            maxLength="10"
          />
        </FormGroup>

        <FormGroup>
          <Label>Message: </Label>
          <Input
            type="textarea"
            name="Message"
            placeholder="Enter your message"
            onChange={this.updateText}
            required
            value={this.state.Message}
          />
        </FormGroup>

        <Button onClick={this.submitFeedback}>Submit</Button>
      </Form>
    );
  }
}
