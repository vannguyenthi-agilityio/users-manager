import React from 'react';
import Storybook from '@storybook/react';
import { FormInput } from './index';

export default {
  title: 'Components/FormInput',
  component: FormInput,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Storybook.ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  placeholder: 'Please input name',
  label: 'LastName',
  isDisabled: false,
  isRequired: false,
  size: 'default'
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'Please input email',
  isDisabled: false,
  label: 'Email',
  isRequired: true,
  size: 'default',
  variant: 'default'
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  type: 'text',
  placeholder: 'Please input text',
  label: 'Input text',
  isDisabled: false,
  isRequired: true,
  size: 'default',
  error: 'Input is invalid'
};
