module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images/uploads");
	eleventyConfig.addPassthroughCopy("admin");

	return {
		dir: {
			data: "_data",
		},
	};
};
