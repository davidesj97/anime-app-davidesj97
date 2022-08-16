export const getAnimes = async (category) => {
  const BaseURL = `https://kitsu.io/api/edge/anime`
  const URL = category ? `${BaseURL}?filter[text]=${category}` : BaseURL;
  const res = await fetch(URL);
  const { data } = await res.json();

  const animes = data.map(anime => ({
    id: anime.id,
    title: anime.attributes.titles.en_jp,
    image: anime.attributes.posterImage.small,
    description: anime.attributes.description,
    startDate: anime.attributes.startDate,
    endDate: anime.attributes.endDate,
  }))
  return animes
}