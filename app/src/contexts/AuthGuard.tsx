import { Suspense } from 'react';

// Const
import { ROUTES } from 'src/constants/routes';
import { API_ERROR } from 'src/constants/errors';

// Utils
import { isBrowser } from 'src/utils/common';

// Components
import { Splash } from 'src/components/Splash';

// Hooks
import useAuth from 'src/hooks/useAuth';

interface AuthGuardProps {
  children?: any;
}

interface RedirectPageProps {
  children: any;
  error?: string;
  isAuthenticated?: boolean;
}

const RedirectPage = ({
  children,
  error,
  isAuthenticated,
}: RedirectPageProps) => {
  // Make sure we're in the browser
  if (isBrowser) {
    const currentLocation = window.location.pathname;
    if (error) {
      if (!isAuthenticated && currentLocation === ROUTES.REFERRAL) {
        // window.location.href = ROUTES.HOME;
        return <Splash />;
      } else {
        return children;
      }
    }
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
        <RedirectPage
          error={API_ERROR.INVALID_AUTH}
          isAuthenticated={isAuthenticated}
        >
          {children}
        </RedirectPage>
      )}
    </Suspense>
  );
};

export default AuthGuard;
