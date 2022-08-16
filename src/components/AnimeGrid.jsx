
import { useFetchAnimes } from "../hooks/useFetchAnimes";
import { AnimeGridItem } from "./AnimeGridItem";

export const AnimeGrid = ({category}) => {

  const {animes, isLoading} = useFetchAnimes(category);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
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
