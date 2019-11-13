import React, { Component } from "react";
import MessageComponent from "./components/MessageComponent";
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";
import { SERVER_SEND_DATA } from "./api/keyURL";
var moduleSocket = require('./api/index.js');
var s;
class App extends Component {
  constructor(props) {
    super(props);
    s = this;
    let arr = [];
    moduleSocket.SOCKET
    moduleSocket.SOCKET.on(SERVER_SEND_DATA, data => {
      arr.push(data)
      s.setState({listMessage:arr})
    });
  }
  state = {
    listMessage: [],
    inputMessage: ""
  };
  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  btn_send = () => {
    moduleSocket.client_send_data(this.state.inputMessage)
    this.setState({ inputMessage: "" });
  };
  render() {
    const { listMessage, inputMessage } = this.state;
    return (
      <div className="container">
        <InputComponent
          type={"text"}
          placeholder={"Enter message"}
          name={"inputMessage"}
          onChange={this.onHandleChange}
          value={inputMessage}
        />
        <ButtonComponent onClick={() => this.btn_send()} />
        <MessageComponent data={listMessage} />
      </div>
    );
  }
}

export default App;
