import Storybook from '@storybook/react';

// Components
import Table from './index';
import { Filter } from '../Filter';

export default {
  title: 'Components/Table',
  component: Table
};

const columnsUsers = [
  {
    Header: 'Info',
    columns: [
      {
        header: 'CheckBox',
        accessor: 'checkBox'
      },
      {
        header: 'User',
        accessor: 'userName'
      },
      {
        header: 'Email',
        accessor: 'email'
      },
      {
        header: 'Role',
        accessor: 'role',
        Filter: Filter
      },
      {
        header: 'Plan',
        accessor: 'plan',
        Filter: Filter
      },
      {
        header: 'Status',
        accessor: 'status',
        Filter: Filter
      },
      {
        header: 'Actions',
        accessor: 'actions'
      }
    ]
  }
];

const data = {
  users: [
    {
      id: 1,
      fullName: 'Jone',
      userName: 'Nguyen',
      email: 'jone.nguyen@asnet.com.vn',
      role: 'Editor',
      status: 'Active',
      plan: 'Enterprise',
      totalTask: 10,
      totalProject: 3,
      language: 'English',
      country: 'USA'
    },
    {
      id: 2,
      fullName: 'David',
      userName: 'Smart',
      email: 'davi.smart@asnet.com.vn',
      role: 'Author',
      status: 'Pending',
      plan: 'Team',
      totalTask: 12,
      totalProject: 2,
      language: 'English',
      country: 'USA'
    },
    {
      id: 3,
      fullName: 'Mary',
      userName: 'Smith',
      email: 'mary.smith@asnet.com.vn',
      role: 'Maintaine',
      status: 'Inactive',
      plan: 'Team',
      language: 'English',
      country: 'USA',
      totalTask: 24,
      totalProject: 4
    }
  ]
};

const Template: Storybook.ComponentStory<typeof Table> = (args) => (
  <Table dataTable={data.users} columnsTable={columnsUsers} {...args} />
);

export const Default = Template.bind({});
