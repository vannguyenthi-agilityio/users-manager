import { useState, cloneElement } from 'react';

// Auth context
import useAuth from 'src/hooks/useAuth';

const HeroContainer = ({ children }) => {
  const { logIn, signUp } = useAuth();
  const [username, setUsername] = useState('');

  const handleBlurUsername = (e) => {
    // TODO: Validate
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    logIn({
      username,
      otp: '123456'
    });
  };

  const handleSignup = () => {
    signUp({
      username
    });
  };

  return;
  <>
    {cloneElement(children, {
      onLogin: handleLogin,
      onSignUp: handleSignup,
      onBlurUsername: handleBlurUsername
    })}
  </>;
};

export default HeroContainer;
