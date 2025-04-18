import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoadingSpinner from "./ui/Loader";
export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
        console.log(data);
        
      } catch (err) {
        setError("We are unable to load the data");
      } finally {
        setLoading(false);
      }
    };
    fetchPointsTable();
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
    // bg-gray-900 text-white py-10 mt-16
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 transition-all duration-300">
      <h3 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">Points Table</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white tracking-wide">Team</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white">P</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white">W</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white">L</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white">Points</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-white">NRR</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {pointsTable.map((iteam, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-indigo-50 transition duration-300`}
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <img
                      src={iteam.flag}
                      alt={iteam.team}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-200"
                    />
                    <span className="font-medium">{iteam.team}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-gray-600 font-semibold">{iteam.played}</td>
                <td className="px-6 py-4 text-center text-green-600 font-semibold">{iteam.won}</td>
                <td className="px-6 py-4 text-center text-red-600 font-semibold">{iteam.loss}</td>
                <td className="px-6 py-4 text-center text-indigo-800 font-bold">{iteam.points}</td>
                <td className="px-6 py-4 text-center text-gray-600">{iteam.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}
