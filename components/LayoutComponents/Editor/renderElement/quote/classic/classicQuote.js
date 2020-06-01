import React from "react";
import styles from "../../styles/quote/classic/classicQuoteStyles.module.sass";
const ClassicQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<div className={styles.blockQuoteWrapper}>
				<div className={styles.blockQuote}>
					<h1 className={styles.header}>{quote.quote}</h1>
					<h1 className={styles.header}>{quote.additionalQuote}</h1>
					{children}
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
