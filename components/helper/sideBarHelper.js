const SideHelper = (content, type) => {
	let headlineImage;
	let headlineImageAlt;
	let headline;
	let category;
	let url;
	let endpoint;
	let contentLink;
	let srcset;
	const overview = JSON.parse(content.overview);
	const { id } = content;
	if (type === "article") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].headline;
		category = overview[0].category;
		url = overview[0].url ? overview[0].url : overview[0].urlDescription;
		srcset = overview[0].srcset;
		endpoint = "";
	} else if (type === "quiz") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].title;
		category = overview[0].category;
		url = overview[0].quizUrl
			? overview[0].quizUrl
			: overview[0].urlDescription;
		srcset = overview[0].srcset;
		endpoint = `questions/opening`;
	} else if (type === "slideshow") {
		headlineImage = overview[0].headlineImage;
		headlineImageAlt = overview[0].headlineImageAlt;
		headline = overview[0].title;
		category = overview[0].category;
		url = overview[0].slideUrl
			? overview[0].slideUrl
			: overview[0].urlDescription;
		srcset = overview[0].srcset;
		endpoint = `slides/opening`;
	}

	contentLink = `/${url}/${type}/${id}/${endpoint}`;
	return {
		headlineImage,
		headlineImageAlt,
		headline,
		category,
		url,
		contentLink,
		srcset,
	};
};

export default SideHelper;
