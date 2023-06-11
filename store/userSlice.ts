import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// export const pokemonApi = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: "" }),
//   endpoints: (builder: any) => ({
//     getPokemonByName: builder.query({
//       query: (name: string) => `pokemon/${name}`,
//     }),
//     addPokemon: builder.mutation({
//       query: (newPokemon: any) => ({
//         url: "pokemon",
//         method: "POST",
//         body: newPokemon,
//       }),
//     }),
//   }),
// });

export const handleSetUserInfo: any = createAsyncThunk(
  "handleSetUserInfo",
  async (payload) => {
    const res = await axios.get(`https://dummyjson.com/products/1`);
    console.log("res", res);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userInfo: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleSetUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});
export const { login } = userSlice.actions;
