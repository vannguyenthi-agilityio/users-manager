import React from 'react'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  Box,
  Input,
  Button,
  FormControl
} from '@chakra-ui/react'

// Components
import { Text }  from '../../components/Text'

// Constants
import { PATTERN } from '../../constants/pattern'

interface IFormInputs {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IFormInputs>({
    mode: 'onChange'
  })

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
  }

  return (
    <Box boxShadow='base' p='6' rounded='md' bg='white' w='50%' mt={20} mx='auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <Text value="Login Account" size="large" variant="normal" textAlign='center' />
          <Box>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              id='email'
              placeholder='Email'
              {...register('email', {
                required: { value: true, message: 'Email is required.' },
                pattern: {
                  value: PATTERN.EMAIL,
                  message: 'Please enter a valid email address.'
                }
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </Box>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Box>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type='password'
              {...register('password', {
                required: { value: true, message: 'Please enter your password.' },
                min: {
                  value: 6,
                  message: 'The password must be at least six characters long.'
                },
                pattern: {
                  value: PATTERN.PASSWORD,
                  message: 'The password must contain at least one non-letter.'
                }
              })}
              placeholder='Password'
            />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </Box>

          <Box display='flex' justifyContent='center'>
            <Button mt={6} mb={4} colorScheme='teal' type='submit' isLoading={isSubmitting}>
              Submit
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  )
}

export default LoginForm
