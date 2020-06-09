import {
	HEADLINE_QUERY,
	LATEST_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
	MOTIVATION_QUERY,
	NETWORTH_QUERY,
	PEOPLE_QUERY,
	QUOTE_QUERY,
} from "./compileQuery";

export const mainHeadlineQuery = [
	HEADLINE_QUERY,
	LATEST_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const motivationHeadlineQuery = [
	MOTIVATION_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const networthHeadlineQuery = [
	NETWORTH_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const peopleHeadlineQuery = [
	PEOPLE_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const quoteHeadlineQuery = [
	QUOTE_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const quizHeadlineQuery = [
	LATEST_QUERY,
	QUIZ_QUERY,
	SLIDE_LONGFORM_QUERY,
];

export const articleQuery = [QUIZ_QUERY, SLIDE_LONGFORM_QUERY];
export const slideShowQuery = [LATEST_QUERY, QUIZ_QUERY, SLIDE_LONGFORM_QUERY];
export const quizQuery = [LATEST_QUERY, QUIZ_QUERY, SLIDE_LONGFORM_QUERY];
