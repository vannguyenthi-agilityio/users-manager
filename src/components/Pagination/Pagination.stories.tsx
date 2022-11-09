import Storybook from '@storybook/react';
import { Pagination } from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template: Storybook.ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const PaginationDefault = Template.bind({});
PaginationDefault.args = {
  pageName: 'Users',
  pageSize: 10,
  totalCount: 100,
  currentPage: 1
};
