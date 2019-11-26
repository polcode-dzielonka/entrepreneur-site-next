import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
	render() {
		return (
			<html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_TAG_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.REACT_APP_GOOGLE_TAG_ID}');
                        `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
