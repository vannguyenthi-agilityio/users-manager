import { ReactNode } from 'react';
import { ButtonProps as OriginalProps } from './index.astro';
import './styles.css';

interface ButtonProps extends OriginalProps {
  children?: ReactNode;
}

export default function Button({
  children,
  className = '',
  onclick = () => {}
}: ButtonProps) {
  return (
    <button className={`btn ${className}`} onClick={onclick}>
      {children}
    </button>
  );
}
