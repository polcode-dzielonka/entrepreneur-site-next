export const EMAIL_SIGN_UP = `
	mutation CreateEmailSignup($input: CreateEmailSignupInput!) {
		createEmailSignup(input: $input) {
			id
			firstName
			lastName
			popUp
			createdAt
			updatedAt
			email
			contentType
			contentHeadline
			contentCategory
			source
		}
	}
`;
