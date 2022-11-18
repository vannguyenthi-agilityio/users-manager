const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_PATTERN = /\d*(?:[a-zA-Z]){3,}\d*/;
export const isEmail = (value = '') => value.match(EMAIL_PATTERN);
export const isUserName = (value = '') => value.match(NAME_PATTERN);

export const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const validation = ({
  value = '',
  key = 'Email' // Email
}) => {
  if (!value) {
    return `${
      key !== 'Email'
        ? `Enter your ${capitalizeFirstLetter(key)}`
        : 'Enter your email'
    }`;
  }

  switch (key.toLowerCase()) {
    case 'email':
      return !isEmail(value) ? 'Email is invalid' : '';
    case 'fullname':
    case 'username':
      return !isUserName(value) ? 'Must be at least 3 characters' : '';
    default:
      return '';
  }
};
