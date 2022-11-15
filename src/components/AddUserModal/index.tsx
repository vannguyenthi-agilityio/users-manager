import React, { useState } from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Components
import { FormInput } from '../FormInput';
import { Text } from '../Text';
import { DrawerModal } from '../DrawerModal';
import { Filter } from '../Filter';

interface AddUserModalProps {
  value?: string;
  error?: string;
  isOpen?: boolean;
  isDisabledSubmit?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement, Element>,
    value: string
  ) => void;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

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

const AddUserModal = ({
  value,
  error,
  isOpen = false,
  isDisabledSubmit,
  onChange,
}: AddUserModalProps) => {
  const [valueFilterRole, setValueRole] = useState<string>('Editor');
  const [valueFilterPlan, setValuePlan] = useState<string>('Basic');
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const handleSetFilterRole = (val) => {
    setValueRole(val);
    return;
  };

  const handleSetFilterPlan = (val) => {
    setValuePlan(val);
    return;
  };

  const handleClose = () => {
    setOpenModal(false);
    return;
  };

  const handleSubmit = () => {
    setOpenModal(false);
  }

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

  return (
    <DrawerModal
      title="Add User"
      size="sm"
      isOpen={isOpenModal}
      onClose={handleClose}
      isDisabledSubmit={isDisabledSubmit}
      onSubmit={handleSubmit}
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
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'fullname')}
        />
        <FormInput
          placeholder="UserName"
          label="UserName"
          type="text"
          size="default"
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'username')}
        />
        <FormInput
          placeholder="Jonhdoe@email.com"
          label="Email"
          type="email"
          size="default"
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'email')}
        />
        <FormInput
          placeholder="Company"
          label="Company"
          type="text"
          size="default"
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'company')}
        />
        <FormInput
          placeholder="Country"
          label="Country"
          type="text"
          size="default"
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'country')}
        />
        <FormInput
          placeholder="Contact"
          label="Contact"
          type="number"
          size="default"
          value={value}
          error={error}
          onChange={(e) => onChange(e, 'contact')}
        />
        <Box mt={3}>
          <Filter column={columnsFilterRole} />
        </Box>
        <Box mt={3}>
          <Filter column={columnsFilterPlan} />
        </Box>
      </Box>
    </DrawerModal>
  );
};

export default AddUserModal;
