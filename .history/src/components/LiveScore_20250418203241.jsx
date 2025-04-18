import { useState, useEffect } from "react";
import { getScoreTable } from "../services/apiScore";
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
        setError("Kya yaar We are unable to load the data");
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

<div className="max-w-md mx-auto mt-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {batting_team} 🆚 {bowling_team}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Live Score Update
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-2">
        <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          {score}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          Overs: <span className="font-semibold">{overs}</span>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Playing: <span className="font-medium">{short_name}</span>
        </div>
      </div>
    </div>
  );
};

