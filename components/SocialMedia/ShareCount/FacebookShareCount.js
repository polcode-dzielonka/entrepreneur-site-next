import shareCountFactory from "../utils/shareCountFactory";

const getFacebookShareCount = async (shareUrl, callback) => {
	const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=og_object{engagement}`;
	try {
		const data = await fetch(endpoint, {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		});

		const facebookData = await data.text();

		const finalData = JSON.parse(facebookData);
		callback(
			finalData &&
				finalData.og_object &&
				finalData.og_object.engagement &&
				finalData.og_object.engagement.count
				? finalData.og_object.engagement.count
				: undefined,
		);
	} catch (err) {
		console.log("Error", err);
	}
};

export default shareCountFactory(getFacebookShareCount);
