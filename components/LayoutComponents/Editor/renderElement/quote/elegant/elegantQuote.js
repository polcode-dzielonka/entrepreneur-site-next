import React from "react";
import styles from "../../styles/quote/elegant/elegantQuoteStyles.module.sass";

const ElegantQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<blockquote className={styles.elegantBlockquote}>
				<div className={styles.quoteLine}></div>
				<p className={styles.elegantText}>{quote.quote}</p>
				<p className={styles.elegantText}>{quote.additionalQuote}</p>
				{children}
				{quote.author ? <span>{quote.author}</span> : ""}
			</blockquote>
		</div>
	);
};
export default ElegantQuote;
