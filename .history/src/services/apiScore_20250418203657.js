// import axios from "axios";
// const API_URL = "https://cricket-live-line1.p.rapidapi.com/match/4838/scorecard";
// const HEADERS = {
//   "x-rapidapi-key": "b27555826bmsh99ee9fbcab8e2a1p18ee07jsn2bfd85ad778c",
//   "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
// };

// export const getPointsTable = async () => {
//   const options = {
//     method: "GET",
//     url: `https://cricket-live-line1.p.rapidapi.com/match/4838/scorecard`,
//     headers: HEADERS,
//   };

//   try {
//     const response = await axios.request(options);
//     console.log("Live Score data", response.data);
//     console.log("from apiScore.js");

//     if (!response.data?.status || !response.data?.scorecard) {
//       throw new Error("Invalid Live Score data format");
//     }

//     return {
//       batting_team: response.data.live_score.batting_team,
//       bowling_team: response.data.live_score.bowling_team,
//       short_name: response.data.live_score.short_name, // if available, else use team1/team2 logic
//       score: response.data.live_score.score, // e.g. "142/6"
//       overs: response.data.live_score.overs, // e.g. "18.3"
//     };
//   } catch (error) {
//     console.error("Error fetching the data");
//     throw error;
//   }
// };


