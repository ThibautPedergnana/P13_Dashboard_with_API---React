import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(urls, isMocked = false) {
  const [datas, setDatas] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (urls.length === 0) return;
    setLoading(true);
    async function fetchDatas() {
      try {
        // Fetch all datas from urls[]
        // Add key to identify the resources
        let responses = await Promise.all(
          urls.map(async ({ url, key }) => {
            const datas = await axios.get(url);
            return {
              [key]: datas.data.data,
            };
          })
        );

        responses = Object.assign(...responses);

        setDatas(responses);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDatas();
  }, []);

  return { datas, isLoading, error };
}
