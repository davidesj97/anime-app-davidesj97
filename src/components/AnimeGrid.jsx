import { useEffect } from "react";
import { getAnimes } from "../helpers/getAnimes";

export const AnimeGrid = ({category}) => {

  useEffect(() => {
    getAnimes(category)
  }, [])


  return (
    <>
      <h3>{ category }</h3>
      <p>Hola mundo</p>
    </>
  )
}
