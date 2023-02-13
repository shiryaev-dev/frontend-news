export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    DATE_DESC = 'createdAt',
    DATE_ASC = '-createdAt',
  }
  
  export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
  };
  
  export interface SortingSliceState {
    searchValue: string;
    currentPage: number;
    sort: Sort;
  }