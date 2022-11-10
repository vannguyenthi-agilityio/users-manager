export const Button = {
  sizes: {
    default: {
      px: '20px',
      py: '11px',
      fontWeight: '500',
      textTransform: 'uppercase',
      boxShadow: 'rgb(19 17 32 / 42%) 0px 4px 8px -4px',
      letterSpacing: '0.3px'
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
      color: 'default.light',
      fontSize: '14px'
    },

    status: {
      bg: 'default.gray',
      fontSize: '14px'
    },

    transparent: {
      bg: 'transparent',
      color: 'default.light',
      fontSize: '14px'
    },

    border: {
      borderWidth: '1px',
      borderColor: 'default.red',
      fontSize: '14px',
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
