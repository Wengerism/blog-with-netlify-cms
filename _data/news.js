const axios = require("axios");
require("dotenv").config();

module.exports = async function () {
	try {
		const response = await axios.get(
			`https://newsapi.org/v2/everything?q=tesla&from=2021-03-25&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=10&language=en`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
