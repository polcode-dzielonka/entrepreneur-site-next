const emailSignUp = [
	{
		name: "firstName",
		placeholder: "First Name",
		type: "text",
		required: true,
		className: "form-input",
		rows: 1,
		textarea: false,
	},
	{
		name: "lastName",
		placeholder: "Last Name",
		type: "text",
		required: true,
		className: "form-input",
		rows: 1,
		textarea: false,
	},
	{
		name: "email",
		placeholder: "Email Address",
		type: "email",
		required: true,
		className: "form-input",
		rows: 1,
		textarea: false,
	},
];
const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	email: "",
};

const ERROR_STATE = {
	firstName: "",
	lastName: "",
	email: "",
};
export { emailSignUp, INITIAL_STATE, ERROR_STATE };
