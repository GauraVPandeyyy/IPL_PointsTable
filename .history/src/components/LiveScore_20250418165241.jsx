import React from 'react';

const LiveScoreCard = ({ matchData }) => {
  if (!matchData) return null;

  return (
    <div className="p-4">
      <div className="text-center bg-green-100 text-green-900 p-3 rounded-lg shadow">
        <h2 className="text-xl font-bold">{matchData.result}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[1, 2].map((inningNum) => {
          const team = matchData.scorecard[inningNum]?.team;
          return (
            <div key={inningNum} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-3">
                <img src={team.flag} alt={team.name} className="w-10 h-10" />
                <h3 className="text-lg font-bold">{team.name} ({team.short_name})</h3>
              </div>
              <p className="mt-2 font-semibold text-md text-gray-800">
                Score: {team.score}/{team.wicket} in {team.over} overs
              </p>
              <p className="text-sm text-gray-500">Extras: {team.extras}</p>
            </div>
          );
        })}
      </div>

      {/* Optional: Top Batsman */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Top Batsmen (RCB Innings)</h4>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {matchData.scorecard[1].batsman.slice(0, 3).map((batsman, i) => (
            <li key={i}>
              {batsman.name}: {batsman.run} ({batsman.ball}) – SR: {batsman.strike_rate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveScoreCard;
