import { DownloadButtonListProps as OriginalProps } from './index.astro';
import './styles.css';

export default function ButtonGroup({ className = '' }: OriginalProps) {
  return (
    <div className={`download-button-list ${className}`}>
      <a href="#" className="download-button-item">
        <img
          src="/assets/images/icons/app-store.svg"
          alt="DogeCard Apple Store"
        />
      </a>
      <a href="#" className="download-button-item">
        <img
          src="/assets/images/icons/google-play.svg"
          alt="DogeCard Google Play"
        />
      </a>
    </div>
  );
}
