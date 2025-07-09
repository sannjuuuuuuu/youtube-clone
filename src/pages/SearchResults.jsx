import React from 'react';
import { useSearchParams } from 'react-router-dom';
import videos from '../assets/videos';
import VideoCard from '../components/VideoCard';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const results = videos.filter((v) =>
    v.title.toLowerCase().includes(query) || v.channel.toLowerCase().includes(query)
  );

  return (
    <div className="container mt-4">
      <h5>Search Results for: "{query}"</h5>
      <div className="row">
        {results.length > 0 ? (
          results.map((video) => (
            <div key={video.id} className="col-md-4 mb-4">
              <VideoCard {...video} />
            </div>
          ))
        ) : (
          <p className="text-danger">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
