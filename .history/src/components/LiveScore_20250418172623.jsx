import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveScore = () => {
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchScore = async () => {
    const options = {
      method: 'GET',
      url: 'https://cricket-live-line1.p.rapidapi.com/match/4838/scorecard',
      params: { matchId: '4838' },
      headers: {
        'X-RapidAPI-Key': 'bac80db236mshbffb59e3a602917p118b40jsn406a7887a76a',
        'X-RapidAPI-Host': 'cricket-live-line1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setScoreData(response.data);
    } catch (error) {
      console.error('Error fetching live score:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScore();
  }, []);

  if (loading) return <div className="text-center p-4">Loading live score...</div>;

  return (

    
    <div className="bg-white shadow-md rounded-xl p-6 my-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">🏏 Live Score</h2>
      {scoreData ? (
        <div>
          <p className="font-semibold">{scoreData.teamAName} vs {scoreData.teamBName}</p>
          <p>{scoreData.teamAScore} - {scoreData.teamAOvers} overs</p>
          <p>{scoreData.teamBScore} - {scoreData.teamBOvers} overs</p>
          <p className="mt-2 text-green-700 font-medium">{scoreData.status}</p>
        </div>
      ) : (
        <p>No live score available.</p>
      )}
    </div>
  );
};

export default LiveScore;
