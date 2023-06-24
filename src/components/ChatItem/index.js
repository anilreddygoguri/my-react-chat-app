import "./index.css";

const ChatItem = (props) => {
  const { eachMessageDetails } = props;
  const { name, messageInput } = eachMessageDetails;
  return (
    <li className="message-list">
      <div className="message-container">
        <p className="name">{name}</p>
        <p className="message">{messageInput}</p>
      </div>
    </li>
  );
};
export default ChatItem;
