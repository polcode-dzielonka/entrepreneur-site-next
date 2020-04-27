import React from "react";

const ElegantQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<blockquote className="elegant-blockquote">
				<div className="quote-line"></div>
				<p className="elegant-text">{quote.quote}</p>
				<p className="elegant-text">{quote.additionalQuote}</p>
				{children}
				{quote.author ? <span>{quote.author}</span> : ""}
			</blockquote>
			<style jsx="true">
				{`
					.elegant-text {
						margin: 0;
						color: rgba(0, 0, 0, 0.54);
						padding-bottom: 0.4rem;
					}

					.elegant-blockquote {
						font-size: 1.4rem;
						width: 80%;
						margin: 1rem auto;
						color: #55555;
						padding: 0.5rem 2rem; // 30px 1.2em 75px;
						line-height: 1.6;
						position: relative;
					}

					.elegant-blockquote::before {
						content: "“";
						position: absolute;
						top: 0;
						left: 50%;
						font-size: 4rem;
						transform: translate(-50%, -50%);
						background: #fff;
						width: 3.25rem;
						height: 3.75rem;
						color: rgba(0, 0, 0, 0.54);
						text-align: center;
						z-index: 100;
						margin: 0 auto;
					}

					.elegant-blockquote span {
						display: block;
						color: rgba(0, 0, 0, 0.54);
						font-style: normal;
						font-weight: 600;
						margin-top: 0.75rem;
						text-align: center;
					}
					.quote-line {
						border: 1px solid #dedede;
						text-align: center;
						content: "“";
						font-size: 2rem;
						z-index: 1;
						margin-bottom: 1rem;
					}
				`}
			</style>
		</div>
	);
};
export default ElegantQuote;
