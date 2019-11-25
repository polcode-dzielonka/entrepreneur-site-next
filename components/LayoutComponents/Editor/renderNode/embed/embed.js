import React, { useEffect, useState, useRef } from "react";
import Embedo from "../../../../Embed/embedo/embedo";
import SingleSocialLoader from "../../../../Loading/SingleSocialLoader";

const EmbedUrl = props => {
	const { isFocused, attributes, node, values, children } = props;
	const { data } = node;
	const [embedUrl, setEmbedUrl] = useState({
		url: "",
		caption: "",
		attribution: "",
		attributionLink: "",
	});
	const embedoContainer = useRef(null);

	useEffect(() => {
		handleEmbed();
	}, []);

	const handleEmbed = () => {
		const embedUrlString = data.get("url");
		const embedCaption = data.get("caption");
		const embedAttribution = data.get("attribution");
		const embedAttributionLink = data.get("attributionLink");

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
			.done(data => {})
			.fail(err => {
				console.error("error", err);
			});
	};

	//   const onChange = e => {
	//     const embed = e.target.value;
	//     const { node, editor } = this.props;
	//     editor.setNodeByKey(node.key, { data: { embed } });
	//   };

	return (
		<>
			<div {...attributes}>
				<div
					href={embedUrl.url}
					className="embedo"
					target="_blank"
					rel="noopener noreferrer"
					ref={embedoContainer}
				/>
				{children}
				<span>{embedUrl.caption}</span>
			</div>
		</>
	);
};

export default EmbedUrl;
