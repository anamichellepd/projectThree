import axios from "axios";

export default {
  // Gets all logs
  getLogs: async function (token) {
    console.log(token);

    return axios({
      method: "get",
      url: "/api/logs",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
  getpastlogs: function (id, token) {
    console.log("id", id);
    return axios({
      method: "get",
      url: "/past/" + id,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // Saves a log to the database
  saveLog: function (id, token) {
    console.log("id", id);

    return axios({
      method: "post",
      url: "/api/log",
      data: {
        bodyText: id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
