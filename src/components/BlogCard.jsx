export const BlogCard = ({
  avatar,
  description,
  name,
  postedAt,
  poster,
  tag,
  title,
}) => {
  // const { avatar, description, name, postedAt, poster, tag, title } = article;
  // const {
  //   article: { avatar, description, name, postedAt, poster, tag, title },
  // } = props;
  return (
    <>
      <div>
        <div>
          <img src={poster} alt="card__image" />
        </div>
        <div>
          <h2>{tag}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <div>
            <img src={avatar} alt={name} />
            <div>
              <p>{name}</p>
              <p>{postedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
