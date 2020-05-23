import React, { useEffect, useState, useRef, memo } from "react";
import SingleSocialLoader from "../Loading/SingleSocialLoader";
import dynamic from "next/dynamic";
import ImageLoader from "../Loading/ImageLoader";

const EmbedUrl = ({
	embed,
	image,
	imageAlt,
	imageAltAttribution,
	imageAltAttributionLink,
	srcset,
	styles,
	noMaxHeight,
}) => {
	const Embedo = dynamic(() => import("./embedo/Embed"), {
		ssr: false,
		loading: () => <SingleSocialLoader />,
	});

	return (
		<>
			{!embed && (
				<ImageLoader
					src={image}
					alt={imageAlt ? imageAlt : imageAltAttribution}
					animation={false}
					srcset={srcset}
					styles={styles}
					noMaxHeight={noMaxHeight}
				/>
			)}
			{embed && (
				<Embedo
					source={image}
					height="550px"
					imageAltAttribution={imageAltAttribution}
					imageAltAttributionLink={imageAltAttributionLink}
				/>
			)}
			{imageAltAttribution && (
				<span>
					<a
						href={imageAltAttributionLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						Credit:{imageAltAttribution}
					</a>
				</span>
			)}
			<style jsx>
				{`
					a {
						font-size: 1rem;
						text-decoration: none;
						float: right;
					}
				`}
			</style>
		</>
	);
};

export default memo(EmbedUrl);
