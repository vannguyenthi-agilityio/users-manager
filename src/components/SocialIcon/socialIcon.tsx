import { SocialiconProps as OriginalProps } from './index.astro';

interface SocialiconProps extends OriginalProps {
  children?: React.ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

export default function SocialIcon({
  className = '',
  imageUrl = '',
  imageAlt = '',
  href = '',
  target = '_self',
}: SocialiconProps) {
  return (
    <a
      className={`d-flex social-icon ${className}`}
      href={href}
      target={target}
    >
      <img src={imageUrl} alt={imageAlt} width="100%" height="100%"/>
    </a>
  );
}

export const FacebookIcon = ({
  className = '',
  href = '',
}: SocialiconProps) => (
  <SocialIcon
    className={className}
    href={href}
    imageUrl="assets/images/icons/facebook.svg"
    imageAlt="DogeCard Facebook"
    target="_blank"
  />
);

export const TwitterIcon = ({ className = '', href = '' }: SocialiconProps) => (
  <SocialIcon
    className={className}
    href={href}
    imageUrl="assets/images/icons/twitter.svg"
    imageAlt="DogeCard Twitter"
    target="_blank"
  />
);
