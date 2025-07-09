import React from 'react';
import { Link } from 'react-router-dom';

const RelatedVideos = ({ currentId, videos }) => {
  return (
    <div>
      <h5>Related Videos</h5>
      {videos
        .filter((v) => v.id !== currentId)
        .map((video) => (
          <Link key={video.id} to={`/video/${video.id}`} className="d-block text-decoration-none text-dark mb-2">
            <div className="d-flex align-items-center">
              <img src={video.thumbnail} alt={video.title} width="120" className="me-2" />
              <div>
                <h6>{video.title}</h6>
                <small>{video.channel}</small>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RelatedVideos;
