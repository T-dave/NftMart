'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
        picture: "/auction1.png",
        liked: true,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction2.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction3.png",
        liked: true,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction5.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
  ],
  overline: [
    {
        picture: "/auction8.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction7.png",
        liked: true,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction3.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction4.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction5.png",
        liked: true,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
      {
        picture: "/auction6.png",
        liked: false,
        name: "Vulputate felis purus viverra morbi facilisi eget",
        time: "2:41",
        bid: 35,
        eth: 3.19,
        likes: 120
      },
  ],
  
}

const nftSlice = createSlice({
  name: 'nftData',
  initialState,
  reducers: {
    nftLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { nftLoading } = nftSlice.actions

export default nftSlice.reducer