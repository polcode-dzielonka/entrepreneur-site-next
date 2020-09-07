import React from "react";
import styles from "../../styles/quote/classic/classicQuoteStyles.module.sass";
const ClassicQuote = ({ quote }) => {
	return (
		<div>
			<div className={styles.blockQuoteWrapper}>
				<div className={styles.blockQuote}>
					<div className={styles.header}>{quote.quote}</div>
					<div className={styles.header}>{quote.additionalQuote}</div>
					{quote.author ? (
						<h4 className={styles.authorHeader}>{quote.author}</h4>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};
export default ClassicQuote;
