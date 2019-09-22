import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { theme } from "../theme/baseCss";

export default () => {
	return (
		<Layout>
			<Head>
				<title>About Us</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="content">
				<article className="article">
					<h1 className="main-title">About Us</h1>
					<div className="main-content">
						<p>
							The idea of wealth can vary from person to person with the most
							common being centered around the acquisition of material items -
							the luxury apartment, the expensive sports car and the
							'influencer' lifestyle.
						</p>
						<p>
							While this can be incidental it is not a result of&nbsp;
							<strong>REAL</strong> wealth.
						</p>
						<p>
							Google broadly defines wealth as "a plentiful supply of a
							particular desirable thing" but this can encompass a number of
							different objectives such as time, good health and the ability to
							make a difference in other people's lives.
						</p>
						<p>
							We believe <strong>REAL</strong> wealth and success to be a
							lifelong endeavour where you continually set new goals and targets
							to improve your life and those around you. It is the process of
							building a legacy that provides a sense of accomplishment that can
							never be taken away from you.
						</p>
						<p>
							It is something that has to be built from humble beginnings and
							has the potential to change other people's lives as well as yours.
						</p>
						<p>This quote from Bob Dylan has always resonated with us...</p>

						<div className="quote-container">
							<blockquote>
								<p>
									A man is a success if he gets up in the morning and gets to
									bed at night, and in between he does what he wants to do.”
								</p>
							</blockquote>
							<cite>
								<span>Bob Dylan</span>
							</cite>
						</div>
						<p>
							Whether it is for our family and friends or for an international
							audience, building a legacy is something we all want to achieve in
							our lifetime.
						</p>
						<p>That's where we come in...</p>
						<p>
							Our mission with this site is to inform, inspire and motivate our
							audience into building a lasting legacy.
						</p>
						<p>
							If you’re just joining us, then follow us on social media to keep
							up to date as we make big changes on a regular basis!
						</p>
						<p>
							We would love to hear from you any suggestions or general feedback
							to improve your experience.
						</p>
						<p>
							To contact us please fill out the form&nbsp;
							<Link>
								<a href="/contact" className="link">
									here.
								</a>
							</Link>
						</p>
					</div>
				</article>
			</main>
			<style jsx>
				{`
					blockquote {
						border: 0;
						margin: 50px 50px 0px 50px;
						padding: 0;
						background: none;
						color: gray;
						font-family: Georgia, serif;
						font-size: 1.5em;
						font-style: italic;
						line-height: 1.4 !important;
						position: relative;
						text-shadow: 0 1px white;
						z-index: 600;
					}
					blockquote p {
						color: #75808a;
						line-height: 1.4 !important;
					}
					blockquote p:first-child:before {
						content: "‘‘";
						color: #81bedb;
						font-size: 7.5em;
						font-weight: 700;
						opacity: 0.3;
						position: absolute;
						top: -0.4em;
						left: -0.2em;
						text-shadow: none;
						z-index: -300;
					}
					cite {
						color: black;
						display: block;
						font-size: 0.8em;
						text-align: right;
					}
					cite span {
						color: #5e5e5e;
						font-size: 1em;
						font-style: normal;
						font-weight: 700;
						letter-spacing: 1px;
						text-transform: uppercase;
						text-shadow: 0 1px white;
					}
					.content {
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
						line-height: ${theme.lineHeight};
					}
					.link {
						text-decoration: none;
						color: black;
						font-weight: 900;
					}
					.main-title {
						font-family: ${theme.secondaryFont};
						margin-top: 3.5rem;
						font-size: 2.8em;
						font-weight: 700;
						color: #101010;
						text-transform: uppercase;
					}
					.main-content {
						font-family: ${theme.secondaryFont};
						font-size: ${theme.fontSize};
						color: #101010;
					}
					.main-content p {
						text-align: justify;
					}
					.quote-container {
						display: block;
					}
					@media only screen and (max-width: 960px) {
						.content {
							margin-bottom: 5rem;
							width: 100%;
							min-width: 100%;
							display: flex;
							flex-grow: 1;
							flex-direction: column;
							width: 70%;
							margin: 0 auto;
						}
						.main-title {
							text-align: center;
						}
						.main-content {
							font-family: ${theme.secondaryFont};
							font-size: ${theme.fontSize};
							font-weight: 300;
							color: #101010;
							width: 80%;
							margin: 0 auto;
							margin-bottom: 5rem;
						}
					}
				`}
			</style>
		</Layout>
	);
};
