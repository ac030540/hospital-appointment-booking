import React from 'react';
import 'tachyons';

// This component displays the error message on screen
// To display the error, you need to pass errorMessage as prop to this component

const MessageCard = ({
  message, messageType,
}) => (
  <div
    className={messageType}
  >
    <p className="tc pa2">
      {message}
    </p>
  </div>
);

export default MessageCard;
