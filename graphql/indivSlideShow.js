export const SLIDESHOW = /* GraphQL */ `
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
