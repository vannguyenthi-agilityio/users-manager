import { useRef, MutableRefObject, useState } from 'react';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import Heading from 'src/components/Heading/heading';
import DownloadButtonList from 'src/components/DownloadButtonList/buttonGroup';

// Styles
import './styles.css';

import { User } from 'src/models/user';
import { ROUTES } from 'src/constants/routes';

export default function Hero() {
  const inputRef = useRef({
    value: ''
  });
  const [apiError, setApiError] = useState('');

  // TODO: Validate for phone number
  const handleSignup = () => {
    const username = (inputRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    User.signUp(
      {
        username
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
      }
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
            style={apiError ? {} : { marginBottom: '20px' }}
          >
            <Input
              autoFocus={true}
              type="tel"
              name="hero-input"
              placeholder="Enter phone number"
              required={true}
              className="hero-form-input"
              size="sm"
              innerRef={inputRef}
            />
            <Button className="hero-button" onclick={handleSignup}>
              Sign Up
            </Button>
          </div>
          {/** TODO: Label error */}
          {apiError && (
            <label
              style={{ color: 'red', marginBottom: '20px', marginTop: '10px' }}
            >
              {apiError}
            </label>
          )}
          <p className="hero-text-term">
            By tapping ‘Sign Up’, you agree to our
            <a href="#" className="text-highlight">
              Terms,
            </a>
            <a href="#" className="text-highlight">
              E-sign Consent
            </a>
            and
            <a href="#" className="text-highlight">
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
