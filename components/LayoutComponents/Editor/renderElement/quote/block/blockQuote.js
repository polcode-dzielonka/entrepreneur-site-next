import React from "react";
import styles from "../../styles/quote/block/blockQuoteStyles.module.sass";
const BlockQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<blockquote className={styles.otroBlockquote}>
				<p className={styles.blockquoteText}>{quote.quote}</p>
				<p className={styles.blockquoteText}>{quote.additionalQuote}</p>
				{children}
				{quote.author ? <span>{quote.author}</span> : ""}
			</blockquote>
		</div>
	);
};

export default BlockQuote;
