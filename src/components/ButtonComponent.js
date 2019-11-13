import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class ButtonComponent extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <br />
        <Button variant="primary" onClick={() => onClick()}>
          Send
        </Button>
      </div>
    );
  }
}
