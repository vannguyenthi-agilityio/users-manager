export const Menu = {
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      flexDirection: 'column',
      py: '2'
    },
    item: {
      fontWeight: 'medium',
      lineHeight: 'normal'
    },
    button: {
      // this will style the MenuButton component
      fontWeight: 'medium'
    },
    list: {
      // this will style the MenuList component
      py: '4'
    }
  },
  sizes: {
    sm: {
      item: {
        fontSize: '14px',
        px: 2,
        py: 1
      }
    },
    md: {
      item: {
        fontSize: '16px',
        borderRadius: 'sidebar',
        px: 3,
        py: 2
      }
    }
  },
  variants: {
    bold: {
      item: {
        fontWeight: 'bold'
      },
      menu: {
        boxShadow: 'xl'
      }
    },
    sidebar: {
      item: {
        color: 'default.light',
        bg: 'transparent',
        borderRadius: 'sidebar',
        _hover: {
          bg: 'default.grey.800'
        },
        _expanded: {
          boxShadow: 'rgb(19 17 32 / 42%) 0px 4px 8px -4px',
          backgroundImage: 'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        },
        _focus: {
          boxShadow: 'rgb(19 17 32 / 42%) 0px 4px 8px -4px',
          backgroundImage: 'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        },
        _active: {
          boxShadow: 'rgb(19 17 32 / 42%) 0px 4px 8px -4px',
          backgroundImage: 'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        }
      },
      menu: {
        bg: 'transparent',
        borderStyle: 'none',
        borderRadius: 'sidebar',
        _hover: {
          bg: 'default.grey.800'
        },
        _expanded: {
          bg: 'default.grey.800'
        },
        _focus: {
          boxShadow: 'none',
          bg: 'default.grey.800'
        },
        _active: {
          bg: 'default.grey.800'
        }
      },
      list: {
        bg: 'transparent',
        border: 'none'
      }
    }
  },
  defaultProps: {
    size: 'md'
  }
};
