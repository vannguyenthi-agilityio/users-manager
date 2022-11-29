import { useState, useEffect } from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Components\
import { Text } from '../../Text';
import { Modal } from '..';

interface DeleteUserModalProps {
  isOpen?: boolean;
  onSubmitModal?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => void;
}

const DeleteUserModal = ({
  isOpen = false,
  onSubmitModal
}: DeleteUserModalProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const handleClose = () => {
    setOpenModal(false);
    return;
  };

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  return (
    <Modal
      title="Delele User"
      label="Delete"
      isOpen={isOpenModal}
      onClose={handleClose}
      onSubmit={onSubmitModal}
      size="default"
      submitButtonText="Delete"
      cancelButtonText="Cancel"
      variant="primary"
      isDisabledSubmit={false}
    >
      <Box my="40px">
        <Text
          color="default.grey.600"
          value="Are you sure delete this user ?"
        />
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
