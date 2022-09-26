import { ReactNode } from 'react';
import AuthProvider from 'src/contexts/AuthContext';
import AuthGuard from 'src/contexts/AuthGuard';
import Hero from 'src/sections/Home/Hero/index';
import ReferralContainer from 'src/sections/Referral/index';
import ContactContainer from 'src/sections/About/index';

export interface HydrateProviderProps {
  children?: ReactNode;
  showHero?: boolean;
  showReferral?: boolean;
  showContact?: boolean;
}

export default function HydrateProvider({
  showHero = false,
  showReferral = false,
  showContact = false,
  children,
}: HydrateProviderProps) {
  return (
    <AuthProvider>
      <AuthGuard>
        {showHero && <Hero />}
        {showReferral ? (
          <ReferralContainer>{children}</ReferralContainer>
        ) : showContact ? (
          <ContactContainer>{children}</ContactContainer>
        ) : (
          <>{children}</>
        )}
      </AuthGuard>
    </AuthProvider>
  );
}
