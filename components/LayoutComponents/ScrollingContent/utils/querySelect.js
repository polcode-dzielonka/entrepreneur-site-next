import {
	LATEST_HEADLINES,
	LATEST_QUIZ,
	LATEST_SLIDE,
} from "../../../../graphql/headline";

const querySelect = type => {
	switch (type) {
		case "article":
			return [
				LATEST_HEADLINES,
				"listProductionArticles",
				"ListProductionArticles",
			];
		case "quiz":
			return [LATEST_QUIZ, "listProductionQuizs", "ListProductionQuizs"];
		case "slideshow":
			return [
				LATEST_SLIDE,
				"listProductionSlideshows",
				"ListProductionSlideshows",
			];
		default:
			return null;
	}
};

export default querySelect;
