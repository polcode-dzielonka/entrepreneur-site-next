export default async function rssFunc(req, res) {
	res.setHeader("Content-Type", "application/xml");
	res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

	try {
		let xmlFile = await fetch(process.env.RSS_URL, {
			method: "GET",
			headers: {
				Accept: "application/xml",
			},
		});
		res.status(200).send(xmlFile.body);
	} catch (e) {
		console.log(e);
		res.end();
	}
}
