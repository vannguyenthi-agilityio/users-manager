import React, { MutableRefObject, RefObject } from 'react';
import './styles.css';
import { InputProps as OriginalProps } from './index.astro';

export interface InputProps extends OriginalProps {
  innerRef?: MutableRefObject<{ value: string }>;
}

const Input = ({
  className = '',
  name = '',
  type = 'text',
  maxlength = 100,
  pattern = '',
  placeholder = '',
  autoFocus = false,
  readonly = false,
  colorScheme = 'light',
  size = 'sm',
  onChange = () => {},
  onBlur = () => {},
  value,
  innerRef,
  errorMessage = '',
}: InputProps) => {
  return (
    <>
      <input
        ref={innerRef as RefObject<HTMLInputElement>}
        readOnly={readonly}
        autoFocus={autoFocus}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className={`input input-${size} ${
          colorScheme == 'dark' ? 'input-dark' : 'input-light'
        } ${errorMessage ? 'input-error' : ''} ${className}`}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxlength}
        pattern={pattern}
        value={value}
      />
      {errorMessage && (
        <label className="input-error-message">{errorMessage}</label>
      )}
    </>
  );
};

export default Input;
