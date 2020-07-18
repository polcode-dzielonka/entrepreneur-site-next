export const newImageUrl = originalImagePath => {
	const { CLOUDFRONT_IMAGE_DOMAIN } = process.env;
	const startsWith = originalImagePath.charAt(0) === "/" ? "" : "/";
	const cloudfrontUrl = `${CLOUDFRONT_IMAGE_DOMAIN}${startsWith}${originalImagePath}`;
	return cloudfrontUrl;
};

export const getImagePath = longImageUrl => {
	return longImageUrl.replace(/^.*\/\/[^\/]+/, "");
};
