import { formatDistanceToNow } from "date-fns";
import s from "./BlogCard.module.css";

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
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className="">
          <img className={s.img} src={poster} alt="card__image" />
        </div>
        <div className={s.content}>
          <div>
            <h2 className={s.tag}>{tag}</h2>
            <h3 className={s.title}>{title}</h3>
            <p className={s.desc}>{description}</p>
          </div>

          <div className={s.author}>
            <img className={s.avatar} src={avatar} alt={name} />
            <div>
              <p className={s.name}>{name}</p>
              <p>
                {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
