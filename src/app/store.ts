import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mesurementReducer from '../features/measurement/mesurementSlice';

export const store = configureStore({
  reducer: {
    mesurement: mesurementReducer,
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
