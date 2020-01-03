import {
	quoteIconFirst,
	quoteIconSecond,
	quoteWordStyle,
	quoteIconFooter,
} from "./normalQuoteStyle";
const NormalQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes} className="quote-container">
			<blockquote>
				<p>{quote.quote}</p>
				<p>{quote.additionalQuote}</p>
			</blockquote>
			{children}
			<cite>
				<span>{quote.author ? <span>- {quote.author}</span> : ""}</span>
			</cite>
			<style jsx>
				{`
					.quote-container {
						width: 100%;
					}
					blockquote {
						background: none;
						color: gray;
						font-family: Georgia, serif;
						font-size: 2.5rem;
						font-style: italic;
						line-height: 2rem !important;
						position: relative;
						text-shadow: 0 1px white;
						z-index: 2;
						width: 100%;
						margin: 0;
					}
					blockquote p {
						color: #75808a;
						line-height: 1.4 !important;
						margin: 0.5rem;
						padding-left: 2rem;
					}
					blockquote p:first-child:before {
						content: "‘‘";
						color: #81bedb;
						font-size: 13rem;
						font-weight: 700;
						opacity: 0.3;
						position: absolute;
						top: -0.5em;
						left: -0.2em;
						text-shadow: none;
						z-index: -1;
						margin-left: 2rem;
					}
					cite {
						color: black;
						display: block;
						font-size: 0.8em;
						text-align: right;
					}
					cite span {
						color: #5e5e5e;
						font-size: 2.5rem;
						font-style: normal;
						margin-right: 1rem;
						font-weight: 700;
						letter-spacing: 1px;
						text-transform: uppercase;
						text-shadow: 0 1px white;
					}
				`}
			</style>
		</div>
	);
};

export default NormalQuote;
