import Storybook from '@storybook/react';
import { StatusLabel } from './index';

export default {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Storybook.ComponentStory<typeof StatusLabel> = (args) => (
  <StatusLabel size="default" {...args} />
);

export const ActiveStatusLabel = Template.bind({});
ActiveStatusLabel.args = {
  value: 'Active',
  variant: 'active'
};

export const InactiveStatusLabel = Template.bind({});
InactiveStatusLabel.args = {
  value: 'Inactive',
  variant: 'inactive'
};

export const PendingStatusLabel = Template.bind({});
PendingStatusLabel.args = {
  value: 'Pending',
  variant: 'pending'
};
