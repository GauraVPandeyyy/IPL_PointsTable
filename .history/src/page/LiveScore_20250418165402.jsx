import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LiveScoreCard from '../components/LiveScoreCard';

const LiveScore = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const fetchLiveScore = async () => {
      try {
        const res = await axios.get('/api/score-endpoint'); // <-- Change to your actual endpoint
        setMatchData(res.data.data);
      } catch (err) {
        console.error('Error fetching live score:', err);
      }
    };

    fetchLiveScore();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Live Match Score</h1>
      <LiveScoreCard matchData={matchData} />
    </div>
  );
};

export default LiveScore;
