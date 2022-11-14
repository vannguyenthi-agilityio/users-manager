const size = {
  default: {
    fontSize: '14px',
    h: 14,
    borderRadius: '28px',
    px: '12px',
    fontWeight: 'normal',
    lineHeight: '17px'
  }
};

export const NumberInput = {
  defaultProps: {
    focusBorderColor: 'secondary.100',
    h: '56px'
  },
  sizes: {
    default: {
      field: size.default
    },
    noBorder: {
      stepper: {
        _first: {
          borderRadius: 'none'
        },
        _last: {
          borderRadius: 'none'
        }
      },
      field: {
        borderRadius: 'none'
      }
    }
  }
};
