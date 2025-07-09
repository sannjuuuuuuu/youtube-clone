// src/pages/VideoDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import videos from '../assets/videos';
import Comment from '../components/Comment';

const VideoDetails = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([
    { user: 'Alice', text: 'Great video!' },
    { user: 'Bob', text: 'Very informative. Thanks!' },
  ]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: 'You', text: newComment }]);
      setNewComment('');
    }
  };

  const formatViews = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  };

  if (!video) {
    return <div className="container mt-4 text-danger">❌ Video not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Video Player */}
        <div className="col-md-8 mb-4">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>

          <h5>{video.title}</h5>
          <p className="text-muted mb-1">
            {video.channel} • {formatViews(video.views)} views
          </p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <button className="btn btn-sm btn-outline-success" onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
            <button className="btn btn-sm btn-outline-primary">🔔 Subscribe</button>
          </div>

          <p>{video.description}</p>

          {/* Comments Section */}
          <div className="mt-4">
            <h6>Comments ({comments.length})</h6>
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleAddComment}>Post</button>
            </div>
            {comments.map((comment, index) => (
              <Comment key={index} user={comment.user} text={comment.text} />
            ))}
          </div>
        </div>

        {/* Related Videos */}
        <div className="col-md-4">
          <h6>Related Videos</h6>
          {videos.filter((v) => v.id !== id).map((v) => (
            <div key={v.id} className="d-flex mb-3">
              <img src={v.thumbnail} alt={v.title} width="120" height="70" className="me-2" />
              <div>
                <h6 className="mb-1" style={{ fontSize: '0.9rem' }}>{v.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>{v.channel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
