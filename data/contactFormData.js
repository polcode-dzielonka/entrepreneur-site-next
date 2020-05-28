const contactForm = [
	{
		name: "firstName",
		placeholder: "First Name",
		type: "text",
		required: true,
		className: "formInput",
		rows: 1,
		textarea: false,
	},
	{
		name: "lastName",
		placeholder: "Last Name",
		type: "text",
		required: true,
		className: "formInput",
		rows: 1,
		textarea: false,
	},
	{
		name: "email",
		placeholder: "Email Address",
		type: "email",
		required: true,
		className: "formInput",
		rows: 1,
		textarea: false,
	},
	{
		name: "subject",
		placeholder: "Subject",
		type: "text",
		required: true,
		className: "formInput",
		rows: 1,
		textarea: false,
	},
	{
		name: "message",
		placeholder: "Message",
		type: "text",
		required: true,
		className: "textAreaInput",
		rows: 5,
		textarea: true,
	},
];
const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	message: "",
};

const ERROR_STATE = {
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	message: "",
};
export { contactForm, INITIAL_STATE, ERROR_STATE };
