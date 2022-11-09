import {
  Text as TextChakra,
  TextProps as TextPropsChakra
} from '@chakra-ui/react';

interface TextProps extends TextPropsChakra {
  value?: string;
  size?: 'default' | 'large' | 'medium' | 'small' | 'extraSmall' | 'xxSmall';
  variant?: 'normal' | 'primary' | 'secondary' | 'thirdly' | 'danger' | 'label' | 'caption';
}

export const Text = ({
  value = '',
  size = 'default',
  variant,
  ...props
}: TextProps) => (
  <TextChakra value={value} size={size} variant={variant} {...props}>
    {value}
  </TextChakra>
);
