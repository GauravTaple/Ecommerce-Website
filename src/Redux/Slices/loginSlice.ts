import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface TLogin {
  access_token: string;
  refresh_token: string;
}

const initialState: TLogin = {
  access_token: "",
  refresh_token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginResponse: (state, action: PayloadAction<TLogin>) => {
      const { access_token, refresh_token } = action.payload;
      state.access_token = access_token ?? "";
      state.refresh_token = refresh_token ?? "";
    },
    setLogout: (state) => {
      state.access_token = "";
      state.refresh_token = "";
    },
  },
});

export const { setLoginResponse, setLogout } = loginSlice.actions;

export default loginSlice.reducer;
