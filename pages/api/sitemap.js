export default async function sitemapFunc(req, res) {
	res.setHeader("Content-Type", "application/xml");
	try {
		let xmlFile = await fetch(process.env.SITEMAP_URL, {
			method: "GET",
			headers: {
				Accept: "application/xml",
			},
		});

		res.send(xmlFile.body);
	} catch (e) {
		console.log(e);
		res.end();
	}
}
