import { ReactNode } from 'react';
import AuthProvider from 'src/contexts/AuthContext';
import AuthGuard from 'src/contexts/AuthGuard';
import Hero from 'src/sections/Home/Hero/index';
import ReferralContainer from 'src/sections/Referral/index';

export interface HydrateProviderProps {
  children?: ReactNode;
  showHero?: boolean;
  showReferral?: boolean;
}

export default function HydrateProvider({
  showHero = false,
  showReferral = false,
  children,
}: HydrateProviderProps) {
  return (
    <AuthProvider>
      <AuthGuard>
        {showHero && <Hero />}
        {showReferral ? (
          <ReferralContainer>{children}</ReferralContainer>
        ) : (
          children
        )}
      </AuthGuard>
    </AuthProvider>
  );
}
