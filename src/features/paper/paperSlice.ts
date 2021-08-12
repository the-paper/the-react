import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
// import { fetchPapers } from './paperAPI';

export interface Paper {
  name: string;
  width: number;
  height: number;
}

export interface Block {
  name: string;
  width: number;
  height: number;
}

export interface PaperState {
  papers: Paper[];
  blocks: Block[];
  status: 'idle' | 'loading' | 'failed';
  paper: Paper;
  block: Block;
}

const initialState: PaperState = {
  papers: [],
  blocks: [],
  status: 'idle',
  block: {
    name: '',
    width: 300,
    height: 200,
  },
  paper: {
    name: '',
    width: 400,
    height: 300,
  },
};

// export const fetchPapersAsync = createAsyncThunk(
//   'paper/fetchPapers',
//   async () => {
//     const response = await fetchPapers();
//     return response;
//   }
// );

export const paperSlice = createSlice({
  name: 'paper',
  initialState,
  reducers: {
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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchPapersAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchPapersAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.papers = action.payload;
  //     });
  // },
});

export const {
  changeBlockWidth,
  changeBlockHeight,
  changePaperWidth,
  changePaperHeight,
} = paperSlice.actions;

export const selectPapers = (state: RootState) => state.paper.papers;
export const selectBlocks = (state: RootState) => state.paper.blocks;
export const selectPaper = (state: RootState) => state.paper.paper;
export const selectBlock = (state: RootState) => state.paper.block;

export const afdsadsoijf = (value: number): AppThunk => (
  dispatch,
  getState
) => {

};

export default paperSlice.reducer;
