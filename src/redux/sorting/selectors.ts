import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.sorting;
export const selectSort = (state: RootState) => state.sorting.sort;