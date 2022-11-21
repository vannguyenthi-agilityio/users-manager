import Storybook from '@storybook/react';
import Sidebar from './index';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Storybook.ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const SidebarDefault = Template.bind({});
SidebarDefault.args = {};
