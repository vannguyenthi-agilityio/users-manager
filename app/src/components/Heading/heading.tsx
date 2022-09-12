import { ReactNode } from 'react';
import { HeadingProps as OriginalProps } from './index.astro';
import './styles.css';

interface HeadingProps extends OriginalProps {
  children?: ReactNode;
}
export default function Heading({
  children,
  className = '',
  uppercase = false,
  size = 'sm'
}: HeadingProps) {
  return (
    <h2
      className={`heading heading-${size} ${
        uppercase ? 'heading-uppercase' : ''
      } ${className}`}
    >
      {children}
    </h2>
  );
}
