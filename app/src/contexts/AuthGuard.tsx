import { Suspense, useEffect } from 'react';

// Shared Context
import { useSharedContext } from 'src/libs/SharedContext/React';
import { User } from 'src/models/user';

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
  const isAuthenticated = useSharedContext(User.isAuthenticated);
  // Make sure we're in the browser
  if (isBrowser) {
    const currentLocation = window.location.pathname;
    if (error) {
      if (!isAuthenticated && currentLocation === ROUTES.REFERRAL) {
        window.location.href = ROUTES.HOME;
        return <Splash />;
      } else {
        return children;
      }
    }
  }

  return children;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = useSharedContext(User.isAuthenticated);
  const isInitialized = useSharedContext(User.isInitialized);

  useEffect(() => {
    if (!isInitialized) {
      User.initialize();
    }
  }, []);

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
