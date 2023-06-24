import { Component } from "react";

import "./index.css";

import ChatItem from "../ChatItem";

import { v4 as uuidv4 } from "uuid";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

class MyChatApp extends Component {
  state = {
    count: 0,
    message: "",
    messageList: [],
  };
  onUpdateMessageField = (event) => {
    this.setState({ message: event.target.value });
  };
  onSendMessage = (event) => {
    event.preventDefault();
    const { message } = this.state;
    const UserName = user_list[Math.ceil(Math.random() * user_list.length - 1)];
    if (message !== "") {
      const newMessage = {
        id: uuidv4(),
        name: UserName,
        messageInput: message,
      };
      this.setState((prevState) => ({
        messageList: [...prevState.messageList, newMessage],
        message: "",
      }));
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  };

  render() {
    const { messageList, count, message } = this.state;

    return (
      <div className="chat-app-bg-container">
        <div className="chat-container">
          <ul className="message-list-container">
            {messageList.map((eachMessage) => (
              <ChatItem key={eachMessage.id} eachMessageDetails={eachMessage} />
            ))}
            <p className="count-heading">
              <span className="count">{count}</span> Count
            </p>
          </ul>
          <hr className="comment-line" />
          <form className="forms" onSubmit={this.onSendMessage}>
            <label htmlFor="message" className="label-name">
              Your Message
            </label>
            <input
              type="text"
              className="message-input-field"
              placeholder="Enter Your Message"
              id="message"
              value={message}
              onChange={this.onUpdateMessageField}
            />
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default MyChatApp;
