import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mesurementSlice from '../features/measurement/mesurementSlice';

export const store = configureStore({
  reducer: {
    mesurement: mesurementSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
