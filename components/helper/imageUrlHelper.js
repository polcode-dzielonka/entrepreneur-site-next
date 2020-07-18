export const newImageUrl = originalImagePath => {
	const startsWith = originalImagePath.charAt(0) === "/" ? "" : "/";
	const cloudfrontUrl = `${process.env.CLOUDFRONT_IMAGE_DOMAIN}${startsWith}${originalImagePath}`;
	return cloudfrontUrl;
};

export const getImagePath = longImageUrl => {
	return longImageUrl.replace(/^.*\/\/[^\/]+/, "");
};
