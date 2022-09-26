import { MutableRefObject, useCallback, useRef, useState } from 'react';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import Heading from 'src/components/Heading/heading';
import { validateInputValue } from 'src/utils/common';

// Styles
import './styles.css';
import { ROUTES } from 'src/constants/routes';
import { setStorage } from 'src/mocks/helpers';
import { LOCAL_STORAGE_KEYS } from 'constants:*';

export default function Login() {
  const inputRef = useRef({
    value: '',
  });
  const [error, setError] = useState('');

  const handleBlur = useCallback((e: { target: HTMLInputElement }) => {
    setError(validateInputValue(e.target.value, 'Password'));
  }, []);

  const handleSubmit = useCallback(() => {
    const password = (inputRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    const validationMsg = validateInputValue(password, 'Password');
    if (validationMsg) {
      setError(validationMsg);
      return;
    }

    if (password === import.meta.env.PUBLIC_SECURED_PASSWORD) {
      setStorage(LOCAL_STORAGE_KEYS.SECURED_PASSWORD, JSON.stringify(password));
      window.location.replace(ROUTES.HOME);
    } else {
      setError('Invalid password!');
    }
  }, []);

  return (
    <div>
      <Heading size="sm" className="page-heading" uppercase>
        Secured Password
      </Heading>
      <div className="input-group">
        <Input
          autoFocus={true}
          type="password"
          name="input-password"
          placeholder="Enter secured password"
          required={true}
          className="input-password"
          size="sm"
          innerRef={inputRef}
          errorMessage={error}
          onBlur={handleBlur}
        />
      </div>
      <Button className="btn-submit" onclick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
