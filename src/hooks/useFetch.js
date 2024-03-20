/**
 * Custom React Hook to fetch data from the API.
 *
 * @module useFetch
 *
 * @param {object} configObj - A configuration object for the Fetch operation, which includes:
 * @param {object} configObj.axiosInstance - The axios instance to use for the HTTP request.
 * @param {string} configObj.method - The HTTP method to use.
 * @param {string} configObj.url - The URL to send the request to.
 * @param {object} [configObj.config] - Optional configuration options for the axios call.
 *
 * @returns {object} - An object that contains:
 * @returns {any} object.resData - The response data from the API,
 * @returns {string} object.error - An error message if there's an error during the fetch,
 * @returns {boolean} object.loading - The loading state: `true` if the request is in progress, `false` otherwise.
 *
 * @example
 *
 * const { resData, error, loading } = useFetch({
 *   axiosInstance: axios,
 *   method: 'GET',
 *   url: '/api/data',
 * });
 */
//My notes above/**

import { useState, useEffect } from "react";

const useFetch = (configObj) => {
  const { axiosInstance, method, url, config = {} } = configObj;

  const [resData, setResData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const configString = JSON.stringify(config);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...JSON.parse(configString),
          signal: controller.signal,
        });
        setResData(res.data);
        setError("");
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [axiosInstance, method, url, configString]);

  return { resData, error, loading };
};

export default useFetch;
