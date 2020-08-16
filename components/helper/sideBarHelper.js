const SideHelper = (content, type, nextLink = false, nextId) => {
	let refPath;
	let endpoint;
	let contentLink;

	const {
		id,
		headlineImage,
		headlineImageAlt,
		headlineImagePath,
		headlineImageCrop,
		headlineImageCropInfo,
		headline,
		category,
		kicker,
		urlDescription,
	} = content;
	const contentId = nextLink ? nextId : id;
	if (type === "article") {
		refPath = `/[category]/[url]/article/[id]`;
		endpoint = "";
	} else if (type === "quiz") {
		refPath = `/[category]/[url]/quiz/[quizId]/questions/[questionId]`;
		endpoint = `questions/opening`;
	} else if (type === "slideshow") {
		refPath = `/[category]/[url]/slideshow/[slideId]/slides/[slideContentId]`;
		endpoint = `slides/opening`;
	}

	contentLink = `/${category}/${urlDescription}/${type}/${contentId}/${endpoint}`;
	return {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		kicker,
		urlDescription,
		refPath,
		contentLink,
		headlineImagePath,
		headlineImageCrop,
		headlineImageCropInfo,
	};
};

export default SideHelper;
