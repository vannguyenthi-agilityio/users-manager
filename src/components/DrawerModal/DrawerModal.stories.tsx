import Storybook from '@storybook/react';

// Components
import { DrawerModal } from './index';

export default {
  title: 'Components/DrawerModal',
  component: DrawerModal
} as Storybook.ComponentMeta<typeof DrawerModal>;

const Template: Storybook.ComponentStory<typeof DrawerModal> = (args) => (
  <DrawerModal {...args} />
);

export const DrawerModalDefault = Template.bind({});
DrawerModalDefault.args = {
  title: 'Add User',
  size: 'sm'
};
