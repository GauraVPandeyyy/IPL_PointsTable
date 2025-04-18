import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com/match/4838/scorecard";
const HEADERS = {
  "x-rapidapi-key": "b27555826bmsh99ee9fbcab8e2a1p18ee07jsn2bfd85ad778c",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

export const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `https://cricket-live-line1.p.rapidapi.com/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("Points table data", response.data);
console.log("from api.js");

    if (!response.data?.status || !response.data?.data?.A) {
      throw new Error("Invalid points table data format");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      loss: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("Error fetching the data");
    throw error;
  }
};


