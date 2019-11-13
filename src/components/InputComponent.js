import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class InputComponent extends Component {
  render() {
    const { name, placeholder, type, onChange, value } = this.props;
    return (
      <div>
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          style={{ marginTop: 10 }}
          value={value}
        />
      </div>
    );
  }
}
