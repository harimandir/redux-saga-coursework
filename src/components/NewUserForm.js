import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class NewUserForm extends Component {
  initialState = {
    firstName: "",
    lastName: "",
  };
  state = this.initialState;

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderInput("First name", "firstName", this.state.firstName)}
        {this.renderInput("Last name", "lastName", this.state.lastName)}
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Submit
          </Button>
        </FormGroup>
      </Form>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  };

  renderInput = (label, name, value) => {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input
          required
          placeholder={label}
          onChange={this.handleInputChange}
          {...{ name, value }}
        />
      </FormGroup>
    );
  };

  handleInputChange = (e, fieldName) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}
