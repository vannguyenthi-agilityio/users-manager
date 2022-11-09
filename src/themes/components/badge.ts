export const Badge = {
  baseStyle: {
    textTransform: 'capitalize'
  },
  sizes: {
    default: {
      py: 'badgeSpacing.tighter',
      px: 'badgeSpacing.tight',
      fontWeight: 'normal'
    },
    large: {
      p: 'badgeSpacing.wide',
      fontWeight: 'normal'
    },
    medium: {
      p: 'badgeSpacing.normal',
      fontWeight: 'normal'
    },
    small: {
      p: 'badgeSpacing.tighter',
      fontWeight: 'normal'
    }
  },
  variants: {
    active: {
      bg: 'bgStatus.active',
      color: 'colorStatus.active',
      borderRadius: '8px'
    },
    inactive: {
      bg: 'bgStatus.inactive',
      color: 'colorStatus.inactive',
      borderRadius: '8px'
    },
    pending: {
      bg: 'bgStatus.pending',
      color: 'colorStatus.pending',
      borderRadius: '8px'
    }
  }
};
