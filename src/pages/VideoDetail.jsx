import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import videos from '../assets/videos';
import Comments from '../components/Comment';

const VideoDetails = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  if (!video) return <div className="container mt-4 text-danger">❌ Video not found.</div>;

  const formatViews = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Main Video */}
        <div className="col-md-8 mb-4">
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
          <h5>{video.title}</h5>
          <p className="text-muted mb-1">{video.channel} • {formatViews(video.views)} views</p>
          <div className="d-flex align-items-center gap-2 mb-3">
            <button className="btn btn-sm btn-outline-success" onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
            <button className="btn btn-sm btn-outline-primary">🔔 Subscribe</button>
          </div>
          <p>{video.description}</p>
        </div>

        {/* Related Videos (Static for now) */}
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
