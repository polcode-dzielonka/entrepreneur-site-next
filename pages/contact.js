import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
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
import Recaptcha from "react-recaptcha";
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

			try {
				await axios.post(URL, { ...submitForm });
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
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<script
					src="https://www.google.com/recaptcha/api.js"
					async
					defer
				></script>
			</Head>
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
							admin@derivative-media.com or enter your information below and we
							will get back to you as soon as possible
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
											className={errors[input.name] ? "error" : input.className}
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
						{process.browser ? (
							<Recaptcha
								sitekey={process.env.NEXT_APP_RECAPTCHA_SITEKEY}
								render="explicit"
								verifyCallback={verify}
							/>
						) : null}
					</div>
					<div>
						{recaptchaError ? (
							<div className="recaptcha-error">
								Please confirm that you are not a bot by checking the checkbox
								above
							</div>
						) : null}
					</div>
					<button type="submit" className="button">
						<span className="submit-button">SUBMIT</span>
					</button>
				</form>
			</main>
			<style jsx>
				{`
					.button {
						width: 100%;
						height: 2.5rem;
						background-color: ${theme.primary};
					}
					.button:focus {
						outline: none;
					}
					.contact-form {
						background: #f7f7f7;
						padding: 1.5rem;
						margin-bottom: 4rem;
					}
					.content {
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
≈					}
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
						font-family: ${theme.secondaryFont};
						border: 1px solid ${theme.primary};
					}
					.error::placeholder {
						color: ${theme.primary};
					}
					.form-blurb {
						font-family: ${theme.secondaryFont};
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
						font-family: ${theme.secondaryFont};
					}
					.form-input::placeholder {
						color: grey;
					}
					.form-input:focus {
						outline: none;
					}
					.main-title {
						font-family: ${theme.secondaryFont};
						font-size: 2.8em;
						font-weight: 700;
						color: #101010;
						text-transform: uppercase;
					}
					.recaptcha{
						float: right;
					 margin-top: 1rem;
					  margin-bottom: 1rem
					}
					.recaptcha-error{
						font-family: ${theme.secondaryFont};
						line-height: ${theme.lineHeight};
						font-size: 1.1rem;
						float: right;	
						margin-bottom: 2rem;
						font-weight:900;
					}
					.submit-button {
						font-family: ${theme.secondaryFont};
						font-size: 2em;
						font-weight: 700;
						color: #fefefe;
						text-transform: uppercase;
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
export default withRouter(Contact);
