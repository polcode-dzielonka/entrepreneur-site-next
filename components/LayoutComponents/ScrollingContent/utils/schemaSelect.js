const schemaType = (type, data) => {
	switch (type) {
		case "article":
			return {
				headlineImage: data.headlineImage,
				headlineImageAlt: data.headlineImageAlt,
				headlineImageCrop: data.headlineImageCrop,
				headlineImageCropInfo: data.headlineImageCropInfo,
				headline: data.headline,
				category: data.category,
				kicker: data.kicker,
			};
		case "quiz":
			return {
				headlineImage: data.headlineImage,
				headlineImageAlt: data.headlineImageAlt,
				headlineImageCrop: data.headlineImageCrop,
				headlineImageCropInfo: data.headlineImageCropInfo,
				headline: data.title,
				category: data.category,
				kicker: data.blurb,
			};
		case "slideshow":
			return {
				headlineImage: data.headlineImage,
				headlineImageAlt: data.headlineImageAlt,
				headlineImageCrop: data.headlineImageCrop,
				headlineImageCropInfo: data.headlineImageCropInfo,
				headline: data.title,
				category: data.category,
				kicker: data.blurb,
			};
		default:
			return null;
	}
};

export default schemaType;
