import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import sorting from './sorting/slice';
import news from './news/slice';

export const store = configureStore({
    reducer: {
      sorting,
      news
    },
  });


export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();