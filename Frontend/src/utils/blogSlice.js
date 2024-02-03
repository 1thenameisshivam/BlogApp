import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    userBlogs: null,
    allBlogs: null,
  },
  reducers: {
    setUserBlogs: (state, action) => {
      state.userBlogs = action.payload;
    },
    setAllBlogs: (state, action) => {
      state.allBlogs = action.payload;
    },
  },
});

export const { setUserBlogs, setAllBlogs } = blogSlice.actions;
export default blogSlice.reducer;
