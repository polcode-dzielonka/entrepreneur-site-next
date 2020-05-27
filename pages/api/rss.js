export default async function rssFunc(req, res) {
	res.setHeader("Content-Type", "application/xml");
	try {
		let xmlFile = await fetch(process.env.RSS_URL, {
			method: "GET",
			headers: {
				Accept: "application/xml",
			},
		});
		res.send(xmlFile.data);
	} catch (e) {
		console.log(e);
		res.end();
	}
}
