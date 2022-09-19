import { AlertProps as OriginalProps } from './index.astro';
import './styles.css';

interface AlertProps extends OriginalProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function Alert({
  className = '',
  title = '',
  description = ''
}: AlertProps) {
  return (
    <div className={`alert ${className}`}>
      <h2 className="text-bold alert-heading">{title}</h2>
      <p className="alert-description">{description}</p>
    </div>
  );
}
