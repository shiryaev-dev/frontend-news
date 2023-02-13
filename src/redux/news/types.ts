export type News = {
    id: string;
    title: string;
    imageUrl: string;
    rating: number;
  };
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
  
  export type SearchNewsParams = {
    sortBy: string;
    order: string;
    search: string;
    currentPage: string;
  };
  
  export interface NewsSliceState {
    items: News[];
    status: Status;
  }