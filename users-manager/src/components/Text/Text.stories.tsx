import React from 'react';
import Storybook from '@storybook/react';
import { Text } from './index';

export default {
  title: 'Components/Text',
  component: Text
};

const Template: Storybook.ComponentStory<typeof Text> = args => (
  <Text value="Login" {...args} />
);

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'large',
  variant: 'normal'
};

export const MediumText = Template.bind({});
MediumText.args = {
  size: 'medium',
  variant: 'normal'
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  size: 'default',
  variant: 'normal'
};

export const SmallText = Template.bind({});
SmallText.args = {
  size: 'small',
  variant: 'normal'
};
