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
      <p className="text-bold alert-title">{title}</p>
      <p className="alert-description">{description}</p>
    </div>
  );
}
