import { Filter } from 'src/components/Filter';

export const columnsUsers = [
  {
    Header: 'Info',
    columns: [
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
        Filter: Filter,
        filter: 'includes'
      },
      {
        header: 'Plan',
        accessor: 'plan',
        Filter: Filter,
        filter: 'includes'
      },
      {
        header: 'Status',
        accessor: 'status',
        Filter: Filter,
        filter: 'includes'
      },
      {
        header: 'Actions',
        accessor: 'actions'
      }
    ]
  }
];

export const columnsProjects = [
  {
    Header: 'Info',
    columns: [
      {
        header: 'Project',
        accessor: 'projectName'
      },
      {
        header: 'Total Tasks',
        accessor: 'totalTask'
      },
      {
        header: 'Progress',
        accessor: 'progress'
      },
      {
        header: 'Hours',
        accessor: 'hours'
      }
    ]
  }
];
