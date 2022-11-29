import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { Input, Flex } from '@chakra-ui/react';
import { Text } from 'src/components/Text';

interface SearchProps {
  globalSearch: string;
  setGlobalSearch?: (valueFilter: string) => void;
  label?: string;
}

// Component for Global Search
export const Search = ({
  globalSearch,
  setGlobalSearch,
  label
}: SearchProps) => {
  const [value, setValue] = useState<string>(globalSearch);

  const onChange = useAsyncDebounce((valueSearch) => {
    setGlobalSearch(valueSearch || undefined);
  }, 100);

  return (
    <Flex justifyContent="flex-end">
      <Flex alignItems="center" maxW="280px">
        {label && (
          <Text value={label} color="default.grey.600" mr={6} fontSize="16px" />
        )}
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
      </Flex>
    </Flex>
  );
};
