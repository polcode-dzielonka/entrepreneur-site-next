import React from "react";

const ClassicQuote = ({ quote, attributes, children }) => {
	return (
		<div {...attributes}>
			<div className="blockquote-wrapper">
				<div className="blockquote">
					<h1>{quote.quote}</h1>
					<h1>{quote.additionalQuote}</h1>
					{children}
					{quote.author ? <h4>{quote.author}</h4> : ""}
				</div>
			</div>
			<style jsx="true">
				{`
					/* center the blockquote in the page */
					.blockquote-wrapper {
						margin: 1rem 1rem 3rem 1rem;
					}

					/* Blockquote main style */
					.blockquote {
						position: relative;
						font-family: "Poppins", sans-serif;
						padding: 2px;
						width: 100%;
						max-width: 600px;
						z-index: 1;
						margin: auto;
					}

					/* Blockquote right double quotes */
					.blockquote:after {
						position: absolute;
						content: "”";
						color: #dedede; //191a1b;
						font-size: 20rem;
						line-height: 1;
						left: calc(50% - 3rem);
						bottom: -0.8em;
						z-index: 1;
					}

					/* Blockquote background */
					.blockquote::before {
						content: "";
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						z-index: -1;
						background-color: #dedede;
						background-size: 400% 400%;
					}

					/* Blockquote header */
					.blockquote h1 {
						position: relative;
						background-color: #fefefe;
						color: rgba(0, 0, 0, 0.54); //#55555; //#191a1b;
						font-size: 2rem;
						text-align: center;
						font-weight: normal;
						line-height: 1;
						margin: 0;
						padding: 2rem 1rem 0.5rem 1rem; //10px 30px; // 5px 30px;
					}

					/* increase header size after 600px */
					@media all and (min-width: 600px) {
						.blockquote h1 {
							font-size: 2.75rem;
						}
					}

					/* Blockquote subheader */
					.blockquote h4 {
						position: relative;
						color: #ff058a;
						background-color: #fefefe;
						text-transform: uppercase;
						font-size: 1rem;
						text-align: center;
						font-weight: normal;
						line-height: 1;
						letter-spacing: 5px;
						margin: -5px 0 0 0;
						padding: 15px 20px 3rem 20px;
					}
				`}
			</style>
		</div>
	);
};
export default ClassicQuote;
