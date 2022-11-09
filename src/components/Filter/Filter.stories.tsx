import Storybook from '@storybook/react';
import { Filter } from './index';

export default {
  title: 'Components/Search',
  component: Filter
};

const filterRows = [
  {
    id: 1,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  },
  {
    id: 2,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  },
  {
    id: 3,
    values: {
      plan: 'Enterprise',
      role: 'Editor',
      status: 'Active'
    }
  }
];

const columnsFilter = {
  filterValue: 'Editor',
  setFilter: (val) => val,
  preFilteredRows: filterRows,
  header: 'Role',
  id: 'role'
};

const Template: Storybook.ComponentStory<typeof Filter> = (args) => (
  <Filter column={columnsFilter} {...args} />
);

export const FillterText = Template.bind({});
FillterText.args = {
  type: 'text',
  placeholder: 'Filter by role',
  size: 'md'
};
