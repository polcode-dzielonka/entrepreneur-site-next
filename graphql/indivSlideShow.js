import gql from "graphql-tag";

export const SLIDESHOW = gql`
	query GetProductionSlideShow($id: String!) {
		getProductionSlideShow(id: $id) {
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
