import React, { Suspense } from 'react';

// Hooks
import useAuth from 'src/hooks/useAuth';

// Const
import { ROUTES } from 'src/constants/routes';
import { API_ERROR } from 'src/constants/errors';

// Utils
import { isBrowser } from 'src/utils/common';

// Components
import { Splash } from 'src/components/Splash';

interface AuthGuardProps {
  children?: any;
}

interface RedirectPageProps {
  children: any;
  error?: string;
}

const RedirectPage = ({ children, error }: RedirectPageProps) => {
  const { isAuthenticated } = useAuth();
  console.log(window.location);
  // Make sure we're in the browser
  if (isBrowser && error && window.location.href === ROUTES.REFERRAL) {
    if (!isAuthenticated) {
      // navigate(ROUTES.HOME);
      window.location.href = ROUTES.HOME;
    }

    return <Splash />;
  }

  return children;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Splash />}>
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <RedirectPage error={API_ERROR.INVALID_AUTH}>{children}</RedirectPage>
      )}
    </Suspense>
  );
};

export default AuthGuard;
