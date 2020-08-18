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
		$nextToken: String
		$sortIndex: String
	) {
		listProductionArticles(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headline
				headlineImageCrop
				headlineImageCropInfo
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;

export const LATEST = /* GraphQL */ `
	query ListProductionArticles(
		$id: String
		$filter: CreateProductionArticleInput
		$limit: Int
		$nextToken: String
		$sortIndex: String
	) {
		listProductionArticles(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;

export const QUIZ = /* GraphQL */ `
	query ListProductionQuizs(
		$filter: CreateProductionQuizInput
		$limit: Int
		$id: String
		$nextToken: String
		$sortIndex: String
	) {
		listProductionQuizs(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;
export const SLIDE = /* GraphQL */ `
	query ListProductionSlideshows(
		$filter: CreateProductionSlideshowInput
		$limit: Int
		$id: String
		$nextToken: String
		$sortIndex: String
	) {
		listProductionSlideshows(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				showHeadlineSlide
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;

export const LATEST_HEADLINES = /* GraphQL */ `
	query ListProductionArticles(
		$filter: CreateProductionArticleInput
		$limit: Int
		$id: String
		$nextToken: String
		$sortIndex: String
	) {
		listProductionArticles(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;

export const LATEST_QUIZ = /* GraphQL */ `
	query ListProductionQuizs(
		$filter: CreateProductionQuizInput
		$limit: Int
		$nextToken: String
		$sortIndex: String
		$id: String
	) {
		listProductionQuizs(
			id: $id
			filter: $filter
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;

export const LATEST_SLIDE = /* GraphQL */ `
	query ListProductionSlideshows(
		$id: String
		$limit: Int
		$nextToken: String
		$sortIndex: String
	) {
		listProductionSlideshows(
			id: $id
			limit: $limit
			nextToken: $nextToken
			sortIndex: $sortIndex
		) {
			items {
				id
				headlineImage
				headlineImageAlt
				headlineImagePath
				headlineImageCrop
				headlineImageCropInfo
				headline
				showHeadlineSlide
				category
				kicker
				urlDescription
			}
			nextToken
			sortIndex
		}
	}
`;
