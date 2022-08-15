import { useEffect, useState } from "react";
import { getAnimes } from "../helpers/getAnimes";

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
      <ul>
        {
          animes.map(anime => (
            <div key={anime.id}>
              <img src={anime.image} alt={anime.title} />
              <li>{anime.title}</li>
              <p>{anime.description}</p>
            </div>
          ))
        }
      </ul>
    </>
  )
}
