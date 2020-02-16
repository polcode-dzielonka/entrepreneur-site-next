import PropTypes from "prop-types";
import SideBarSmallComponent from "./SideBarSmall/SideBarSmallComponent";
const SideBarSmallContent = ({ data, loading, type }) => {
	return data.map((content, index) => {
		let headlineImage;
		let headlineImageAlt;
		let headline;
		let category;
		let url;
		let endpoint;
		let contentLink;
		let srcset;
		const overview = JSON.parse(content.overview);
		const { id } = content;
		if (type === "article") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].headline;
			category = overview[0].category;
			url = overview[0].url;
			srcset = overview[0].srcset;
			endpoint = "";
		} else if (type === "quiz") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].title;
			category = overview[0].category;
			url = overview[0].quizUrl;
			srcset = overview[0].srcset;
			endpoint = `questions/opening`;
		} else if (type === "slideshow") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].title;
			category = overview[0].category;
			url = overview[0].slideUrl;
			srcset = overview[0].srcset;
			endpoint = `slides/opening`;
		}
		contentLink = `/${url}/${type}/${id}/${endpoint}`;

		return (
			<SideBarSmallComponent
				key={index}
				type={type}
				headlineImage={headlineImage}
				headlineImageAlt={headlineImageAlt}
				headline={headline}
				category={category}
				url={url}
				contentLink={contentLink}
				srcset={srcset}
			/>
		);
	});
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
