import { formatDistanceToNow } from 'date-fns'

export const BlogCard = ({ avatar, description, name, postedAt, poster, tag, title }) => {
	return (
		<div>
			<div>
				<div>
					<img src={poster} alt='card__image' />
				</div>
				<div>
					<div>
						<h2>{tag}</h2>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>

					<div>
						<img src={avatar} alt={name} />
						<div>
							<p>{name}</p>
							<p>{formatDistanceToNow(new Date(postedAt), { addSuffix: true })}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
