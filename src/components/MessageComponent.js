import React, { Component } from "react";
import { Alert } from "react-bootstrap";
export default class MessageComponent extends Component {
  render() {
      const {data}= this.props
    return (
      <div style={{marginTop:20}}>
        {data.map((item, index) => {
          return (
            <Alert key={index} variant={"primary"}>
              {item.id} : {item.content}
            </Alert>
          );
        })}
      </div>
    );
  }
}
