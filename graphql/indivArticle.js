import gql from "graphql-tag";

export const ARTICLE = gql`
	query GetProductionArticle($id: ID!) {
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
export const ADVERT_ARTICLE = `
	query GetProductionArticle($id: ID!) {
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
export const NEXT_ARTICLE = `
	query ListProductionArticles($filter: ModelProductionArticleFilterInput!, $limit: Int) {
		listProductionArticles(filter: $filter, limit: $limit) {
			items {
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
			nextToken
		}
	}
`;
