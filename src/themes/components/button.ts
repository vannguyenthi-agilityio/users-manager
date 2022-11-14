export const Button = {
  sizes: {
    default: {
      px: '20px',
      py: '11px',
      fontWeight: '500',
      textTransform: 'uppercase'
    },
    autoSize: {},
    small: {
      px: '20px',
      py: '11px',
      minW: '205px',
      fontWeight: 'normal'
    }
  },

  variants: {
    colorDefault: {
      bg: 'secondary.100',
      color: 'default.grey.400',
      fontSize: '14px'
    },

    cancel: {
      bg: 'transparent',
      borderWidth: '1px',
      fontSize: '14px',
      color: 'default.grey.600',
      borderColor: 'default.grey.600'
    },

    transparent: {
      bg: 'transparent',
      color: 'default.gray.500',
      fontSize: '14px'
    },

    border: {
      borderWidth: '1px',
      borderColor: 'default.red',
      fontSize: '14px'
    },

    muted: {
      bg: 'primary.200',
      color: 'default.light',
      fontSize: '14px'
    }
  },
  baseStyle: {
    _hover: {
      _disabled: {
        bg: ''
      }
    },
    _focus: {
      boxShadow: ''
    }
  }
};
