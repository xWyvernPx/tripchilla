export interface PaginationQuery {
  page: number;
  limit: number;
  order?: string;
  sort?: string;
  query?: string;
}
export interface PaginationResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    order: string;
    sort?: string;
  };
}
