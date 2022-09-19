import { ReactNode } from 'react';
import AuthProvider from 'src/contexts/AuthContext';
import AuthGuard from 'src/contexts/AuthGuard';
import Hero from 'src/sections/Home/Hero/index';

export interface HydrateProviderProps {
  children?: ReactNode;
  showHero?: boolean;
}

export default function HydrateProvider({
  showHero = false,
  children,
}: HydrateProviderProps) {
  return (
    <AuthProvider>
      <AuthGuard>
        {showHero && <Hero />}
        {children}
      </AuthGuard>
    </AuthProvider>
  );
}
