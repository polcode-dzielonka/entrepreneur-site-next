const parseUrlQuery = url => {
	const query = url.split("?");
	let utmCheck = false;
	if (query[1]) {
		const utm = query[1].split("=");
		utmCheck = utm[0] === "utm_content" ? true : false;
	}
	return utmCheck;
};

export default parseUrlQuery;
