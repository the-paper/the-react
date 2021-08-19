import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPapers } from './mesurementAPI';

export interface Rectangle {
  width: number;
  height: number;
};

export interface Sample extends Rectangle {
  key: string;
  name: string;
};

export type MesurementState = {
  status: 'idle' | 'loading' | 'failed';
  papers: Sample[];
  paper: Rectangle;
};

const initialState: MesurementState = {
  status: 'idle',
  papers: [],
  paper: {
    width: 100,
    height: 0,
  },
};

export const ladingPapersAsync = createAsyncThunk(
  'mesurement/fetchPapers',
  async () => {
    const { data } = await fetchPapers();
    return data;
  }
);

export const mesurementSlice = createSlice({
  name: 'mesurement',
  initialState,
  reducers: {
    // 넓이를 조절한다.
    resizePaperWidth: (state, action: PayloadAction<number>) => {
      state.paper.width = action.payload;
    },
    // 높이를 조절한다.
    resizePaperHeight: (state, action: PayloadAction<number>) => {
      state.paper.height = action.payload
    },
    // 90도로 회전한다.
    rotatePaper: (state) => {
      const { width: height, height: width } = state.paper;
      state.paper = { width, height };
    },
    // 
    changePaper: (state, action: PayloadAction<Rectangle>) => {
      state.paper = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ladingPapersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(ladingPapersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.papers = action.payload;
      })
  },
});

export const { resizePaperWidth, resizePaperHeight, rotatePaper, changePaper } = mesurementSlice.actions;

export const selectPaper = (state: RootState) => state.mesurement.paper;
export const selectPapers = (state: RootState) => state.mesurement.papers;

export const sdfaf = (key: string): AppThunk => (dispatch, getState) => {
  const papers = selectPapers(getState());
  const paper = papers.find(p => p.key === key);
  if (paper) {
    dispatch(changePaper(paper));
  }
};

export default mesurementSlice.reducer;
