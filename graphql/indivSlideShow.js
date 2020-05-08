import gql from "graphql-tag";

export const SLIDESHOW = gql`
	query GetProductionSlideshow($id: String!) {
		getProductionSlideshow(id: $id) {
			id
			authorId
			authorName
			viewCount
			development
			production
			overview
			developmentId
			slides
			numSlides
			original
			schedule
			scheduleTime
			createdAt
			updatedAt
			tags
			category
			mainHeadline
			sideHeadline
			bottomHeadline
			shareCount
		}
	}
`;
