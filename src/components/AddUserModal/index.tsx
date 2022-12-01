import React, { useState, FocusEvent, ChangeEvent } from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Models
import { User } from 'src/models/user';

// Utils
import { validation } from '../../utils/helper';

// Components
import { FormInput } from '../FormInput';
import { Text } from '../Text';
import { DrawerModal } from '../DrawerModal';
import { Filter } from '../Filter';

interface AddUserModalProps {
  value?: string;
  isOpen?: boolean;
  onSubmitModal: (userInfo: User) => void;
}

interface StateUser {
  error: {
    fullName: string;
    userName: string;
    email: string;
    company: string;
    country: string;
    contact: string;
  };
  info: {
    id: string;
    fullName: string;
    userName: string;
    email: string;
    company: string;
    country: string;
    contact: number;
    role: string;
    plan: string;
    status: string;
  };
  errorValidation: boolean;
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
  isOpen = false,
  onSubmitModal
}: AddUserModalProps) => {
  const [valueFilterRole, setValueRole] = useState<string>('Editor');
  const [valueFilterPlan, setValuePlan] = useState<string>('Basic');
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const [userInfo, setUserInfo] = useState<StateUser>({
    error: {
      fullName: '',
      userName: '',
      email: '',
      company: '',
      country: '',
      contact: ''
    },
    info: {
      id: Math.random().toString(),
      fullName: '',
      userName: '',
      email: '',
      company: '',
      country: '',
      contact: 0,
      role: '',
      plan: '',
      status: 'Active'
    },
    errorValidation: true
  });

  const disabledSubmit =
    Object.values(userInfo.error).findIndex((e) => !!e) > -1;

  const handleSetFilterRole = (val: string) => {
    setValueRole(val);
    setUserInfo({
      ...userInfo,
      info: {
        ...userInfo.info,
        role: val
      }
    });
  };

  const handleSetFilterPlan = (val: string) => {
    setValuePlan(val);
    setUserInfo({
      ...userInfo,
      info: {
        ...userInfo.info,
        plan: val
      }
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const validateInput = (value: string, key: string) => {
    const errorMsg = validation({ value, key });
    return {
      key,
      errorMsg
    };
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      error: {
        ...userInfo.error,
        fullName: validateInput(userInfo.info?.fullName, 'fullName').errorMsg,
        userName: validateInput(userInfo.info?.userName, 'userName').errorMsg,
        email: validateInput(userInfo.info?.email, 'email').errorMsg,
        company: validateInput(userInfo.info?.company, 'company').errorMsg,
        country: validateInput(userInfo.info?.country, 'country').errorMsg,
        contact: validateInput(userInfo.info?.contact.toString(), 'contact')
          .errorMsg
      },
      errorValidation: disabledSubmit
    });
    onSubmitModal(userInfo.info);
  };

  const handleBlurInput = (
    event: FocusEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = event.target;
    setUserInfo({
      ...userInfo,
      info: {
        ...userInfo.info,
        [key]: value
      },
      error: {
        ...userInfo.error,
        [key]: validateInput(value, key).errorMsg
      },
      errorValidation: disabledSubmit
    });
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value,
      info: {
        ...userInfo.info,
        [key]: value
      },
      error: {
        ...userInfo.error,
        [key]: validateInput(value, key).errorMsg
      },
      errorValidation: disabledSubmit
    });
    return;
  };

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
      isError={userInfo.errorValidation}
      isDisabledSubmit={disabledSubmit}
      onSubmit={(e) => handleSubmit(e)}
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
          value={userInfo.info?.fullName}
          error={userInfo.error?.fullName}
          onChange={(e) => handleChangeInput(e, 'fullName')}
          onBlur={(event) => handleBlurInput(event, 'fullName')}
        />
        <FormInput
          placeholder="UserName"
          label="UserName"
          type="text"
          size="default"
          value={userInfo.info?.userName}
          error={userInfo.error?.userName}
          onChange={(e) => handleChangeInput(e, 'userName')}
          onBlur={(event) => handleBlurInput(event, 'userName')}
        />
        <FormInput
          placeholder="Jonhdoe@email.com"
          label="Email"
          type="email"
          size="default"
          value={userInfo.info?.email}
          error={userInfo.error?.email}
          onChange={(e) => handleChangeInput(e, 'email')}
          onBlur={(event) => handleBlurInput(event, 'email')}
        />
        <FormInput
          placeholder="Company"
          label="Company"
          type="text"
          size="default"
          value={userInfo.info.company}
          error={userInfo.error?.company}
          onChange={(e) => handleChangeInput(e, 'company')}
          onBlur={(event) => handleBlurInput(event, 'company')}
        />
        <FormInput
          placeholder="Country"
          label="Country"
          type="text"
          size="default"
          value={userInfo.info?.country}
          error={userInfo.error?.country}
          onChange={(e) => handleChangeInput(e, 'country')}
          onBlur={(event) => handleBlurInput(event, 'country')}
        />
        <FormInput
          placeholder="Contact"
          label="Contact"
          type="number"
          size="default"
          value={userInfo.info?.contact.toString()}
          error={userInfo.error?.contact}
          onChange={(e) => handleChangeInput(e, 'contact')}
          onBlur={(event) => handleBlurInput(event, 'contact')}
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
