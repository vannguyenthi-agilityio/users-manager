import { Badge, BadgeProps } from '@chakra-ui/react';

interface StatusLabelProps extends BadgeProps {
  value?: string;
  className?: string;
  variant?: 'active' | 'inactive' | 'pending';
  size?: 'default' | 'large' | 'medium' | 'small';
}

export const StatusLabel = ({
  value = '',
  className = '',
  size = 'default',
  variant = 'active',
  ...props
}: StatusLabelProps) => (
  <Badge className={className} variant={variant} size={size} {...props}>
    {value}
  </Badge>
);
