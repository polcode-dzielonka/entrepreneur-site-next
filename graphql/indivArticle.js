export const ARTICLE = /* GraphQL */ `
	query GetProductionArticle($id: String!) {
		getProductionArticle(id: $id) {
			id
			authorId
			authorName
			category
			viewCount
			development
			production
			overview
			developmentId
			content
			schedule
			original
			scheduleTime
			createdAt
			updatedAt
		}
	}
`;
export const ADVERT_ARTICLE = /* GraphQL */ `
	query GetProductionArticle($id: String!) {
		getProductionArticle(id: $id) {
			id
			authorId
			authorName
			category
			viewCount
			development
			production
			overview
			developmentId
			schedule
			original
			scheduleTime
			createdAt
			updatedAt
		}
	}
`;
export const NEXT_ARTICLE = /* GraphQL */ `
	query ListProductionArticles($limit: Int, $id: String) {
		listProductionArticles(limit: $limit, id: $id) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImageSrcset
				headline
				category
				kicker
				urlDescription
			}
			nextToken
		}
	}
`;
