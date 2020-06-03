const SideHelper = (content, type, nextLink = false, nextId) => {
	let headlineImage;
	let headlineImageAlt;
	let headline;
	let category;
	let url;
	let refPath;
	let endpoint;
	let contentLink;
	let srcset;
	let brief;
	const overview = nextLink ? content : JSON.parse(content.overview);
	const { id } = content;
	const contentId = nextLink ? nextId : id;
	if (type === "article") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].headline;
		category = overview[0].category;
		brief = overview[0].kicker;
		url = overview[0].url ? overview[0].url : overview[0].urlDescription;
		refPath = `/[url]/article/[id]`;
		srcset = overview[0].srcset;
		endpoint = "";
	} else if (type === "quiz") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].title;
		category = overview[0].category;
		brief = overview[0].blurb;
		url = overview[0].quizUrl
			? overview[0].quizUrl
			: overview[0].urlDescription;
		refPath = `/[url]/quiz/[quizId]/questions/[questionId]`;
		srcset = overview[0].srcset;
		endpoint = `questions/opening`;
	} else if (type === "slideshow") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].title;
		category = overview[0].category;
		brief = overview[0].blurb;
		url = overview[0].slideUrl
			? overview[0].slideUrl
			: overview[0].urlDescription;
		refPath = `/[url]/slideshow/[slideId]/slides/[slideContentId]`;
		srcset = overview[0].srcset;
		endpoint = `slides/opening`;
	}

	contentLink = `/${url}/${type}/${contentId}/${endpoint}`;
	return {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		brief,
		url,
		refPath,
		contentLink,
		srcset,
	};
};

export default SideHelper;
