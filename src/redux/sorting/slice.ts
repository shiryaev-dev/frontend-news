import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingSliceState, Sort, SortPropertyEnum } from './types';

const initialState: SortingSliceState = {
  searchValue: '',
  currentPage: 1,
  sort: {
    name: 'по дате(сначала новые)',
    sortProperty: SortPropertyEnum.DATE_DESC,
  },
};

const filterSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<SortingSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.sort = {
          name: 'По дате(сначала новые)',
          sortProperty: SortPropertyEnum.DATE_DESC,
        };
      }
    },
  },
});

export const { setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;