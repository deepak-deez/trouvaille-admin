import React from "react";
import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = (
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
) => {
  const paginationRange = useMemo(() => {
    const totalPagesToShow = Math.ceil(totalCount / pageSize);
    const totalPages = siblingCount + 4;

    if (totalPages >= totalPagesToShow) {
      return range(1, totalPagesToShow);
    }

    const leftIndex = Math.max(currentPage - siblingCount, 1);
    const rightIndex = Math.min(currentPage + siblingCount, totalPagesToShow);
    const toShowleftDots = leftIndex > 2;
    const toShowRightDots = rightIndex < totalPagesToShow - 2;
    const firstPageIndex = 1;
    // const lastPage = totalPagesToShow;

    if (!toShowleftDots && toShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS];
    }

    if (!toShowRightDots && toShowleftDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPagesToShow - rightItemCount + 1,
        totalPagesToShow
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (toShowleftDots && toShowRightDots) {
      let middleRange = range(leftIndex, rightIndex);
      return [firstPageIndex, DOTS, middleRange, DOTS];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
