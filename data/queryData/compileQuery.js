import { QUIZ, SLIDE, HEADLINES, LATEST } from "../../graphql/headline";
import { ARTICLE } from "../../graphql/indivArticle";
// Fetch data from external API

export const HEADLINE_QUERY = {
	query: HEADLINES,
	variables: {
		filter: { mainHeadline: true },
		limit: 4,
	},
	operationName: "ListProductionArticles",
};
export const LATEST_QUERY = {
	query: LATEST,
	variables: {
		limit: 10,
	},
	operationName: "ListProductionArticles",
};
export const QUIZ_QUERY = {
	query: QUIZ,
	variables: {
		filter: { mainHeadline: true },
		limit: 5,
	},
	operationName: "ListProductionQuizs",
};
export const SLIDE_LONGFORM_QUERY = {
	query: SLIDE,
	variables: {
		longForm: "true",
		limit: 5,
	},
	operationName: "ListProductionSlideshows",
};

export const MOTIVATION_QUERY = {
	query: HEADLINES,
	variables: {
		filter: { category: "motivation" },
	},
	operationName: "ListProductionArticles",
};

export const NETWORTH_QUERY = {
	query: HEADLINES,
	variables: {
		filter: { category: "networth" },
	},
	operationName: "ListProductionArticles",
};

export const PEOPLE_QUERY = {
	query: HEADLINES,
	variables: {
		filter: { category: "people" },
	},
	operationName: "ListProductionArticles",
};

export const QUOTE_QUERY = {
	query: HEADLINES,
	variables: {
		filter: { category: "quotes" },
	},
	operationName: "ListProductionArticles",
};
