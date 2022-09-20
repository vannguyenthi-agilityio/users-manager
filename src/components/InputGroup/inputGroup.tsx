import { InputGroupProps as OriginalProps } from './index.astro';
import './styles.css';

interface InputGroupProps extends OriginalProps {
  children?: React.ReactNode;
}

export default function InputGroup({
  className = '',
  children,
}: InputGroupProps) {
  return <div className={`d-flex input-group ${className}`}>{children}</div>;
}
