
export const AnimeGridItem = ({title, image, description}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <span>{description}</span>
    </div>
  )
}
