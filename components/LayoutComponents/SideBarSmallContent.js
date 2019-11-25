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
		const overview = JSON.parse(content.overview);
		const { id } = content;
		if (type === "article") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].headline;
			category = overview[0].category;
			url = overview[0].url;
			endpoint = "";
		} else if (type === "quiz") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].title;
			category = overview[0].category;
			url = overview[0].quizUrl;
			endpoint = `questions/opening`;
		} else if (type === "slideshow") {
			headlineImage = overview[0].headlineImage;
			headlineImageAlt = overview[0].headlineImageAlt;
			headline = overview[0].title;
			category = overview[0].category;
			url = overview[0].slideUrl;
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
			/>
		);
	});
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
