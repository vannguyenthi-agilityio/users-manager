import { useMemo } from 'react';
import { Select, Box, FormControl, FormLabel } from '@chakra-ui/react';

interface FilterProps {
  label?: string;
  column: {
    filterValue?: string;
    setFilter: (valueFilter: string) => void;
    preFilteredRows: {
      id: number;
      values: {
        plan: string;
        role: string;
        status: string;
      };
    }[];
    header: string;
    id: string;
  };
}

// Component for Custom Select Filter
export const Filter = ({
  label,
  column: { filterValue, setFilter, preFilteredRows, id, header }
}: FilterProps) => {
  // Use preFilteredRows to calculate the options
  const options = useMemo(() => {
    const optionsFilter = new Set();
    preFilteredRows.forEach((row) => {
      optionsFilter.add(row.values[id]);
    });
    return [...optionsFilter.values()];
  }, [id, preFilteredRows]);

  // UI for Multi-Select box
  return (
    <Box py={3}>
      <FormControl variant="floating">
        <Select
          value={filterValue}
          variant="default"
          placeholder={`Select ${header}`}
          color="default.grey.500"
          minW="150px"
          h={14}
          onChange={(e) => {
            setFilter(e.target.value || undefined);
          }}
        >
          <option value="">All</option>
          {options.map((option: readonly string[]) => (
            <option key={option?.toString()} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <FormLabel>{label}</FormLabel>
      </FormControl>
    </Box>
  );
};
