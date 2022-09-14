import { useRef, MutableRefObject, useState, useCallback } from 'react';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import Heading from 'src/components/Heading/heading';
// import Alert from 'src/components/Alert/alert';
import DownloadButtonList from 'src/components/DownloadButtonList/buttonGroup';

// Styles
import './styles.css';

import { User } from 'src/models/user';
import { ROUTES } from 'src/constants/routes';
import { formalizePhone, santizerPhone } from 'src/utils/common';

export default function Hero() {
  const inputRef = useRef({
    value: '',
  });
  const [apiError, setApiError] = useState('');
  const [account, setAccount] = useState('');

  const handleChangeAccount = (e: { target: HTMLInputElement }) => {
    setAccount(formalizePhone(e.target.value));
  };

  // TODO: Validate for phone number
  const handleSignup = () => {
    const username = (inputRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    User.signUp(
      {
        username: santizerPhone(username),
      },
      // onError
      (error) => {
        // Show error error
        setApiError(error);
      },
      // onSuccess
      () => {
        // Show success alert and then
        // Navigate to Referral page
        window.location.href = ROUTES.REFERRAL;
      },
    );
  };

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
              />
            </div>
            <Button className="hero-button" onclick={handleSignup}>
              Sign Up
            </Button>
            {/* TODO: Show Alert components */}
            {/* <Alert
              className="hero-form-alert"
              title="We sent you a text to download the app"
              description="If you don’t receive one, please check the number and try again"
            /> */}
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
