import { useEffect, useRef, MutableRefObject, useContext } from 'react';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import Heading from 'src/components/Heading/heading';
import DownloadButtonList from 'src/components/DownloadButtonList/buttonGroup';

// Hooks
// import useAuth from 'src/hooks/useAuth';

// Styles
import './styles.css';

import { useSharedContext } from 'src/libs/SharedContext/React';
import { User } from 'src/models/user';
import { ROUTES } from 'src/constants/routes';

export default function Hero() {
  // const user = useSharedContext(User.user)
  // const isAuthenticated = useSharedContext(User.isAuthenticated)
  // console.log('Hero: ', user, isAuthenticated)

  // const authContext = useAuth();
  // console.log('Hero component', authContext);
  const inputRef = useRef({
    value: ''
  });

  // const handleBlurUsername = (e) => {
  //   // TODO: Validate
  //   setUsername(e.target.value);
  // };

  // const handleLogin = () => {
  //   logIn({
  //     username,
  //     otp: '123456',
  //   });
  // };

  const handleSignup = () => {
    const username = (inputRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    console.log('handleSignup', username);
    User.signUp(
      {
        username
      },
      // onError
      () => {},
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
          <div className="hero-form">
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
