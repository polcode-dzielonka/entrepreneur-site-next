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
			<span className="caption">{embedUrl.caption}</span>
			<style jsx>{`
				.caption {
					font-size: 1rem;
					font-family: ${theme.secondaryFont};
					font-weight: 400;
					color: ${theme.contentFontColor};
				}
				@media only screen and (max-width: 670px) {
					.caption {
						font-size: 0.9rem;
						line-height: 2rem;
					}
				}
				@media only screen and (max-width: 450px) {
					.caption {
						font-size: 0.9rem;
					}
				}
			`}</style>
		</div>
	);
};

export default EmbedUrl;
