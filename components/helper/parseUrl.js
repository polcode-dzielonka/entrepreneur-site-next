const parseUrlQuery = url => {
	const query = url.split("?");
	let utmCheck = false;
	if (query[1]) {
		const utm = query[1].split("&");
		let utmObj = {};
		for (let i in utm) {
			const [keyval, val] = utm[i].split("=");
			utmObj[keyval] = val;
		}
		utmCheck = utmObj.utm_source ? true : false;
	}
	return utmCheck;
};

export default parseUrlQuery;
