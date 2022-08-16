import { useEffect, useState } from "react";
import { getAnimes } from "../helpers/getAnimes";

export const useFetchAnimes = (category) => {
  
  const [animes, setAnimes] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const getListAnimes = async () => {
    const newAnimes = await getAnimes(category);
    setAnimes(newAnimes);
    setIsLoading(false);
  }

  useEffect(() => {
    getListAnimes();
  }, [])

  return {
    animes,
    isLoading,
  }

}
