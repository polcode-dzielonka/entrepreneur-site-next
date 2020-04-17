import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import { theme } from "../theme/baseCss";
import { withApollo } from "../lib/apollo";
import Vanilla from "../components/Layouts/vanillaLayout";
const Cookies = () => {
	return (
		<Layout>
			<Head>
				<title>Cookies</title>
				<link rel="canonical" href={`${process.env.SITE_ADDRESS}/cookies`} />
			</Head>
			<Vanilla>
				<main className="content">
					<article className="article">
						<h1 className="main-title">Cookies</h1>
						<div className="main-content">
							<p>
								<strong>Derivative Media Ltd</strong> ("us","we",or "our") uses
								cookies on our websites (the "Service"). By using the Service,
								you consent to use of cookies.
							</p>
							<p>
								Our Cookies Policy explains what cookies are, how we use
								cookies, how third-parties we may partner with may use cookies
								on the Service, your choices regarding cookies and further
								information about cookies.
							</p>
							<h2>What are cookies&#63;</h2>
							<p>
								Cookies are small pieces of text sent by your web browser by a
								website you visit. A cookie file is stored in your web browser
								and allows the Service or a third-party to recognize you and
								make your next visit easier and the Service more useful to you.
							</p>
							<p>Cookies can be "persistent" or "session" cookies.</p>
							<h2>
								How <strong>Derivative Media Ltd</strong> uses cookies
							</h2>
							<p>
								When you use and access the Service, we may place a number of
								cookies files in your web browser.
							</p>
							<p>
								We use cookies for the following purposes: to enable certain
								functions of the Service, to provide analytics, to store your
								preferences, to enable advertisements delivery, including
								behavioral advertising.
							</p>
							<p>
								We use both session and persistent cookies on the Service and we
								use different types of cookies to run the Service:
							</p>
							<p>
								- Essential cookies. We may use essential cookies to
								authenticate users and prevent fraudulent use of user accounts.
							</p>
							<h2>Third-party cookies</h2>
							<p>
								In addition to our own cookies, we may also use various
								third-parties cookies to report usage statistics of the Service,
								deliver advertisements on and through the Service, and so on.
							</p>
							<h2>What are your choices regarding cookies&#63;</h2>
							<p>
								If you'd like to delete cookies or instruct your web browser to
								delete or refuse cookies, please visit the help pages of your
								web browser.
							</p>
							<p>
								Please note, however, that if you delete cookies or refuse to
								accept them, you might not be able to use all of the features we
								offer, you may not be able to store your preferences, and some
								of our pages might not display properly.
							</p>
							<h2>Where can your find more information about cookies&#63;</h2>
							<p>
								You can learn more about cookies and the following third-party
								websites:
							</p>
							<ul>
								<li>
									AllAboutCookies:&nbsp;
									<br />
									<strong>
										<a
											href="http://www.allaboutcookies.org/"
											target="_blank"
											rel="noopener noreferrer"
										>
											http://www.allaboutcookies.org/
										</a>
									</strong>
								</li>
								<br />
								<li>
									Network Advertising Initiative:&nbsp;
									<br />
									<strong>
										<a
											href="https://www.networkadvertising.org/"
											target="_blank"
											rel="noopener noreferrer"
										>
											https://www.networkadvertising.org/
										</a>
									</strong>
								</li>
							</ul>
						</div>
					</article>
				</main>
			</Vanilla>
			<style jsx>
				{`
					.content {
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
						line-height: ${theme.lineHeight};
					}
					a {
						text-decoration: none;
						color: black;
						font-weight: 900;
					}
					.main-title {
						font-family: ${theme.font};
						margin-top: 3.5rem;
						font-size: 2.8em;
						font-weight: 700;
						color: #101010;
						text-transform: uppercase;
					}
					.main-content {
						font-family: ${theme.font};
						font-size: ${theme.fontSize};
						color: #101010;
					}
					.main-content p {
						text-align: justify;
					}
					h2 {
						text-transform: uppercase;
						margin-top: 3rem;
						line-height: 2.5rem;
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
							font-family: ${theme.font};
							font-size: ${theme.fontSize};
							font-weight: 300;
							color: #101010;
							width: 80%;
							margin: 0 auto;
							margin-bottom: 5rem;
						}
					}
					@media only screen and (max-width: 560px) {
						h2 {
							text-transform: uppercase;
							margin-top: 1.5rem;
							line-height: 2rem;
							text-align: center;
						}
						.main-content {
							font-family: ${theme.font};
							font-size: ${theme.mobileFontSize};
							font-size: ${theme.mobileLineHeight};
							font-weight: 300;
							color: #101010;
							width: 96%;
							margin: 0 auto;
							margin-bottom: 5rem;
						}
						.main-title {
							font-family: ${theme.font};
							margin-top: 2rem;
							font-size: ${theme.mobileHeaderSize};
							font-weight: 700;
							color: #101010;
							text-transform: uppercase;
						}
					}
				`}
			</style>
		</Layout>
	);
};

export default withApollo(Cookies, {
	// Disable apollo ssr fetching in favour of automatic static optimization
	ssr: false,
});
