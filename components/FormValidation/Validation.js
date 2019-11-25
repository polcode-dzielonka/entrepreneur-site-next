const validateForm = (values, name, setErrors, errors) => {
	switch (name) {
		case "firstName":
			if (!values.firstName) {
				return setErrors({
					...errors,
					firstName: "Please Enter Your First Name",
				});
			} else if (values.firstName) {
				return setErrors({
					...errors,
					firstName: "",
				});
			}
			break;
		case "lastName":
			if (!values.lastName) {
				return setErrors({
					...errors,
					lastName: "Please Enter Your Last Name",
				});
			} else if (values.lastName) {
				return setErrors({
					...errors,
					lastName: "",
				});
			}
			break;
		case "email":
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
				return setErrors({
					...errors,
					email: "Please Enter A Valid Email Address",
				});
			} else if (
				/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
			) {
				return setErrors({
					...errors,
					email: "",
				});
			}
			break;
		case "subject":
			if (!values.subject) {
				return setErrors({ ...errors, subject: "Please Enter A Subject" });
			} else if (values.subject) {
				return setErrors({
					...errors,
					subject: "",
				});
			}
	}
};

export default validateForm;
