import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

import { News, SearchNewsParams } from './types';

export const fetchNews = createAsyncThunk<News[], SearchNewsParams>(
  'fetchNews',
  async (params) => {
    const { sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<News[]>(`https://63e7deedac3920ad5be56cfa.mockapi.io/news`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 10,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);