import React, { useState } from 'react';

// Chakra ui lib
import { Box } from '@chakra-ui/react';

// Utils
import { validation } from 'src/utils/helper';

// Components
import { FormInput } from '../FormInput';
import { Text } from '../Text';
import { DrawerModal } from '../DrawerModal';
import { Filter } from '../Filter';

interface AddUserModalProps {
  value?: string;
  isOpen?: boolean;
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

const AddUserModal = ({ value, isOpen = false }: AddUserModalProps) => {
  const [valueFilterRole, setValueRole] = useState<string>('Editor');
  const [valueFilterPlan, setValuePlan] = useState<string>('Basic');
  const [isOpenModal, setOpenModal] = useState<boolean>(isOpen);

  const [userInfo, setUserInfo] = useState({
    error: {
      fullname: '',
      username: '',
      email: '',
      company: '',
      country: '',
      contact: ''
    },
    info: {
      fullname: '',
      username: '',
      email: '',
      company: '',
      country: '',
      contact: 0
    },
    submittedSuccess: true
  });

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

  const checkDisableSubmit = () => {
    const errorList = Object.values(userInfo.error);
    const hasError = errorList.findIndex((e) => !!e) > -1;
    return hasError;
  };

  const validateInput = (value, key) => {
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
        fullname: validateInput(userInfo.info?.fullname, 'fullname').errorMsg,
        username: validateInput(userInfo.info?.username, 'username').errorMsg,
        email: validateInput(userInfo.info?.email, 'email').errorMsg,
        company: validateInput(userInfo.info?.company, 'company').errorMsg,
        country: validateInput(userInfo.info?.country, 'country').errorMsg,
        contact: validateInput(userInfo.info?.contact, 'contact').errorMsg
      },
      submittedSuccess: !checkDisableSubmit()
    });
    return;
  };

  const handleBlurInput = (event, key) => {
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
      submittedSuccess: !checkDisableSubmit()
    });
  };

  const handleChangeInput = (e, key) => {
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
      submittedSuccess: !checkDisableSubmit()
    });
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
      isError={userInfo.submittedSuccess}
      isDisabledSubmit={checkDisableSubmit()}
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
          value={userInfo.info?.fullname}
          error={userInfo.error?.fullname}
          onChange={(e) => handleChangeInput(e, 'fullname')}
          onBlur={(event) => handleBlurInput(event, 'fullname')}
        />
        <FormInput
          placeholder="UserName"
          label="UserName"
          type="text"
          size="default"
          value={userInfo.info?.username}
          error={userInfo.error?.username}
          onChange={(e) => handleChangeInput(e, 'username')}
          onBlur={(event) => handleBlurInput(event, 'username')}
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
