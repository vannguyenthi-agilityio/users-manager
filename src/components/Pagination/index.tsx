/* eslint-disable */
import { useState } from 'react';
import { Select, Text, Flex, IconButton, Tooltip } from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface PaginationProps {
  className?: string;
  totalCount?: number;
  currentPage?: number;
  offset?: number;
  pageSize?: number;
  from?: number;
  to?: number;
  canNextPage?: boolean;
  canPreviousPage?: boolean;
  previousPage?: () => void;
  nextPage?: () => void;
  onPageSizeChange?: (pageSizeValue: number) => void;
}

export const Pagination = ({
  className,
  totalCount,
  currentPage = 1,
  offset = 0,
  nextPage,
  previousPage,
  pageSize = 10,
  canNextPage = true,
  canPreviousPage = true,
  from = 1,
  to = 10,
  onPageSizeChange
}: PaginationProps) => {
  const [data, setData] = useState({
    pageOffset: offset,
    pageSizeState: pageSize,
    currentPage: currentPage,
    from: from,
    to: to,
    selectedPageSize: {
      label: pageSize.toString(),
      value: pageSize.toString()
    }
  });
  const pageCount = Math.ceil(totalCount / data.pageSizeState);
  const valueStartPage = data.pageSizeState * data.currentPage - data.pageSizeState + 1;
  const valueEndPage = data.pageSizeState * data.currentPage > totalCount ? totalCount : data.pageSizeState * data.currentPage;

  const nextPageChange = () => {
    const newOffset: number = offset + data.pageSizeState;
    nextPage();
    setData({ ...data, pageOffset: newOffset });
    setData({
      ...data,
      currentPage:
        data.currentPage < pageCount ? data.currentPage + 1 : data.currentPage
    });
  };

  const previousPageChange = () => {
    const newOffset: number =
      data.pageOffset - data.pageSizeState >= 0
        ? data.pageOffset - data.pageSizeState
        : 0;
    setData({ ...data, pageOffset: newOffset });
    previousPage();
    setData({
      ...data,
      currentPage:
        data.currentPage > 1 ? data.currentPage - 1 : data.currentPage
    });
  };

  const setPageSize = (value: number) => {
    onPageSizeChange(value);
    setData({
      ...data,
      pageSizeState: value,
      currentPage: data.currentPage > 2 ? 2 : data.currentPage
    });
  };

  return (
    <Flex justifyContent="flex-end" className={className}>
      <Flex
        justifyContent="space-between"
        minW="375px"
        m={4}
        alignItems="center"
        color="default.grey.600"
      >
        <Flex alignItems="center">
          <Text flexShrink={0} mr={2} color="default.grey.600">
            Rows per page:{' '}
          </Text>
          <Select
            w={20}
            value={data.pageSizeState}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 25, 50].map((pageSizeOption) => (
              <option key={pageSizeOption} value={pageSizeOption}>
                {pageSizeOption}
              </option>
            ))}
          </Select>
          <Text flexShrink={0} ml={2} color="default.grey.600">
            {valueStartPage} -{' '}
            {valueEndPage} of {totalCount}
          </Text>
        </Flex>
        <Flex minW="85px" justifyContent="space-between">
          <Tooltip label="Previous Page">
            <IconButton
              aria-label="previous"
              onClick={previousPageChange}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Next Page">
            <IconButton
              aria-label="next"
              onClick={nextPageChange}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
