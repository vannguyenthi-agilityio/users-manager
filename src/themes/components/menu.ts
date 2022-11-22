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
        pl: 5,
        borderRadius: 'sidebar',
        _hover: {
          bg: 'default.grey.800'
        },
        _expanded: {
          boxShadow: 'sidebar',
          backgroundImage:
            'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        },
        _focus: {
          boxShadow: 'sidebar',
          backgroundImage:
            'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        },
        _active: {
          boxShadow: 'sidebar',
          backgroundImage:
            'linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)'
        }
      },
      menu: {
        bg: 'transparent',
        borderStyle: 'none',
        borderRadius: 'sidebar',
        mt: 1,
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
      },
      button: {
        px: 4,
        py: 3,
        transition: 'all 0.2s',
        borderRadius: 'sidebar',
        borderWidth: 'none',
        _hover: {
          bg: 'gray.400'
        },
        _expanded: {
          bg: 'default.grey.800'
        },
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  },
  defaultProps: {
    size: 'md'
  }
};
