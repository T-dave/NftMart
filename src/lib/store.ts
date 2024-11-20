import { configureStore } from '@reduxjs/toolkit'
import nftReducer from './NFT/nftSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      nftData: nftReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']