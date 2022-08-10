import React from 'react'
import { Box } from '@chakra-ui/react'

// Components
import { Text } from 'src/components/Text';

const Login = () => {
  return(
    <Box>
      <Text
        size = 'large'
        variant = 'normal'
        letterSpacing="1px"
        w="100%"
        marginRight="30px"
        value={'Login'}
      />
    </Box>
  )
}

export default Login
