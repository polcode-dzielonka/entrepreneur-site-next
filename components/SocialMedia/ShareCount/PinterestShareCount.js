import shareCountFactory from "../utils/shareCountFactory";
import objectToGetParams from "../utils/objectToGetParams";

const getPinterestShareCount = async (shareUrl, callback) => {
	const endpoint = `https://api.pinterest.com/v1/urls/count.json`;
	try {
		const data = await fetch(endpoint + objectToGetParams({ url: shareUrl }), {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		});
		const pinterestData = await data.text();
		const pinCount = JSON.parse(
			pinterestData.replace(/receiveCount/i, "").replace(/[()]/g, ""),
		);

		callback(pinCount.count ? pinCount.count : undefined);
	} catch (err) {
		console.log("Error", err);
	}
};

export default shareCountFactory(getPinterestShareCount);
