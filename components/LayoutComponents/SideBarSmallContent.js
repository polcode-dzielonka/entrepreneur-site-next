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
			urlDescription,
			refPath,
			contentLink,
			headlineImageSrcset,
		} = sideHelper(content, type);

		return (
			<SideBarSmallComponent
				key={index}
				type={type}
				headlineImage={headlineImage}
				headlineImageAlt={headlineImageAlt}
				headline={headline}
				category={category}
				url={urlDescription}
				refPath={refPath}
				contentLink={contentLink}
				srcset={headlineImageSrcset}
			/>
		);
	});
};
export default SideBarSmallContent;
SideBarSmallContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
};
