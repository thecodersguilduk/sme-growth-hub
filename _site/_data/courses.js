const sanityClient = require('@sanity/client');
const config = require('../../sanity-config');
const query = `*[_type == "course" && !(_id in path("drafts.**"))] {
    _id,
    title,
    subtitle,
    "featuredImage": featuredImage.asset->url,
} | order(start asc)`;

module.exports = async function () {
	// Fetches data
	const client = sanityClient.createClient(config);
	const data = await client.fetch(query);
	// returns this to the 11ty data cascade
	return data;
};