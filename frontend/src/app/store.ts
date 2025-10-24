import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from '../features/cars/carsApi';
import { carsReducer } from '../features/cars/carsSlice';

export const store = configureStore({
   reducer: {
      cars: carsReducer,
      [carsApi.reducerPath]: carsApi.reducer,
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(carsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
