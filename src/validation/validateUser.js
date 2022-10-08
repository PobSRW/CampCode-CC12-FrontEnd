import Joi from 'joi';

const registerSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string()
		.email({ tlds: { allow: ['com', 'net'] } })
		.required(),
	phone: Joi.string()
		.length(10)
		.pattern(/^[0-9]+$/),
	password: Joi.string().required(),
	confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword');

const loginSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: ['com', 'net'] } })
		.required(),
	password: Joi.string().required(),
});

export const validateRegister = (input) => registerSchema.validate(input);

export const validateLogin = (input) => loginSchema.validate(input);
