import { useState, useEffect, ChangeEvent } from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Components
import { FormInput } from '../../FormInput';
import { Text } from '../../Text';
import { Filter } from '../../Filter';

import { Modal } from '../index';
import { User } from '../../../models/user';

interface EditUserModalProps {
  isOpen?: boolean;
  userInfo?: User;
  onSubmitModal: (user?: User, id?: string) => void;
}

const EditUserModal = ({
  isOpen = false,
  onSubmitModal,
  userInfo
}: EditUserModalProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const [valueFilterRole, setValueRole] = useState<string>('Editor');
  const [valueFilterPlan, setValuePlan] = useState<string>('Basic');

  const { email, fullName, userName } = userInfo;

  const [userInfoEdit, setUserInfo] = useState<User>({
    ...userInfo,
    fullName: fullName,
    userName: userName,
    email: email,
    company: '',
    country: '',
    contact: 0,
    role: '',
    plan: ''
  });

  const handleSetFilterRole = (val: string) => {
    setValueRole(val);
    setUserInfo({
      ...userInfoEdit,
      role: val
    });
  };

  const handleSetFilterPlan = (val: string) => {
    setValuePlan(val);
    setUserInfo({
      ...userInfoEdit,
      plan: val
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setUserInfo({
      ...userInfoEdit,
      [key]: e.target.value
    });
  };

  const filterRows = [
    {
      id: 1,
      values: {
        plan: 'Basic',
        role: 'Editor',
        status: 'Active'
      }
    },
    {
      id: 2,
      values: {
        plan: 'Team',
        role: 'Author',
        status: 'Pending'
      }
    },
    {
      id: 3,
      values: {
        plan: 'Basic',
        role: 'Maintaine',
        status: 'Inactive'
      }
    }
  ];

  const columnsFilterRole = {
    filterValue: valueFilterRole,
    setFilter: handleSetFilterRole,
    preFilteredRows: filterRows,
    header: 'Role',
    id: 'role',
    type: 'text',
    placeholder: 'Filter by role',
    size: 'md'
  };

  const columnsFilterPlan = {
    filterValue: valueFilterPlan,
    setFilter: handleSetFilterPlan,
    preFilteredRows: filterRows,
    header: 'Plan',
    id: 'plan',
    type: 'text',
    placeholder: 'Filter by plan',
    size: 'md'
  };

  const handleClose = () => {
    onSubmitModal(userInfoEdit);
    setOpenModal(false);
  };

  return (
    <Modal
      title="Edit User"
      label="Edit"
      isOpen={isOpenModal}
      onClose={handleClose}
      onSubmit={handleClose}
      size="default"
      submitButtonText="Edit"
      cancelButtonText="Cancel"
      variant="primary"
      isDisabledSubmit={false}
    >
      <Box my="40px">
        <Text
          size="extraSmall"
          variant="label"
          letterSpacing="wide"
          w="100%"
          value="Email"
        />
        <FormInput
          placeholder="FullName"
          label="FullName"
          type="text"
          size="default"
          value={userInfoEdit?.fullName}
          onChange={(e) => handleChangeInput(e, 'fullName')}
        />
        <FormInput
          placeholder="UserName"
          label="UserName"
          type="text"
          size="default"
          value={userInfoEdit?.userName}
          onChange={(e) => handleChangeInput(e, 'userName')}
        />
        <FormInput
          placeholder="Jonhdoe@email.com"
          label="Email"
          type="email"
          size="default"
          value={userInfoEdit?.email}
          onChange={(e) => handleChangeInput(e, 'email')}
        />
        <FormInput
          placeholder="Company"
          label="Company"
          type="text"
          size="default"
          value={userInfoEdit?.company}
          onChange={(e) => handleChangeInput(e, 'company')}
        />
        <FormInput
          placeholder="Country"
          label="Country"
          type="text"
          size="default"
          value={userInfoEdit?.country}
          onChange={(e) => handleChangeInput(e, 'country')}
        />
        <FormInput
          placeholder="Contact"
          label="Contact"
          type="number"
          size="default"
          value={userInfoEdit?.contact.toString()}
          onChange={(e) => handleChangeInput(e, 'contact')}
        />
        <Box mt={3}>
          <Filter column={columnsFilterRole} />
        </Box>
        <Box mt={3}>
          <Filter column={columnsFilterPlan} />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
