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

  // useEffect(() => {
  //   fetchScore();
  //   const interval = setInterval(fetchScore, 30000); // refresh every 30s
  //   return () => clearInterval(interval);
  // }, []);

  if (loading) return <div className="text-center p-4">Loading live score...</div>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 my-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">🏏 Live Score</h2>
      
      <div className="mb-2">
        <p className="font-semibold">{scoreData.teamAName} vs {scoreData.teamBName}</p>
        <p>{scoreData.teamAScore} ({scoreData.teamAOvers} overs)</p>
        <p>{scoreData.teamBScore} ({scoreData.teamBOvers} overs)</p>
        <p className="text-green-700 mt-2">{scoreData.status}</p>
      </div>

      {/* Batting Details */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Batting</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-2 py-1">Batsman</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">B</th>
                <th className="px-2 py-1">4s</th>
                <th className="px-2 py-1">6s</th>
                <th className="px-2 py-1">SR</th>
              </tr>
            </thead>
            <tbody>
              {scoreData.batting?.map((player, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{player.batsmanName}</td>
                  <td className="px-2 py-1">{player.runs}</td>
                  <td className="px-2 py-1">{player.balls}</td>
                  <td className="px-2 py-1">{player.fours}</td>
                  <td className="px-2 py-1">{player.sixes}</td>
                  <td className="px-2 py-1">{player.strikeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bowling Details */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Bowling</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="px-2 py-1">Bowler</th>
                <th className="px-2 py-1">O</th>
                <th className="px-2 py-1">M</th>
                <th className="px-2 py-1">R</th>
                <th className="px-2 py-1">W</th>
                <th className="px-2 py-1">Eco</th>
              </tr>
            </thead>
            <tbody>
              {scoreData.bowling?.map((player, index) => (
                <tr key={index} className="border-b">
                  <td className="px-2 py-1">{player.bowlerName}</td>
                  <td className="px-2 py-1">{player.overs}</td>
                  <td className="px-2 py-1">{player.maidens}</td>
                  <td className="px-2 py-1">{player.runs}</td>
                  <td className="px-2 py-1">{player.wickets}</td>
                  <td className="px-2 py-1">{player.economy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveScore;
