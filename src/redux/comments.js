import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST_NAME } from "../variables";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${HOST_NAME}/comments`);
      if (!res.ok) {
        throw new Error("Не удалось загрузить комментарии");
      }
      const data = await res.json();

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteComments = createAsyncThunk(
  "comments/deleteComments",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      const res = await fetch(`${HOST_NAME}/comments/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Не удалось удалить");
      }
      const data = await res.json();
      dispatch(deleteCommentSync(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const editComments = createAsyncThunk(
  "comments/editComments",
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      const res = await fetch(`${HOST_NAME}/comments/${params.id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName: params.course,
          lessonNumber: params.lesson,
          text: params.text,
        }),
      });
      if (!res.ok) {
        throw new Error("Не удалось изменить");
      }
      const data = await res.json();
      dispatch(editCommentSync(data));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addComments = createAsyncThunk(
  "comments/addComments",
  async (params, { dispatch, rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      const res = await fetch(`${HOST_NAME}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName: params.course,
          lessonNumber: params.lesson,
          text: params.text,
        }),
      });
      if (!res.ok) {
        throw new Error("Не удалось добавить");
      }
      const data = await res.json();
      dispatch(addCommentsSync(data));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    errors: null,
    loading: true,
  },
  reducers: {
    deleteCommentSync(state, action) {
      state.comments = state.comments.filter(
        comment => comment._id !== action.payload
      );
    },
    addCommentsSync(state, action) {
      state.comments.push(action.payload);
    },
    editCommentSync(state, action) {
      state.comments = state.comments.map(comment => {
        if (comment._id === action.payload._id) {
          comment.text = action.payload.text;
          comment.updateAt = action.payload.updateAt;
        }
        return comment;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.errors = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.comments = [];
        state.loading = false;
        state.errors = action.payload;
      })
      .addCase(fetchComments.pending, (state, action) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = null;
      })
      .addCase(addComments.rejected, (state, action) => {
        state.comments = [];
        state.loading = false;
        state.errors = action.payload;
      })
      .addCase(addComments.pending, (state, action) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(editComments.fulfilled, (state, action) => {
        state.loading = false;
        state.errors = null;
      })
      .addCase(editComments.rejected, (state, action) => {
        state.comments = [];
        state.loading = false;
        state.errors = action.payload;
      })
      .addCase(editComments.pending, (state, action) => {
        state.loading = true;
        state.errors = null;
      });
  },
});

export const { deleteCommentSync, addCommentsSync, editCommentSync } =
  commentsSlice.actions;
export default commentsSlice.reducer;
