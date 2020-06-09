export const ALL_POSTS_QUERY = /* GraphQL */ `
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
export const HEADLINES = /* GraphQL */ `
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
		$id: String
	) {
		listProductionArticles(id: $id, filter: $filter, limit: $limit) {
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

export const LATEST = /* GraphQL */ `
	query ListProductionArticles(
		$id: String
		$filter: CreateProductionArticleInput
		$limit: Int
	) {
		listProductionArticles(id: $id, filter: $filter, limit: $limit) {
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

export const QUIZ = /* GraphQL */ `
	query ListProductionQuizs($filter: CreateProductionQuizInput, $limit: Int) {
		listProductionQuizs(filter: $filter, limit: $limit) {
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
export const SLIDE = /* GraphQL */ `
	query ListProductionSlideshows(
		$filter: CreateProductionSlideshowInput
		$longForm: String
		$limit: Int
	) {
		listProductionSlideshows(
			filter: $filter
			limit: $limit
			longForm: $longForm
		) {
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

export const LATEST_HEADLINES = /* GraphQL */ `
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
		$id: String
		$nextToken: String
	) {
		listProductionArticles(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
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

export const LATEST_QUIZ = /* GraphQL */ `
	query ListProductionQuizs(
		$filter: CreateProductionQuizInput
		$limit: Int
		$nextToken: String
	) {
		listProductionQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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

export const LATEST_SLIDE = /* GraphQL */ `
	query ListProductionSlideshows(
		$limit: Int
		$nextToken: String
		$longForm: String
	) {
		listProductionSlideshows(
			limit: $limit
			nextToken: $nextToken
			longForm: $longForm
		) {
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
