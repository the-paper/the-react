import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchPapers } from './paperAPI';

export type Rectangle = {
  width: number;
  height: number;
};
export type Sample = Rectangle & {
  key: string;
  name: string;
};

export interface PaperState {
  papers: Sample[];
  blocks: Sample[];
  status: 'idle' | 'loading' | 'failed';
  paper: Rectangle;
  block: Rectangle;
}

const initialState: PaperState = {
  papers: [],
  blocks: [],
  status: 'idle',
  block: {
    width: 300,
    height: 200,
  },
  paper: {
    width: 400,
    height: 300,
  },
};

export const fetchPapersAsync = createAsyncThunk(
  'paper/fetchPapers',
  async () => {
    const response = await fetchPapers();
    return response.data;
  }
);

export const paperSlice = createSlice({
  name: 'paper',
  initialState,
  reducers: {
    changePaper: (state, action: PayloadAction<Rectangle>) => {
      state.paper = action.payload;
    },
    changeBlock: (state, action: PayloadAction<Rectangle>) => {
      state.block = action.payload;
    },
    changeBlockWidth: (state, action: PayloadAction<number>) => {
      state.block.width = action.payload;
    },
    changeBlockHeight: (state, action: PayloadAction<number>) => {
      state.block.height = action.payload;
    },
    changePaperWidth: (state, action: PayloadAction<number>) => {
      state.paper.width = action.payload;
    },
    changePaperHeight: (state, action: PayloadAction<number>) => {
      state.paper.height = action.payload;
    },
    switchBlock: (state) => {
      const { width, height } = state.block;
      state.block.width = height;
      state.block.height = width;
    },
    switchPaper: (state) => {
      const { width, height } = state.paper;
      state.paper.width = height;
      state.paper.height = width;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPapersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPapersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.papers = action.payload;
      });
  },
});

export const {
  changePaper,
  changeBlock,
  changeBlockWidth,
  changeBlockHeight,
  changePaperWidth,
  changePaperHeight,
} = paperSlice.actions;

export const selectPapers = (state: RootState) => state.paper.papers;
export const selectBlocks = (state: RootState) => state.paper.blocks;
export const selectPaper = (state: RootState) => state.paper.paper;
export const selectBlock = (state: RootState) => state.paper.block;

export const selectSpaceX = (state: RootState) => {
  const { width: pWidth } = state.paper.paper;
  const { width: bWidth } = state.paper.block;
  return (pWidth - bWidth) / 2;
};

export const selectSpaceY = (state: RootState) => {
  const { height: pHeight } = state.paper.paper;
  const { height: bHeight } = state.paper.block;
  return (pHeight - bHeight) / 2;
};

export const selectSamplePaper = (key: string): AppThunk => (dispatch, getState) => {
  const papers = selectPapers(getState());
  const paper = papers.find(p => p.key === key);
  if (paper) {
    dispatch(changePaper(paper));
  }
};

export const selectSampleBlock = (key: string): AppThunk => (dispatch, getState) => {
  const blocks = selectBlocks(getState());
  const block = blocks.find(b => b.key === key);
  if (block) {
    dispatch(changeBlock(block));
  }
};

export default paperSlice.reducer;
