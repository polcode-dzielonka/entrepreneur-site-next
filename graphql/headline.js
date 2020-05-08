import gql from "graphql-tag";

export const ALL_POSTS_QUERY = gql`
	query GetProductionSite($id: String!) {
		getProductionSite(id: $id) {
			id
			name
			description
			type
			development
			production
			categories
			developmentId
			# articles {
			# 	items {
			# 		id
			# 		authorId
			# 		authorName
			# 		category
			# 		viewCount
			# 		development
			# 		production
			# 		overview
			# 		developmentId
			# 		content
			# 		schedule
			# 		original
			# 		scheduleTime
			# 		createdAt
			# 		updatedAt
			# 	}
			# 	nextToken
			# }
			# quiz {
			# 	items {
			# 		id
			# 		authorId
			# 		authorName
			# 		category
			# 		viewCount
			# 		development
			# 		production
			# 		overview
			# 		developmentId
			# 		questions
			# 		original
			# 		numQuestions
			# 		schedule
			# 		scheduleTime
			# 		createdAt
			# 		updatedAt
			# 	}
			# 	nextToken
			# }
			# slideShows {
			# 	items {
			# 		id
			# 		authorId
			# 		authorName
			# 		category
			# 		viewCount
			# 		development
			# 		production
			# 		overview
			# 		developmentId
			# 		slides
			# 		numSlides
			# 		original
			# 		schedule
			# 		scheduleTime
			# 		createdAt
			# 		updatedAt
			# 	}
			# 	nextToken
			# }
			createdAt
			updatedAt
		}
	}
`;
export const HEADLINES = gql`
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
	) {
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

export const LATEST = gql`
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
	) {
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

export const QUIZ = gql`
	query ListProductionQuizs($filter: CreateProductionQuizInput, $limit: Int) {
		listProductionQuizs(filter: $filter, limit: $limit) {
			items {
				id
				authorId
				authorName
				viewCount
				development
				production
				overview
				developmentId
				questions
				original
				numQuestions
				createdAt
				updatedAt
				tags
				category
				mainHeadline
				sideHeadline
				bottomHeadline
				shareCount
			}
			nextToken
		}
	}
`;
export const SLIDE = gql`
	query ListProductionSlideshows(
		$filter: CreateProductionSlideshowInput
		$limit: Int
	) {
		listProductionSlideshows(filter: $filter, limit: $limit) {
			items {
				id
				authorId
				authorName
				viewCount
				development
				production
				overview
				developmentId
				slides
				original
				numSlides
				createdAt
				updatedAt
				tags
				category
				mainHeadline
				sideHeadline
				bottomHeadline
				shareCount
			}
			nextToken
		}
	}
`;

export const LATEST_HEADLINES = /* GraphQL */ `
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
		$nextToken: String
	) {
		listProductionArticles(
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
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

export const LATEST_QUIZ = /* GraphQL */ `
	query ListProductionQuizs(
		$filter: CreateProductionQuizInput
		$limit: Int
		$nextToken: String
	) {
		listProductionQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				authorId
				authorName
				viewCount
				development
				production
				overview
				developmentId
				questions
				original
				numQuestions
				createdAt
				updatedAt
				tags
				category
				mainHeadline
				sideHeadline
				bottomHeadline
				shareCount
			}
			nextToken
		}
	}
`;

export const LATEST_SLIDE = /* GraphQL */ `
	query ListProductionSlideshows($limit: Int, $nextToken: String) {
		listProductionSlideshows(limit: $limit, nextToken: $nextToken) {
			items {
				id
				authorId
				authorName
				viewCount
				development
				production
				overview
				developmentId
				slides
				original
				numSlides
				createdAt
				updatedAt
				tags
				category
				mainHeadline
				sideHeadline
				bottomHeadline
				shareCount
			}
			nextToken
		}
	}
`;
