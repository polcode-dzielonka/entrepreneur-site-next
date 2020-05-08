import gql from "graphql-tag";

export const QUIZ = gql`
	query GetProductionQuiz($id: String!) {
		getProductionQuiz(id: $id) {
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
	}
`;

export const UPDATE_QUIZ = `
	mutation UpdateProductionQuiz($input: UpdateProductionQuizInput!) {
		updateProductionQuiz(input: $input) {
			id
			authorId
			authorName
			viewCount
			development
			production
			questions
			original
			numQuestions
			createdAt
			updatedAt
	
		}
	}
`;
