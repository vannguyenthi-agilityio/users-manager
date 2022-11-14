const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
  color: 'secondary.100',
  my: 3
};

export const Form = {
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles
          }
        },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          color: 'default.placeholder',
          mx: 3,
          px: 1,
          my: 4,
          transformOrigin: 'left top'
        }
      }
    }
  }
};
