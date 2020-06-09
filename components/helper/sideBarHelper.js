const SideHelper = (content, type, nextLink = false, nextId) => {
	let refPath;
	let endpoint;
	let contentLink;

	const {
		id,
		headlineImage,
		headlineImageAlt,
		headlineImageSrcset,
		headline,
		category,
		kicker,
		urlDescription,
	} = content;
	const contentId = nextLink ? nextId : id;
	if (type === "article") {
		refPath = `/[url]/article/[id]`;
		endpoint = "";
	} else if (type === "quiz") {
		refPath = `/[url]/quiz/[quizId]/questions/[questionId]`;
		endpoint = `questions/opening`;
	} else if (type === "slideshow") {
		refPath = `/[url]/slideshow/[slideId]/slides/[slideContentId]`;
		endpoint = `slides/opening`;
	}

	contentLink = `/${urlDescription}/${type}/${contentId}/${endpoint}`;
	return {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		kicker,
		urlDescription,
		refPath,
		contentLink,
		headlineImageSrcset,
	};
};

export default SideHelper;
