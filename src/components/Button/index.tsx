import React from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';

interface ButtonProps extends ButtonPropsChakra {
  children?: React.ReactNode;
  label?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  primary?: boolean;
  ref?: React.LegacyRef<HTMLButtonElement>;
  backgroundColor?: string;
  size?: 'default' | 'autoSize' | 'large' | 'medium' | 'small';
  variant?:
    | 'colorDefault'
    | 'status'
    | 'transparent'
    | 'border'
    | 'muted'
    | 'cancel';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  size = 'default',
  children,
  label,
  ref,
  backgroundColor,
  isDisabled = false,
  onClick,
  className = '',
  variant = 'colorDefault',
  ...props
}: ButtonProps) => (
  <ButtonChakra
    size={size}
    onClick={onClick}
    variant={variant}
    backgroundColor={backgroundColor}
    isDisabled={isDisabled}
    className={className}
    ref={ref}
    {...props}
  >
    {label}
    {children}
  </ButtonChakra>
);
