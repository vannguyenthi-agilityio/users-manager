import Storybook from '@storybook/react';
import { Search } from './index';

export default {
  title: 'Components/Search',
  component: Search
};

const Template: Storybook.ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

export const SearchText = Template.bind({});
SearchText.args = {
  type: 'text',
  placeholder: 'Search by name',
  size: 'md'
};
