export const required = (value) => (value ? undefined : 'Обязательное поле');
export const minPasswordLength = (min) => (value) =>
	value.length <= min ? 'Слабый пароль' : undefined;
export const mustMatch = (matchValue) => (value) =>
	value === matchValue ? undefined : 'Пароли не совпадают';
export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);
