import { DownloadButtonListProps as OriginalProps } from './index.astro';
import './styles.css';

export default function ButtonGroup({ className = '' }: OriginalProps) {
  return (
    <div className={`download-button-list ${className}`}>
      <a href="#" className="download-button-item">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/icons/app-store.svg"
            width="192"
            height="100%"
          />
          <img
            src="/assets/images/icons/app-store.svg"
            alt="DogeCard Apple Store"
            width="164"
            height="56"
            loading="lazy"
          />
        </picture>
      </a>
      <a href="#" className="download-button-item">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="/assets/images/icons/google-play.svg"
            width="192"
            height="100%"
          />
          <img
            src="/assets/images/icons/google-play.svg"
            alt="DogeCard Google Play"
            width="164"
            height="56"
            loading="lazy"
          />
        </picture>
      </a>
    </div>
  );
}
