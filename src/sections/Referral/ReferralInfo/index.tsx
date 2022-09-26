import { useCallback, useState } from 'react';
import Heading from 'src/components/Heading/heading';
import {
  TwitterIcon,
  FacebookIcon,
} from 'src/components/SocialIcon/socialIcon';
import Button from 'src/components/Button/button';
import Input from 'src/components/Input/input';
import InputGroup from 'src/components/InputGroup/inputGroup';
import Alert from 'src/components/Alert/alert';

// Constants
import { LOCAL_STORAGE_KEYS } from 'src/constants/common';
import { getStorage } from 'src/utils/storages';

// Styles
import './styles.css';

// Utils
import { getBaseUrl, copyToClipboard } from 'src/utils/common';

export default function ReferralInfo() {
  const user = JSON.parse(getStorage(LOCAL_STORAGE_KEYS.USER_INFO));
  const referralCodeLink = getBaseUrl(
    `home?code=${user.referralCode}`,
  ).toString();
  const homePreviewImage = getBaseUrl(
    'assets/images/home-preview.png',
  ).toString();
  const [success, setSuccess] = useState(false);

  const handleCopyToClipboard = useCallback(() => {
    copyToClipboard(referralCodeLink);

    // Show successful message
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, []);

  return (
    <div className="d-flex-column referral-card-info">
      <div className="referral-card-head">
        <p className="referral-card-description">Next</p>
        <Heading size="sm" className="referral-info-heading" uppercase>
          Invite Friends, Get $25 in Dogecoin
        </Heading>
        <p className="referral-card-description">
          For each friend who uses your link:
        </p>
      </div>
      <div className="referral-card-body">
        <Heading size="xs" className="text-highlight referral-info-sub-heading">
          You and your friend get 🤝
        </Heading>
        <ol className="hightlight-list referral-info-list">
          <li className="referral-info-item">$25 in Dogecoin</li>
          <li className="referral-info-item">Move up waitlist</li>
        </ol>
      </div>
      <div className="d-flex referral-social-content">
        <p className="referral-social-description">Share:</p>
        <div className="d-flex referral-social-icon">
          <TwitterIcon
            href={`https://twitter.com/share?url=${encodeURIComponent(
              referralCodeLink,
            )}&text=${encodeURIComponent(
              'DogeCard - 1.5% Dogecoin Rewards on every purchase.',
            )}`}
          />
          <FacebookIcon
            href={`http://www.facebook.com/sharer/sharer.php?s=100&p[url]=${referralCodeLink}&p[images][0]=${homePreviewImage}&p[summary]=DogeCard - 1.5% Dogecoin Rewards on every purchase.`}
          />
        </div>
      </div>
      <div
        className={`d-flex referral-input-group ${
          success ? 'referral-input-group-success' : ''
        }`}
      >
        <p className="referral-input-description">Your unique link</p>
        <InputGroup>
          <Input
            size="md"
            className="truncate-text input-group-item"
            colorScheme="dark"
            readonly={true}
            value={referralCodeLink}
          />
          <Button
            className="input-group-content"
            onclick={handleCopyToClipboard}
          >
            Copy link
          </Button>
        </InputGroup>
        {success && (
          <Alert
            className="referral-form-alert"
            title="Copied successfully"
            description="Your referral link has just been copied to clipboard"
          />
        )}
      </div>
    </div>
  );
}
