import Storybook from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import { Modal } from './index';

export default {
  title: 'Components/Modal',
  component: Modal
} as Storybook.ComponentMeta<typeof Modal>;

const Template: Storybook.ComponentStory<typeof Modal> = (args) => (
  <Modal
    onClose={action('onCloseHandler')}
    onSubmit={action('onSubmitHandler')}
    {...args}
  />
);

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: 'Add User',
  isOpen: true,
  size: 'default',
  description: '',
  submitButtonText: 'Submit',
  cancelButtonText: 'Cancel',
  isDisabledSubmit: false,
  isLoading: false,
  isCentered: true,
  variant: 'primary'
};
