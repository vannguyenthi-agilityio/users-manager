export const Modal = {
  sizes: {
    default: {
      dialog: {
        width: '400px'
      }
    },
    normal: {
      dialog: {
        width: '650px'
      }
    }
  },
  variants: {
    normal: {
      dialog: {
        bg: 'secondary.100',
        color: 'default.grey.400',
        fontSize: '14px'
      }
    },
    primary: {
      dialog: {
        fontSize: '28px',
        color: 'default.gray.600'
      }
    }
  }
};
