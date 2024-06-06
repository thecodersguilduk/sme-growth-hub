const sanityClient = require('@sanity/client');
const config = require('../../sanity-config');
const query = `*[_type == "team" && trainer && !(_id in path("drafts.**"))] {
    ...,
    "image": image.asset->url,
} | order(start asc)`;

module.exports = async function () {
	// Fetches data
	const client = sanityClient.createClient(config);
	const data = await client.fetch(query);

	// Modifies the data to fit our needs
	//const preppedData = data.map(prepPost);
    console.log(data);
	// returns this to the 11ty data cascade
	return data;
};