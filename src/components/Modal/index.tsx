import React from 'react';
import {
  Modal as ModalChakra,
  ModalProps as ModalPropsChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  CloseButton,
  Box
} from '@chakra-ui/react';

// Components
import { Button } from '../Button';
import { Text } from '../Text';

export interface ModalProps extends ModalPropsChakra {
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: string;
  variant?: 'normal' | 'primary' | 'secondary';
  bgColor?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  isDisabledSubmit?: boolean;
  isDisabledOutsideClick?: boolean;
  isLoading?: boolean;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Modal = ({
  isOpen = false,
  onClose,
  title,
  description,
  returnFocusOnClose = false,
  isCentered = false,
  children,
  size = 'default',
  variant = 'primary',
  bgColor = 'default.light',
  submitButtonText,
  cancelButtonText,
  isDisabledSubmit = true,
  isDisabledOutsideClick = false,
  isLoading,
  onSubmit,
  ...props
}: ModalProps) => {
  const btnRef = React.useRef();

  const handleOnClose = () => {
    if (!isDisabledOutsideClick) {
      onClose();
    }
    return;
  };

  return (
    <>
      <ModalChakra
        size={size}
        variant={variant}
        isOpen={isOpen}
        onClose={handleOnClose}
        finalFocusRef={btnRef}
        isCentered={isCentered}
        returnFocusOnClose={returnFocusOnClose}
        {...props}
      >
        <ModalOverlay />
        <ModalContent bg={bgColor}>
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              size="medium"
              variant="caption"
              letterSpacing="wide"
              w="100%"
              marginRight="30px"
              value={title}
            />
            <CloseButton
              outline="0"
              borderColor="transparent"
              color="default.grey.500"
              onClick={onClose}
            />
          </ModalHeader>
          <ModalBody>
            {description && <Text color="default.light" value={description} />}
            {children}
          </ModalBody>
          <ModalFooter pt="0px" display="flex" justifyContent="center">
            <Box>
              {submitButtonText && (
                <Button
                  isLoading={isLoading}
                  isDisabled={isDisabledSubmit}
                  label={submitButtonText}
                  onClick={onSubmit}
                  size="default"
                />
              )}
              {cancelButtonText && (
                <Button
                  label={cancelButtonText}
                  variant="transparent"
                  mr={3}
                  onClick={onClose}
                />
              )}
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>
  );
};
