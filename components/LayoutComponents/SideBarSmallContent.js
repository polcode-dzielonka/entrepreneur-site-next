import PropTypes from "prop-types";
import SideBarSmallComponent from "./SideBar/SideBarSmallComponent";
import sideHelper from "../helper/sideBarHelper";
const SideBarSmallContent = ({ data, type }) => {
	return data.map((content, index) => {
		const {
			headlineImage,
			headlineImageAlt,
			headline,
			category,
			url,
			refPath,
			contentLink,
			srcset,
		} = sideHelper(content, type);

		return (
			<SideBarSmallComponent
				key={index}
				type={type}
				headlineImage={headlineImage}
				headlineImageAlt={headlineImageAlt}
				headline={headline}
				category={category}
				url={url}
				refPath={refPath}
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
