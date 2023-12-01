import { formatDistanceToNow } from 'date-fns'

import {
	StyledAuthorInfo,
	StyledAvatar,
	StyledCard,
	StyledContent,
	StyledDesc,
	StyledImg,
	StyledInfoWrapper,
	StyledName,
	StyledWrapper,
} from './BlogCard.styled'
import { Flex } from '../../SharedUI/Global'

export const BlogCardStyled = ({ avatar, description, name, postedAt, poster, tag, title }) => {
	return (
		<StyledWrapper>
			<StyledCard>
				<div>
					<StyledImg src={poster} alt='card__image' />
				</div>
				<StyledContent>
					<StyledInfoWrapper>
						<h2>{tag}</h2>
						<h3>{title}</h3>
						<StyledDesc $textColor='green'>{description}</StyledDesc>
					</StyledInfoWrapper>

					<StyledAuthorInfo>
						<StyledAvatar src={avatar} alt={name} />
						<div>
							<StyledName>{name}</StyledName>
							<p>{formatDistanceToNow(new Date(postedAt), { addSuffix: true })}</p>
						</div>
						<Flex $direction='column'>
							<h2>ewqeqw</h2>
							<h2>ewqeqw</h2>
							<h2>ewqeqw</h2>
						</Flex>
					</StyledAuthorInfo>
				</StyledContent>
			</StyledCard>
		</StyledWrapper>
	)
}
