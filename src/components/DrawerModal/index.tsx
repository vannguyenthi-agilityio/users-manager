import React, { useState } from 'react';
import {
  DrawerProps as DrawerPropsChakra,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';

// Components
import { Button } from '../Button';

export interface DrawerProps extends DrawerPropsChakra {
  isDisabledSubmit?: boolean;
  children: React.ReactNode;
  title?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DrawerModal = ({
  children,
  title,
  cancelButtonText = 'Cancel',
  submitButtonText = 'Submit',
  isDisabledSubmit,
  isOpen = false,
  onClose,
  onSubmit,
  ...props
}: DrawerProps) => {
  const btnRef = React.useRef();

  const [isOpenAddUserModal, setOpenAddUserModal] = useState<boolean>(isOpen);

  const onOpenModal = () => {
    setOpenAddUserModal(true);
    return;
  };

  const onCloseModal = () => {
    setOpenAddUserModal(false);
    return;
  };

  return (
    <>
      <Button ref={btnRef} onClick={onOpenModal} ml={3}>
        {title}
      </Button>
      <Drawer
        isOpen={isOpenAddUserModal}
        placement="right"
        onClose={onCloseModal}
        finalFocusRef={btnRef}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>{children}</DrawerBody>

          <DrawerFooter>
            <Button variant="cancel" mr={3} onClick={onCloseModal}>
              {cancelButtonText}
            </Button>
            <Button isDisabled={isDisabledSubmit}>{submitButtonText}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
