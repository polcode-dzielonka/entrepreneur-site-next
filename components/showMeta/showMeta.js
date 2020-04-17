import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ShowMeta = ({ showDate, displayDate, showAuthor, authorName }) => {
	return (
		<>
			{showDate && (
				<h3 className="section-meta">
					{moment(displayDate).format("Do MMM YYYY")}
				</h3>
			)}
			{showAuthor && authorName && (
				<h3 className="section-meta">By: {authorName}</h3>
			)}
			<style jsx>
				{`
					.section-meta {
						margin: 0px 0px 7px 0px;
						padding: 0;
						font-size: 1.2rem;
						font-weight: 900;
						line-height: 1.7rem;
						color: grey;
						text-transform: capitalize;
					}
					@media only screen and (max-width: 670px) {
					}
					@media only screen and (max-width: 480px) {
						.section-meta {
							padding: 0 0.5rem;
						}
					}
				`}
			</style>
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
