import { useState, useEffect } from "react";
import axios from "axios";
import {
  getUserActivity,
  getUserAverageSession,
  getUserById,
  getUserPerformance,
} from "../datas-mocked.service";

export function useMock(resources, idUser) {
  const [datas, setDatas] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMockedResource = (resource) => {
    switch (resource) {
      case "user":
        return getUserById(idUser);
      case "activities":
        return getUserActivity(idUser);
      case "average":
        return getUserAverageSession(idUser);
      case "performances":
        return getUserPerformance(idUser);

      default:
        return null;
    }
  };

  useEffect(() => {
    if (resources.length === 0) return;
    setLoading(true);
    function fetchDatas() {
      try {
        // Fetch all datas from resources[]
        const results = resources.map((resource) => {
          return { [resource]: fetchMockedResource(resource) };
        });
        setDatas(Object.assign(...results));
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
