export enum STATUS_BADGE {
  active = 'active',
  inactive = 'inactive',
  pending = 'pending'
}

export const getBadgeVariant = (statusValue: STATUS_BADGE) => {
  switch (statusValue) {
    case 'pending':
      return 'pending';
    case 'inactive':
      return 'inactive';
    default:
      return 'active';
  }
};
