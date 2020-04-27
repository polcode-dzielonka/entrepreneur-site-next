import React from "react";

const BlockQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<blockquote className="otro-blockquote">
				<p className="blockquote-text">{quote.quote}</p>
				<p className="blockquote-text">{quote.additionalQuote}</p>
				{children}
				{quote.author ? <span>{quote.author}</span> : ""}
			</blockquote>
			<style jsx="true">
				{`
					.blockquote-text {
						margin: 0;
						color: rgba(0, 0, 0, 0.54);
					}
					.otro-blockquote {
						font-size: 1.4em;
						width: 80%;
						margin: 1rem auto;
						color: #55555;
						padding: 0.5rem 2rem; // 30px 1.2em 75px;
						border-left: 8px solid #dedede;
						line-height: 1.6;
						position: relative;
						// background: #55555;
					}
					.otro-blockquote::before {
						color: rgba(0, 0, 0, 0.54);
						font-size: 4rem;
						position: absolute;
						left: 5px;
						top: -20px;
						content: "“";
					}

					.otro-blockquote span {
						display: block;
						color: #333333;
						font-style: normal;
						font-weight: 600;
						margin-top: 0.75rem;
						text-align: right;
					}
				`}
			</style>
		</div>
	);
};

export default BlockQuote;
