import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-key": "60af64af2bmsh2265032cba6c184p1e9ac3jsnca5a6bee2c22",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

// export const getPointsTable = async () => {
//   const options = {
//     method: "GET",
//     url: `${API_URL}/series/336/pointsTable`,
//     headers: HEADERS,
//   };

//   try {
//     const response = await axios.request(options);
//     console.log("Points table data", response.data);

//     if (!response.data?.status || !response.data?.data?.A) {
//       throw new Error("Invalid points table data format");
//     }

//     return response.data.data.A.map((team) => ({
//       team: team.teams,
//       played: team.P,
//       won: team.W,
//       loss: team.L,
//       points: team.Pts,
//       nrr: team.NRR,
//       flag: team.flag,
//     }));
//   } catch (error) {
//     console.error("Error fetching the data");
//     throw error;
//   }
// };


export const getPointsTable = async () => {
  return [
    {
      team: "Chennai Super Kings",
      played: 10,
      won: 7,
      loss: 3,
      points: 14,
      nrr: "+1.234",
      flag: "https://example.com/csk.png"
    },
    {
      team: "Mumbai Indians",
      played: 10,
      won: 5,
      loss: 5,
      points: 10,
      nrr: "+0.543",
      flag: "https://example.com/mi.png"
    }
  ];
};
