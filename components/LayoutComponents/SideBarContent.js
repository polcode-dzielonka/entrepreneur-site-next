import { Fragment } from "react";
import PropTypes from "prop-types";
import sideHelper from "../helper/sideBarHelper";
import SideBarComponent from "./SideBar/SideBarComponent";
const SideBarContent = ({ data, type }) => {
	return data.map((article, index) => {
		const {
			headlineImage,
			headlineImageAlt,
			headlineImagePath,
			headline,
			category,
			refPath,
			contentLink,
		} = sideHelper(article, type);

		return (
			<Fragment key={index}>
				<SideBarComponent
					type={type}
					headlineImage={headlineImage}
					headlineImageAlt={headlineImageAlt}
					headlineImagePath={headlineImagePath}
					headline={headline}
					category={category}
					refPath={refPath}
					contentLink={contentLink}
				/>
			</Fragment>
		);
	});
};
export default SideBarContent;

SideBarContent.propTypes = {
	data: PropTypes.array,
	loading: PropTypes.Boolean,
	type: PropTypes.string,
};
