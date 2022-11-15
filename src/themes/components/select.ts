export const Select = {
  sizes: {
    default: {
      field: {
        h: '40px',
        fontSize: '14px',
        fontWeight: 'normal',
        pl: '20px'
      }
    }
  },

  variants: {
    default: {
      field: {
        bg: 'transparent',
        borderColor: 'default.grey.700',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: 'default.grey.600',
        _hover: {
          borderColor: 'secondary.100'
        },
        _focus: {
          borderColor: 'secondary.100',
          _placeholder: {
            color: 'default.placeholder'
          }
        }
      }
    }
  }
};
