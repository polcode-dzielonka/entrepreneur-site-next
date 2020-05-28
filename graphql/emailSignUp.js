export const EMAIL_SIGN_UP = /* GraphQL */ `
	mutation CreateEmail($input: CreateEmailInput!) {
		createEmail(input: $input) {
			id
			popUp
			firstName
			lastName
			email
			contentType
			contentHeadline
			contentCategory
			source
			site
			emailSignupSiteId
			createdAt
			updatedAt
		}
	}
`;

export const createContactForm = /* GraphQL */ `
	mutation CreateContactForm($input: ContactFormInput!) {
		createContactForm(input: $input) {
			id
			message
			email
			site
		}
	}
`;
