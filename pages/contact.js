import Link from "next/link";
import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import {
	contactForm,
	INITIAL_STATE,
	ERROR_STATE,
} from "../data/contactFormData";
import { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import { theme } from "../theme/baseCss";
import validate from "../components/FormValidation/Validation";
import Reaptcha from "reaptcha";
import Vanilla from "../components/Layouts/vanillaLayout";
import RippleButton from "../components/Button/Button";
import { event } from "../gtag/lib";
const Contact = ({ router }) => {
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [recaptcha, setRecaptcha] = useState(false);
	const [errors, setErrors] = useState(ERROR_STATE);
	const [recaptchaError, setRecaptchaError] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		if (recaptcha) {
			const { push } = router;
			const URL =
				"https://01khx5y3mh.execute-api.eu-west-1.amazonaws.com/prod/contact-mailfwd";
			const submitForm = {
				...formData,
				site: "entrepreneur",
				id: uuid(),
				timeStamp: Date(),
			};
			event({
				action: "submit_form",
				category: "Contact",
				label: formData.message,
			});
			try {
				await axios.post(URL, { ...submitForm });
				setFormData(INITIAL_STATE);
				setErrors({
					ERROR_STATE,
				});
				push("/");
			} catch (err) {
				console.log("Error occurred", err);
			}
		} else {
			setRecaptchaError(true);
		}
	};

	const validateForm = e => {
		validate(formData, e.target.name, setErrors, errors);
	};

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const verify = resp => {
		if (resp) {
			setRecaptcha(true);
			setRecaptchaError("");
		}
	};

	return (
		<Layout>
			<Head>
				<title>Contact Us</title>
				<link rel="canonical" href={`${process.env.SITE_ADDRESS}/contact`} />
			</Head>
			<Vanilla>
				<main className="content">
					<article className="article">
						<h1 className="main-title">Contact Us</h1>
					</article>
					<form className="contact-form" onSubmit={handleSubmit}>
						<p>
							<strong className="form-blurb">
								We value your feedback as we continually try to improve our
								content and its delivery for a better user experience.
							</strong>
						</p>
						<p>
							<strong className="form-blurb">
								If you have any questions or comments about us please contact
								admin@derivative-media.com or enter your information below and
								we will get back to you as soon as possible
							</strong>
						</p>
						{contactForm.map((input, index) => {
							switch (input.textarea) {
								case true:
									return (
										<div className="form-group" key={index}>
											<label className="form-label">{input.label}</label>
											<textarea
												name={input.name}
												className={input.className}
												type={input.type}
												placeholder={input.placeholder}
												rows={input.rows}
												style={{ height: "7.5rem", padding: 10 }}
												onChange={handleChange}
											/>
										</div>
									);
								case false:
									return (
										<div className="form-group" key={index}>
											<label className="form-label">{input.label}</label>
											<input
												name={input.name}
												required={input.required}
												className={
													errors[input.name] ? "error" : input.className
												}
												type={input.type}
												placeholder={
													errors[input.name]
														? errors[input.name]
														: input.placeholder
												}
												rows={input.rows}
												onChange={handleChange}
												onBlur={validateForm}
											/>
										</div>
									);
							}
						})}
						<div className="recaptcha">
							<Reaptcha
								sitekey={process.env.NEXT_APP_RECAPTCHA_SITEKEY}
								// render="explicit"
								onVerify={verify}
							/>
						</div>
						<div>
							{recaptchaError ? (
								<div className="recaptcha-error">
									Please confirm that you are not a bot by checking the checkbox
								</div>
							) : null}
						</div>
						<RippleButton
							label={"Submit"}
							color={theme.secondary}
							handler={null}
							type="submit"
						/>
					</form>
				</main>
			</Vanilla>
			<style jsx>
				{`
					.contact-form {
						background: #f7f7f7;
						padding: 1.5rem;
						margin-bottom: 4rem;
					}
					.content {
						margin: 0 auto;
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
						max-width: ${theme.contentMaxWidth};
					}
					.error {
						font-size: 1.1em;
						font-weight: 400;
						color: #2e2c2b;
						background: #fff;
						display: block;
						border: 0;
						padding-left: 10px;
						display: flex;
						height: 2.5rem;
						margin: 0px;
						width: 100%;
						border-radius: 0;
						font-family: ${theme.font};
						border: 1px solid ${theme.primary};
					}
					.error::placeholder {
						color: ${theme.primary};
					}
					.form-blurb {
						font-family: ${theme.font};
						line-height: ${theme.lineHeight};
						font-size: 1.1rem;
					}
					.form-group {
						position: relative;
						margin-bottom: 1rem;
						margin-top: 1.5rem;
						width: 100%;
						padding: 0;
						background: #fff;
						display: flex;
					}
					.form-label {
						position: absolute;
						width: 1px;
						height: 1px;
						margin: -1px;
						overflow: hidden;
					}
					.form-input {
						font-size: 1.1em;
						font-weight: 400;
						color: #2e2c2b;
						background: #fff;
						display: block;
						border: 0;
						padding-left: 10px;
						display: flex;
						height: 2.5rem;
						margin: 0px;
						width: 100%;
						border-radius: 0;
						font-family: ${theme.font};
					}
					.form-input::placeholder {
						color: grey;
					}
					.form-input:focus {
						outline: none;
					}
					.main-title {
						font-family: ${theme.font};
						font-size: 2.8em;
						font-weight: 700;
						color: #101010;
						text-transform: uppercase;
					}
					.recaptcha {
						float: right;
						margin-top: 1rem;
						margin-bottom: 1rem;
					}
					.recaptcha-error {
						font-family: ${theme.font};
						line-height: ${theme.lineHeight};
						font-size: 1.1rem;
						float: right;
						margin-bottom: 2rem;
						font-weight: 900;
						padding-right: 0.5rem;
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
					}
				`}
			</style>
		</Layout>
	);
};

Contact.propTypes = {
	router: PropTypes.object,
};

export default withRouter(Contact);
