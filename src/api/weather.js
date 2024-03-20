/**
 * @fileoverview This module sets up an axios instance for making HTTP requests to the OpenWeatherMap API.
 * It sets the base URL, default headers, and default parameters for the requests.
 * The API key for the OpenWeatherMap API is retrieved from the environment variables.
 * 
 * @author Your Name
 * @requires axios
 */
//My notes above
import axios from "axios";
const BASE_URL = "https://api.openweathermap.org/";
const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    appid: API_KEY,
  },
});
