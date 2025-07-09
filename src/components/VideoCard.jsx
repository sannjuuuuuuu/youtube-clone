import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ id, title, thumbnail, channel, profile, views, posted }) => {
  const formatViews = (num) => {
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  };

  const timeAgo = (date) => {
    const postedDate = new Date(date);
    const now = new Date();
    const diff = Math.floor((now - postedDate) / (1000 * 60 * 60 * 24));
    if (diff < 1) return 'Today';
    if (diff < 30) return `${diff} day${diff > 1 ? 's' : ''} ago`;
    if (diff < 365) return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? 's' : ''} ago`;
  };

  return (
    <Link to={`/video/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <img src={thumbnail} alt={title} className="card-img-top" />
        <div className="card-body d-flex">
          <img src={profile} alt="channel" className="rounded-circle me-3" width="40" height="40" />
          <div>
            <h6 className="card-title mb-1">{title}</h6>
            <p className="card-text small text-muted mb-0">{channel}</p>
            <p className="card-text small text-muted">{formatViews(views)} views • {timeAgo(posted)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
