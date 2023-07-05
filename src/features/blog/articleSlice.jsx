import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articleService from "./articleService";

const initialState = {
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createArticle = createAsyncThunk(
  "articles/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await articleService.createArticle(data, token);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getArticles = createAsyncThunk("articles/getArticles", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await articleService.getArticles(token)
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const deleteArticle = createAsyncThunk("articles/deleteArticle", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await articleService.deleteArticle(id, token)
  } catch (error) {
    thunkAPI.rejectWithValue(error)
  }
})

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.isSuccess = true 
        state.isLoading = false;
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
      })
      .addCase(deleteArticle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = state.articles.filter((article) => article._id !== action.payload.id)
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
      })
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
