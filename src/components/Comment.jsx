import React from 'react';

const Comment = ({ user, text }) => {
  return (
    <div className="mb-2">
      <strong>{user}</strong>
      <p className="mb-1">{text}</p>
      <hr />
    </div>
  );
};

export default Comment;
