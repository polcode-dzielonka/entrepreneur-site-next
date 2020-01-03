import React, { useEffect, useState, useRef } from "react";
import Embedo from "../../../../Embed/embedo/embedo";
import SingleSocialLoader from "../../../../Loading/SingleSocialLoader";

const EmbedUrl = ({ attributes, element, children }) => {
	const { data } = element;
	const [embedUrl, setEmbedUrl] = useState({
		url: "",
		caption: "",
		attribution: "",
		attributionLink: "",
	});
	const embedoContainer = useRef(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		handleEmbed();
	}, []);

	const handleEmbed = () => {
		const embedUrlString = data.url;
		const embedCaption = data.caption;
		const embedAttribution = data.attribution;
		const embedAttributionLink = data.attributionLink;

		setEmbedUrl({
			url: embedUrlString,
			caption: embedCaption,
			attribution: embedAttribution,
			attributionLink: embedAttributionLink,
		});

		Embedo.load(embedoContainer.current, embedUrlString, {
			width: "100%",
			centerize: true,
		})
			.done(data => {
				setLoading(false);
			})
			.fail(err => {
				console.error("error", err);
				setLoading(false);
			});
	};

	if (loading) {
		return <SingleSocialLoader />;
	}

	return (
		<div {...attributes}>
			<div
				href={embedUrl.url}
				className={"embedo"}
				target="_blank"
				rel="noopener noreferrer"
				ref={embedoContainer}
			/>
			{children}
			<span>{embedUrl.caption}</span>
		</div>
	);
};

export default EmbedUrl;
