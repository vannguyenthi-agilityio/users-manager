import { useState, useRef, useCallback, MutableRefObject } from 'react';
import Heading from 'src/components/Heading/heading';
import Input from 'src/components/Input/input';
import Button from 'src/components/Button/button';
import Alert from 'src/components/Alert/alert';

import { validateInputValue } from 'utils';
import './styles.css';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    name: '',
    email: '',
    content: '',
  });
  const nameRef = useRef({
    value: '',
  });
  const emailRef = useRef({
    value: '',
  });
  const contentRef = useRef({
    value: '',
  });

  const isValidate = useCallback((name, email, content) => {
    const validateError = {
      name: validateInputValue(name, 'Name'),
      email: validateInputValue(email, 'Email'),
      content: validateInputValue(content, 'Content'),
    };
    setError(validateError);
    if (Object.values(validateError).find((item) => !!item)) {
      return false;
    }
    return true;
  }, []);

  const handleBlurName = useCallback((e: { target: HTMLInputElement }) => {
    const validateError = {
      ...error,
      name: validateInputValue(e.target.value, 'Name'),
    };
    setError(validateError);
  }, []);
  const handleBlurEmail = useCallback((e: { target: HTMLInputElement }) => {
    const validateError = {
      ...error,
      email: validateInputValue(e.target.value, 'Email'),
    };
    setError(validateError);
  }, []);
  const handleBlurContent = useCallback((e: { target: HTMLInputElement }) => {
    const validateError = {
      ...error,
      content: validateInputValue(e.target.value, 'Content'),
    };
    setError(validateError);
  }, []);

  const handleSubmitContactForm = useCallback(() => {
    // Validate email
    const username = (nameRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    const email = (emailRef as MutableRefObject<{ value: string }>)?.current
      ?.value;
    const content = (contentRef as MutableRefObject<{ value: string }>)?.current
      ?.value;

    if (!isValidate(username, email, content)) {
      return;
    }

    // Show success alert in 3s
    setSuccess(true);

    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
    contentRef.current.value = '';

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="d-flex contact-form-wrapper">
        <Heading size="sm" className="contact-form-heading">
          Contact us
        </Heading>
        <p className="contact-form-description">
          Any questions or feedback? Send us a message!
        </p>
        <div className="d-flex contact-form-content">
          <div className="contact-form-info">
            <Heading size="xs" className="contact-form-info-heading">
              Contact Information
            </Heading>
            <p className="contact-form-info-description">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
            <address className="contact-form-info-list">
              <div className="d-flex contact-form-info-item">
                <img
                  className="contact-form-info-icon"
                  src="assets/images/icons/contact-phone.svg"
                  alt="DogeCard location"
                />
                <a href="tel:14242727344">+1-424-272-7344</a>
              </div>
              <div className="d-flex contact-form-info-item">
                <img
                  className="contact-form-info-icon"
                  src="assets/images/icons/contact-location.svg"
                  alt="DogeCard location"
                />
                <p>10573 West Pico Blvd. #186, Los Angeles, CA 90064-2348</p>
              </div>
              <div className="d-flex contact-form-info-item">
                <img
                  className="contact-form-info-icon"
                  src="assets/images/icons/contact-time.svg"
                  alt="DogeCard location"
                />
                <p>
                  <time>9:00</time> - <time>17:00</time>
                </p>
              </div>
              <div className="d-flex contact-form-info-item">
                <img
                  className="contact-form-info-icon"
                  src="assets/images/icons/contact-calendar.svg"
                  alt="DogeCard location"
                />
                <p>Monday - Friday</p>
              </div>
            </address>
          </div>
          <div className="d-flex contact-form">
            <div className="d-flex contact-form-user">
              <div className="contact-form-name">
                <Input
                  colorScheme="dark"
                  placeholder="Name"
                  innerRef={nameRef}
                  errorMessage={error.name}
                  onBlur={handleBlurName}
                />
              </div>
              <div className="contact-form-email">
                <Input
                  colorScheme="dark"
                  placeholder="Email"
                  innerRef={emailRef}
                  errorMessage={error.email}
                  onBlur={handleBlurEmail}
                />
              </div>
            </div>
            <textarea
              placeholder="Message"
              className={`contact-form-message ${
                error.content ? 'input-error' : ''
              }`}
              ref={contentRef}
              onBlur={handleBlurContent}
            ></textarea>
            {error.content && (
              <label className="input-error-message">{error.content}</label>
            )}
            <Button
              className="contact-form-button"
              onclick={handleSubmitContactForm}
            >
              Submit
            </Button>
            {success && (
              <Alert
                className="contact-form-alert"
                title="Your contact information was submitted successfully!"
                description="We will contact you as soon as possible!"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
