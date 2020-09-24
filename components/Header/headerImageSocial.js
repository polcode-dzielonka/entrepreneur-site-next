import { newImageUrl, clean } from "../helper/imageUrlHelper";

const HeaderImageSocial = ({ imagePath, imageCrop, imageCropInfo }) => {
	const cloudfrontUrl = newImageUrl(imagePath);
	// const imageCheck = imagePath || src.indexOf("content-factory-media") > 1;
	let cropParams = null;
	if (imageCrop && imageCropInfo) {
		const parsedInfo =
			typeof imageCropInfo === "string"
				? JSON.parse(imageCropInfo)
				: imageCropInfo;
		cropParams = {
			crop: imageCrop,
			x: parsedInfo.x ? Math.round(parsedInfo.x) : 0,
			y: parsedInfo.y ? Math.round(parsedInfo.y) : 0,
			cropWidth: parsedInfo.width ? Math.round(parsedInfo.width) : null,
			cropHeight: parsedInfo.height ? Math.round(parsedInfo.height) : null,
			aspect: parsedInfo.aspect
				? Math.floor(parsedInfo.aspect * 100) / 100
				: null,
		};
	}
	const cleanCropParams = cropParams ? clean(cropParams) : null;
	const parameterList = {
		format: "jpg",
		q: 75,
		width: 1024,
		...cleanCropParams,
	};
	const parameterUrl = Object.keys(parameterList)
		.map(key => {
			if (parameterList[key] !== null) {
				return `${key}=${parameterList[key]}`;
			}
		})
		.join("&");

	return `${cloudfrontUrl}?${parameterUrl}`;
};
export default HeaderImageSocial;
