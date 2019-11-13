import io from "socket.io-client/dist/socket.io.js";
import { URL_SOCKET, CLIENT_SEND_DATA } from "./keyURL";
const socket = io(URL_SOCKET, { jsonp: false });
var DATA_;
const client_send_data = text => socket.emit(CLIENT_SEND_DATA, text);

module.exports = {
  SOCKET: socket,
  client_send_data: client_send_data,
  DATA: DATA_
};
