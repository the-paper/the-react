import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchSamples } from './mesurementAPI';

export type RectangleKind = 'papers' | 'blocks';

export type Rectangle = {
  width: number;
  height: number;
};

export type Sample = Rectangle & {
  key: string;
  name: string;
};

export type MesurementState = {
  status: 'idle' | 'loading' | 'failed';
  papers: Sample[];
  paper: Rectangle;
  blocks: Sample[];
  block: Rectangle;
};

const initialState: MesurementState = {
  status: 'idle',
  papers: [],
  paper: {
    width: 400,
    height: 300,
  },
  blocks: [],
  block: {
    width: 300,
    height: 200,
  },
};

export const ladingSamplesAsync = createAsyncThunk(
  'mesurement/fetchSamples',
  async (kind: RectangleKind) => {
    const { data } = await fetchSamples(kind);
    return { kind, data };
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
    changePaper: (state, action: PayloadAction<Rectangle>) => {
      state.paper = action.payload;
    },
    resizeBlockWidth: (state, action: PayloadAction<number>) => {
      state.block.width = action.payload;
    },
    resizeBlockHeight: (state, action: PayloadAction<number>) => {
      state.block.height = action.payload
    },
    rotateBlock: (state) => {
      const { width: height, height: width } = state.block;
      state.block = { width, height };
    },
    changeBlock: (state, action: PayloadAction<Rectangle>) => {
      state.block = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ladingSamplesAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(ladingSamplesAsync.fulfilled, (state, action) => {
        const { kind, data } = action.payload;
        state.status = 'idle';
        state[kind] = data;
      })
  },
});

export const {
  resizePaperWidth,
  resizePaperHeight,
  rotatePaper,
  changePaper,
  resizeBlockWidth,
  resizeBlockHeight,
  rotateBlock,
  changeBlock,
} = mesurementSlice.actions;

export const selectPaper = (state: RootState) => state.mesurement.paper;
export const selectPapers = (state: RootState) => state.mesurement.papers;
export const selectBlock = (state: RootState) => state.mesurement.block;
export const selectBlocks = (state: RootState) => state.mesurement.blocks;
export const pickPaper = (key: string): AppThunk => (dispatch, getState) => {
  const samples = selectPapers(getState());
  const sample = samples.find(s => s.key === key);
  if (sample) {
    dispatch(changePaper(sample));
  }
};
export const pickBlock = (key: string): AppThunk => (dispatch, getState) => {
  const samples = selectBlocks(getState());
  const sample = samples.find(s => s.key === key);
  if (sample) {
    dispatch(changeBlock(sample));
  }
};

export default mesurementSlice.reducer;
