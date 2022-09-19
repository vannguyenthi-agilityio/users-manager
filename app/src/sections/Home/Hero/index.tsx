import { useRef, MutableRefObject, useState, useCallback } from 'react';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import Heading from 'src/components/Heading/heading';
import Alert from 'src/components/Alert/alert';
import DownloadButtonList from 'src/components/DownloadButtonList/buttonGroup';

// Styles
import './styles.css';

// import { User } from 'src/models/user';
import { ROUTES } from 'src/constants/routes';
import { formalizePhone, santizerPhone, validatePhone } from 'src/utils/common';
import useAuth from 'src/hooks/useAuth';

export default function Hero() {
  const inputRef = useRef({
    value: '',
  });
  const [apiError, setApiError] = useState('');
  const [account, setAccount] = useState('');
  const [success, setSuccess] = useState(false);
  const { signUp } = useAuth();
  const handleChangeAccount = useCallback((e: { target: HTMLInputElement }) => {
    setAccount(formalizePhone(e.target.value));
  }, []);

  const handleBlurAccount = useCallback((e: { target: HTMLInputElement }) => {
    setApiError(validatePhone(e.target.value));
  }, []);

  const handleSignup = useCallback(() => {
    const username = (inputRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    const validationMsg = validatePhone(username);
    if (validationMsg) {
      setApiError(validationMsg);
      return;
    }

    // Reset api error
    setApiError('');

    signUp(
      {
        username: santizerPhone(username),
      },
      // onError
      (error) => {
        // Show error error
        setApiError(error);
        return;
      },
      // onSuccess
      () => {
        // Show success alert in 3s
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);

          // Navigate to Referral page
          window.location.href = ROUTES.REFERRAL;
        }, 3000);
      },
    );
  }, []);

  return (
    <section className="d-flex-column hero">
      <div className="container">
        <div className="d-flex-column hero-content">
          <Heading size="md" className="hero-heading" uppercase>
            Get your DogeCard
          </Heading>
          <p className="hero-description">In less than 5 minutes</p>
          <div
            className="hero-form"
            style={apiError ? {} : { marginBottom: '10px' }}
          >
            <div className="d-flex-column hero-input-wrapper">
              <Input
                autoFocus={true}
                type="tel"
                name="hero-input"
                placeholder="Enter phone number"
                required={true}
                className="hero-form-input"
                size="sm"
                innerRef={inputRef}
                errorMessage={apiError}
                value={account}
                onChange={handleChangeAccount}
                onBlur={handleBlurAccount}
              />
            </div>
            <Button className="hero-button" onclick={handleSignup}>
              Sign Up
            </Button>
            {success && (
              <Alert
                className="hero-form-alert"
                title="We sent you a text to download the app"
                description="If you don’t receive one, please check the number and try again"
              />
            )}
          </div>
          <p className="hero-text-term">
            By tapping ‘Sign Up’, you agree to our
            <a href="#" className="text-highlight letter-spacing">
              Terms,
            </a>
            <a href="#" className="text-highlight letter-spacing">
              E-sign Consent
            </a>
            and
            <a href="#" className="text-highlight letter-spacing">
              Privacy Policy.
            </a>
          </p>
          <DownloadButtonList />
        </div>
      </div>
      <div className="hero-bg"></div>
    </section>
  );
}
