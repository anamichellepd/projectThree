import axios from "axios";

export default {
  // Gets all logs
  getLogs: function () {
    return axios.get("/api/logs");
  },
  // Gets the log with the given id
  getLog: function (id) {
    return axios.get("/api/logs/" + id);
  },
  // Deletes the log with the given id
  deleteLog: function (id) {
    return axios.delete("/api/logs/" + id);
  },
  // Saves a log to the database
  saveLog: function (logData) {
    console.log("logData", logData);

    return axios.post("/api/log", { bodyText: logData });
  },
};
