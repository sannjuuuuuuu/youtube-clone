import React from 'react';
import videos from '../assets/videos';
import VideoCard from '../components/VideoCard';

const Home = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-md-4 mb-4">
            <VideoCard {...video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
