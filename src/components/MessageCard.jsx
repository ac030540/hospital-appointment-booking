import React from 'react';
import 'tachyons';

// This component displays the error message on screen
// To display the error, you need to pass errorMessage as prop to this component

const MessageCard = ({
  errorMessage, messageType,
}) => (
  <div
    className={messageType}
  >
    <p className="tc pa2">
      {errorMessage}
    </p>
  </div>
);

export default MessageCard;
