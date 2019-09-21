import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import {
	emailSignUp,
	INITIAL_STATE,
	ERROR_STATE,
} from "../data/emailSignupData";
import { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import { theme } from "../theme/baseCss";
import validate from "../components/FormValidation/Validation";

export default ({ url }) => {
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [errors, setErrors] = useState(ERROR_STATE);

	const handleSubmit = async e => {
		e.preventDefault();
		const { push } = url;
		const URL =
			"https://01khx5y3mh.execute-api.eu-west-1.amazonaws.com/prod/contact-mailfwd";
		const submitForm = {
			...formData,
			site: "entrepreneur",
			id: uuid(),
			timeStamp: Date(),
			popup: false,
		};

		// try {
		// 	await axios.post(URL, { ...submitForm });
		// 	push("/");
		// } catch (err) {
		// 	console.log("Error occurred", err);
		// }
	};

	const validateForm = e => {
		validate(formData, e.target.name, setErrors, errors);
	};

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<Layout background>
			<Head>
				<title>Newsletter</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="content">
				<article className="article">
					<h1 className="main-title">Newsletter</h1>
				</article>
				<form className="contact-form" onSubmit={handleSubmit}>
					<h3>
						Be the first to get our latest content - striaght to your inbox
					</h3>
					<p>
						The best wealth and personal development content on the internet.
						Get the latest content that you care about the most as soon as it
						comes avaialable.
					</p>
					{emailSignUp.map((input, index) => {
						return (
							<div className="form-group" key={index}>
								<label className="form-label">{input.label}</label>
								<input
									name={input.name}
									required={input.required}
									className={errors[input.name] ? "error" : input.className}
									type={input.type}
									placeholder={
										errors[input.name] ? errors[input.name] : input.placeholder
									}
									rows={input.rows}
									onChange={handleChange}
									onBlur={validateForm}
								/>
							</div>
						);
					})}

					<button type="submit" className="button">
						<span className="submit-button">SUBSCRIBE</span>
					</button>
					<strong>
						*By signing up, you are subscribing to recieve newsletter from
						Derivative Media Ltd. You data will be processed in accordance with
						our Privacy & Cookies Policy
					</strong>
				</form>
			</main>
			<style jsx>
				{`
					.button {
						width: 100%;
						height: 2.5rem;
						background-color: ${theme.primary};
						border: none;
						margin-top: 2rem;
						margin-bottom: 1.5rem;
					}
					.button:focus {
						outline: none;
					}
					.contact-form {
						padding: 1.5rem;
						margin-bottom: 4rem;
					}
					.content {
						margin-bottom: 5rem;
						display: flex;
						flex-grow: 1;
						flex-direction: column;
						background-color: "#111";
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
					h3 {
						font-size: 1.2em;
						font-weight: 600;
						color: ${theme.primary};
						font-family: ${theme.font};
						text-align: left;
						text-transform: uppercase;
						text-align: center;
					}
					p {
						font-size: ${theme.fontSize};
						font-weight: 600;
						color: #fff;
						font-family: ${theme.font};
						text-align: left;
						line-height: ${theme.lineHeight};
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
						color: #fefefe;
						text-transform: uppercase;
						text-align: center;
					}
					strong {
						color: white;
						font-family: ${theme.font};
						line-height: ${theme.lineHeight};
						font-size: 0.9rem;
					}
					.submit-button {
						font-family: ${theme.font};
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
