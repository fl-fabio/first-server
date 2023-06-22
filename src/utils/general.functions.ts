import { PaginatedResponse } from "../types/paginatedResponse.interface";

/**
 * a function to handle filtering of results via query params and pagination
 * @param data: Array of Objects to filter
 * @param filters: key accepted as filters
 * @param query: query params
 * @returns all results filtered and paginated and the total of results
 */
export const getAll = <T>(
  data: T[],
  filters: (keyof T)[],
  query: { [key: string]: string } = {}
): PaginatedResponse<T> => {
  let filteredResults = [...data];

  const { skip, limit, ...queryFilters } = query;
  const skipNumber = Number((skip) || undefined);
  const limitNumber = Number((limit) || undefined); 

  filters.forEach((filter) => {
    queryFilters[filter as string] &&
      (filteredResults = filteredResults.filter(
        (result) => result[filter] === query[filter as string]
      ));
  });

  const totalResults = filteredResults.length;

  if (skip !== undefined && limit !== undefined) {
    filteredResults = filteredResults.slice(skipNumber, skipNumber + limitNumber);
  }
  console.log(filteredResults);
  return {
    results: filteredResults,
    total: totalResults,
  }
};
