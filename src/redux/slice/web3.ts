import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chainId: null,
  account: null,
  provider: null,
  signer: null,
  APP_CONTRACT: null,
};

export const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    changeChainId: (state: any, action: any) => {
      state.chainId = action.payload;
    },
    changeAccount: (state: any, action: any) => {
      state.account = action.payload;
    },
    changeProvider: (state: any, action: any) => {
      state.provider = action.payload;
    },
    changeSigner: (state: any, action: any) => {
      state.signer = action.payload;
    },
    privateInput: (state: any, action: any) => {
      state.privateInputValue = action.payload;
    },
    changeContract: (state: any, action: any) => {
      state.APP_CONTRACT = action.payload.APP_CONTRACT;
    },
  },
});

export const {
 changeAccount, changeChainId, changeProvider, changeContract, changeSigner, privateInput, 
} =
  web3Slice.actions;
export default web3Slice.reducer;
