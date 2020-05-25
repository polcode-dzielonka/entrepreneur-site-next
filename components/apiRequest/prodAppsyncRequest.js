import axios from "axios";

const prodApiRequest = async queryData => {
	console.log("HIT ME");
	const { data } = await axios({
		url: process.env.REACT_APP_PRODUCTION_MANUAL_ENDPOINT, //process.env.REACT_APP_PROD_ENDPOINT,
		method: "POST",
		data: JSON.stringify(queryData),
		headers: {
			Accept: "application/json",
			"x-api-key": process.env.REACT_APP_PRODUCTION_MANUAL_API_KEY, //process.env.REACT_APP_PROD_API_KEY,
		},
	});
	return data;
};

export default prodApiRequest;
