import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderInput("First name", "firstName")}
        {this.renderInput("Last name", "lastName")}
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
  };

  renderInput = (label, name) => {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input
          required
          placeholder={label}
          name={name}
          value={this.state[{ name }]}
          onChange={this.handleInputChange}
        />
      </FormGroup>
    );
  };

  handleInputChange = (e, fieldName) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}
