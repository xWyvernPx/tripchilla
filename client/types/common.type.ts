export interface PaginationQuery {
  page: number;
  limit: number;
  order?: string;
  sort?: string;
  query?: string;
}
