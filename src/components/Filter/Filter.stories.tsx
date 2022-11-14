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
      plan: 'Basic',
      role: 'Author',
      status: 'Pending'
    }
  },
  {
    id: 3,
    values: {
      plan: 'Team',
      role: 'Admin',
      status: 'Inactive'
    }
  }
];

const columnsFilter = {
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
  label: 'Select Role',
  placeholder: 'Filter by role',
  size: 'md'
};
