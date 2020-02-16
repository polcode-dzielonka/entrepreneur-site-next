import axios from "axios";

const prodApiRequest = async queryData => {
	const { data } = await axios({
		url: process.env.REACT_APP_PROD_ENDPOINT,
		method: "POST",
		data: JSON.stringify(queryData),
		headers: {
			Accept: "application/json",
			"x-api-key": process.env.REACT_APP_PROD_API_KEY,
		},
	});
	return data;
};

export default prodApiRequest;
