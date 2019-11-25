const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
	target: "serverless",
	webpack(config) {
		config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
		return config;
	},
	env: {
		NEXT_APP_RECAPTCHA_SITEKEY: process.env.NEXT_APP_RECAPTCHA_SITEKEY,
		REACT_APP_PROD_ENDPOINT: process.env.REACT_APP_PROD_ENDPOINT,
		REACT_APP_PROD_API_KEY: process.env.REACT_APP_PROD_API_KEY,
		REACT_APP_SITE_ID: process.env.REACT_APP_SITE_ID,
		NEXT_APP_RECAPTCHA_INVISIBLE_SITEKEY:
			process.env.NEXT_APP_RECAPTCHA_INVISIBLE_SITEKEY,
	},
};
