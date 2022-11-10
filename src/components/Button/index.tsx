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
  backgroundColor?: string;
  size?: 'default' | 'autoSize' | 'large' | 'medium' | 'small'
  variant?: 'colorDefault' | 'status' | 'transparent' | 'border' | 'muted';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  size = 'default',
  children,
  label,
  backgroundColor,
  isDisabled = false,
  onClick,
  className = '',
  variant = 'colorDefault',
  ...props
}: ButtonProps) => {
  return (
    <ButtonChakra
      size={size}
      onClick={onClick}
      variant={variant}
      backgroundColor={backgroundColor}
      isDisabled={isDisabled}
      className={className}
      {...props}
    >
      {label}
      {children}
    </ButtonChakra>
  );
};
