import React, { useState } from 'react';

const Comments = ({ comments = [] }) => {
  const [allComments, setAllComments] = useState(comments);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (!input.trim()) return;
    const newComment = { id: Date.now(), user: 'You', text: input };
    setAllComments([newComment, ...allComments]);
    setInput('');
  };

  return (
    <div className="mt-4">
      <h6>Comments</h6>
      <div className="mb-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment} className="btn btn-primary mt-2">Post</button>
      </div>
      {allComments.map((c) => (
        <div key={c.id} className="mb-2">
          <strong>{c.user}</strong>
          <p className="mb-1">{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
