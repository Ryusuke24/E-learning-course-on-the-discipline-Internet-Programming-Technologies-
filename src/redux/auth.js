import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HOST_NAME } from "../variables";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params, { rejectWithValue }) => {
    try {
      const res = await fetch(`${HOST_NAME}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: params.email,
          password: params.password,
        }),
      });

      if (res.body === "undefined") {
        throw new Error("Not found login");
      }

      const data = await res.json();
      if ("message" in data) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params, { rejectWithValue }) => {
    try {
      console.log(params);
      const res = await fetch(`${HOST_NAME}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: params.email,
          password: params.password,
          userName: params.username,
          avatarUrl: params.imageUrl,
        }),
      });

      if (res.body === "undefined") {
        throw new Error("Not found login");
      }
      return await res.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem("token") || "";
      const res = await fetch(`${HOST_NAME}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Не удалось загрузить данные");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    errors: null,
  },
  reducers: {
    logout: (state, action) => {
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.errors = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.data = null;
        state.errors = action.payload;
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.data = null;
        state.errors = null;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.data = action.payload;
        state.errors = null;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.data = null;

        state.errors = action.payload;
      })
      .addCase(fetchMe.pending, (state, action) => {
        state.data = null;
        state.errors = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = null;
        state.errors = null;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.data = null;

        state.errors = action.payload;
      })
      .addCase(fetchRegister.pending, (state, action) => {
        state.data = null;
        state.errors = null;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
