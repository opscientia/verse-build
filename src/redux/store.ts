import { configureStore } from '@reduxjs/toolkit';

import web3Slice from './slice/web3';
import profileTabs from './slice/profileTab';

const middleware = (getDefaultMiddleware: any) => {
  return [
    ...getDefaultMiddleware({
      serializableCheck: false,
    })
  ];
};

export const store = configureStore({
  reducer: {
    web3Slice,
    profileTabs
  },
  middleware: (getDefaultMiddleware) => middleware(getDefaultMiddleware),
});
