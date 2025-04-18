import { useState, useEffect } from "react";
import { getPointsTable } from "../services/apiScore";
import LoadingSpinner from "./ui/Loader";
export default function LiveScore() {
  const [ScoreTable, setScoreTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScoreTable = async () => {
      try {
        const data = await getScoreTable();
        setScoreTable(data);
        console.log(data);

      } catch (err) {
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };
    fetchScoreTable();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {S.map((team, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center"
        >
          <img src={team.flag} alt={`${team.team} flag`} className="w-16 h-16 mb-3 rounded-full" />

          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{team.team}</h2>

          <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-2">{team.aScore}</p>

          <div className="text-sm text-gray-600 dark:text-gray-300 w-full">
            <div className="flex justify-between mb-1">
              <span>Wins:</span>
              <span>{team.won}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Losses:</span>
              <span>{team.loss}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Points:</span>
              <span>{team.points}</span>
            </div>
            <div className="flex justify-between">
              <span>NRR:</span>
              <span>{team.nrr}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

