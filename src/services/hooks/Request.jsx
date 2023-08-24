import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(urls) {
  const [datas, setDatas] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (urls.length === 0) return;
    setLoading(true);
    async function fetchData() {
      try {
        // Fetch all datas from urls[]
        // Add key to identify the resources
        const responses = await Promise.all(
          urls.map(async ({ url, key }) => {
            return {
              datas: await axios.get(url),
              key,
            };
          })
        );
        // Format datas response
        let datas = responses.map(({ datas, key }) => {
          return {
            [key]: datas.data.data,
          };
        });
        // console.log(datas);
        datas = Object.assign(...datas);
        setDatas(datas);
        // console.log(datas);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { datas, isLoading, error };
}
