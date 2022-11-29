import { useState, useEffect } from 'react';

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
  onSubmitModal?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id?: number
  ) => void;
}

interface StateUser {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  company: string;
  country: string;
  contact: number;
  role: string;
  plan: string;
  status: string;
}

const EditUserModal = ({
  isOpen = false,
  onSubmitModal,
  userInfo
}: EditUserModalProps) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const [valueFilterRole, setValueRole] = useState<string>('Editor');
  const [valueFilterPlan, setValuePlan] = useState<string>('Basic');

  const { email, role, plan, status, fullName, userName } = userInfo;

  const [userInfoEdit, setUserInfo] = useState<StateUser>({
    id: Math.random(),
    fullName: fullName,
    userName: userName,
    email: email,
    company: '',
    country: '',
    contact: 0,
    role: role,
    plan: plan,
    status: status
  });

  const handleSetFilterRole = (val) => {
    setValueRole(val);
    setUserInfo({
      ...userInfoEdit,
      role: val
    });
    return;
  };

  const handleSetFilterPlan = (val) => {
    setValuePlan(val);
    setUserInfo({
      ...userInfoEdit,
      plan: val
    });
    return;
  };

  const handleChangeInput = (e, key) => {
    setUserInfo({
      ...userInfoEdit,
      [key]: e.target.value
    });
    return;
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
    setOpenModal(isOpen);
    return;
  };

  useEffect(() => {
    setOpenModal(isOpen);
  }, [!isOpen]);

  return (
    <Modal
      title="Edit User"
      label="Edit"
      isOpen={isOpenModal}
      onClose={handleClose}
      onSubmit={onSubmitModal}
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
