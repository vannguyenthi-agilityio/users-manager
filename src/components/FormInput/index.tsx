import { KeyboardEvent, FocusEvent, ChangeEvent, useState } from 'react';

import {
  FormErrorMessage,
  FormLabel,
  Box,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Input as InputChakra,
  InputProps as InputPropsChakra
} from '@chakra-ui/react';

import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

const stepperButtonStyles = {
  width: '8px',
  height: '8px',
  overflow: 'hidden',
  margin: '0',
  backgroundColor: '#dedede',
  border: '0px solid',
  borderRadius: '0px',
  fontSize: '8px',
  marginTop: '2px',
  padding: '5px',
  display: 'grid',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems: 'center'
};

const stepperStyles = {
  borderRadius: '1px',
  display: 'grid',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems: 'center'
};

const inputNumberStyles = {
  height: '56px'
};

interface FormInputProps extends InputPropsChakra {
  id?: string;
  value?: string;
  valueNumber?: number;
  label?: string;
  type?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  defaultValue?: string;
  error?: string;
  autocomplete?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  variant?: 'default';
  size?: 'default' | 'md' | 'lg';
  backgroundColor?: 'default.light' | string;
  color?: 'default.grey.200' | string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleReset?: () => void;
}

export const FormInput = ({
  value,
  label,
  placeholder,
  isDisabled = false,
  isRequired = true,
  type = 'text',
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  handleReset,
  className = '',
  size = 'default',
  variant = 'default',
  backgroundColor = 'default.light',
  color = '',
  error = '',
  readOnly = false,
  autoFocus = false,
  ...props
}: FormInputProps) => {
  
  const [valueNumber, setValue] = useState<number>(0);
  
  const handleChange = valueNumber => setValue(valueNumber);

  return (
    <Box py={3}>
      <FormControl variant="floating" isRequired={isRequired} isInvalid={!!error}>
        {type !== 'number' ? (
          <>
            <InputChakra
              value={value}
              label={label}
              placeholder={placeholder}
              isDisabled={isDisabled}
              type={type}
              defaultValue={defaultValue}
              onChange={onChange}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              className={className}
              size={size}
              error={error}
              variant={variant}
              backgroundColor={backgroundColor}
              color={color}
              readOnly={readOnly}
              autoFocus={autoFocus}
              {...props}
            />
            <FormLabel>{label}</FormLabel>
          </>
        ) : (
          <>
            <NumberInput
              defaultValue={valueNumber}
              value={valueNumber}
              onBlur={onBlur}
              onChange={handleChange}
              style={{ ...inputNumberStyles }}
              >
              <NumberInputField style={{ ...inputNumberStyles }} />
              <FormLabel>{label}</FormLabel>
              <NumberInputStepper style={{ ...stepperStyles }}>
                <NumberIncrementStepper
                  bg="default.placeholder"
                  _active={{ bg: 'default.placeholder' }}
                  style={{ ...stepperButtonStyles }}
                >
                  <TriangleUpIcon />
                </NumberIncrementStepper>
                <NumberDecrementStepper
                  bg="default.placeholder"
                  _active={{ bg: 'default.placeholder' }}
                  style={{ ...stepperButtonStyles }}
                >
                  <TriangleDownIcon />
                </NumberDecrementStepper>
              </NumberInputStepper>
            </NumberInput>
          </>
        )}
        {error && (
          <FormErrorMessage mt={1} fontSize="sm">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </Box>
  )
};
