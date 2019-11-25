import axios from "axios";
import shareCountFactory from "../utils/shareCountFactory";

const getFacebookShareCount = async (shareUrl, callback) => {
	const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=og_object{engagement}`;
	try {
		const { data } = await axios({
			url: endpoint,
			method: "GET",
		});
		callback(
			data &&
				data.og_object &&
				data.og_object.engagement &&
				data.og_object.engagement.count
				? data.og_object.engagement.count
				: undefined,
		);
	} catch (err) {
		console.log("Error", err);
	}
};

export default shareCountFactory(getFacebookShareCount);
