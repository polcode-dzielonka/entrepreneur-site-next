import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import {
	emailSignUp,
	INITIAL_STATE,
	ERROR_STATE,
} from "../data/emailSignupData";
import { useState } from "react";
import axios from "axios";
import { theme } from "../theme/baseCss";
import validate from "../components/FormValidation/Validation";
import Vanilla from "../components/Layouts/vanillaLayout";
import RippleButton from "../components/Button/Button";
import { EMAIL_SIGN_UP } from "../graphql/emailSignUp";
import Cookie from "js-cookie";
import Link from "next/link";
import ImageLoader from "../components/Loading/ImageLoader";
const Newsletter = ({ url }) => {
	const [formData, setFormData] = useState(INITIAL_STATE);
	const [successMsg, setSuccessMsg] = useState(false);
	const [errors, setErrors] = useState(ERROR_STATE);

	const handleSubmit = async e => {
		e.preventDefault();
		setErrors({
			...errors,
			badRequest: false,
		});
		const submitForm = {
			...formData,
			id: formData.email,
			emailSignupSiteId: process.env.REACT_APP_SITE_ID,
			popUp: false,
		};

		try {
			const mutationData = {
				query: EMAIL_SIGN_UP,
				operationName: "CreateEmailSignup",
				variables: { input: submitForm },
			};
			await axios({
				url: process.env.REACT_APP_PROD_ENDPOINT,
				method: "POST",
				data: JSON.stringify(mutationData),
				headers: {
					Accept: "application/json",
					"x-api-key": process.env.REACT_APP_PROD_API_KEY,
				},
			});
			const expiryDate = new Date(new Date().getTime() + 1 * 60 * 1000);
			Cookie.set("wealth-cookie-email-signup", JSON.stringify(false), {
				expires: expiryDate,
			});
			setFormData(INITIAL_STATE);
			setSuccessMsg(true);
		} catch (err) {
			console.log("Error with request", err);
			setFormData(INITIAL_STATE);

			setErrors({
				...errors,
				badRequest: true,
			});
		}
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
				<link rel="canonical" href={`${process.env.SITE_ADDRESS}/newsletter`} />
			</Head>
			<Vanilla>
				<main className="content">
					<article className="article">
						<h1 className="main-title">Newsletter</h1>
					</article>
					<ImageLoader
						src={"/static/business_cover_photo.png"}
						alt={process.env.SITE_NAME}
						animation={false}
					/>
					<form className="contact-form" onSubmit={handleSubmit}>
						<h3>
							Be the first to get our latest content - straight to your inbox
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
										value={formData[input.name]}
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
						})}
						<RippleButton
							label={"Subscribe"}
							color={theme.primary}
							handler={null}
							type="submit"
						/>
						{successMsg && (
							<>
								<p>
									Congratulations! You have been successfully added to our
									Newsletter. Keep an eye out in your inbox for our latest
									content.
								</p>
								<p>
									If you don't see anything from us, please check your
									Promotions or Spam folder.
								</p>
							</>
						)}
						{errors.badRequest && (
							<>
								<p>
									Uh Oh! Something went wrong - Please try again or Contact
									support{" "}
									<Link href="/contact">
										<a className="link" target="_blank">
											here.
										</a>
									</Link>
								</p>
							</>
						)}
						<strong>
							*By signing up, you are subscribing to recieve newsletter from
							Derivative Media Ltd. You data will be processed in accordance
							with our Privacy & Cookies Policy
						</strong>
					</form>
				</main>
			</Vanilla>
			<style jsx>
				{`
					a {
						color: #fefefe;
						text-decoration: none;
					}
					.contact-form {
						padding: 1.5rem;
						margin-bottom: 4rem;
					}
					.content {
						margin-right: 5rem;
						margin-left: 5rem;
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

export default Newsletter;
