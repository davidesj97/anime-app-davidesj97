import { useEffect, useState } from "react";

import { getAnimes } from "../helpers/getAnimes";
import { AnimeGridItem } from "./AnimeGridItem";

export const AnimeGrid = ({category}) => {

  const [animes, setAnimes] = useState([]);

  const getListAnimes = async () => {
    const newAnimes = await getAnimes(category);
    setAnimes(newAnimes);
  }

  useEffect(() => {
    getListAnimes();
  }, [])


  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {
          animes.map(anime => (
            <AnimeGridItem
              key={anime.id}
              {...anime}
            />
          ))
        }
      </div>
    </>
  )
}
