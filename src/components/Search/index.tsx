import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { Input, Box } from '@chakra-ui/react';

interface FilterProps {
  column: {
    searchValue: string;
    setSearch: (value: string) => void;
    preFilteredRows: [
      {
        id: number;
        values: {
          plan: string;
          role: string;
          status: string;
        };
      }
    ];
    header: string;
    id: string;
  };
}

interface SearchProps {
  globalSearch: string;
  setGlobalSearch?: (valueFilter: string) => void;
}

// Component for Global Search
export const Search = ({ globalSearch, setGlobalSearch }: SearchProps) => {
  const [value, setValue] = useState<string>(globalSearch);

  const onChange = useAsyncDebounce((valueSearch) => {
    setGlobalSearch(valueSearch || undefined);
  }, 100);

  return (
    <Box>
      <Input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search value"
        _placeholder={{ color: 'default.placeholder' }}
        h={12}
        size="md"
        focusBorderColor="secondary.100"
      />
    </Box>
  );
};

// Component for Default Column Search
export const DefaultSearchForColumn = ({
  column: {
    searchValue,
    preFilteredRows: { length },
    setSearch,
    id
  }
}: FilterProps) =>
  id !== 'email' &&
  id !== 'userName' &&
  id !== 'actions' &&
  id !== 'totalTask' &&
  id !== 'progress' &&
  id !== 'projectName' && (
    <Input
      value={searchValue || ''}
      onChange={(e) => {
        // Set undefined to remove the search entirely
        setSearch(e.target.value || undefined);
      }}
      placeholder={`Search ${length} records..`}
      mt={5}
    />
  );
