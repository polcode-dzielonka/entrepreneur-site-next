import React from "react";
import PropTypes from "prop-types";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
import styles from "./styles/showMetaStyles.module.sass";
dayjs.extend(advancedFormat);

const ShowMeta = ({ showDate, displayDate, showAuthor, authorName }) => {
	return (
		<>
			{showDate && (
				<h3 className={styles.sectionMeta}>
					{dayjs(displayDate).format("Do MMM YYYY")}
				</h3>
			)}
			{showAuthor && authorName && (
				<h3 className={styles.sectionMeta}>By: {authorName}</h3>
			)}
		</>
	);
};
ShowMeta.propTypes = {
	showDate: PropTypes.bool,
	displayDate: PropTypes.string,
	showAuthor: PropTypes.bool,
	authorName: PropTypes.string,
};
export default ShowMeta;
