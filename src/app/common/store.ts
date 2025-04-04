import { create } from "zustand";
import { ZustandProps } from "./types";

export const useStates = create<ZustandProps>((set) => ({
  playlist: false,
  HandlePlatlistClick: () => {
    set(() => ({ playlist: true }));
  },
  RemovePlaylistClick: () => {
    set(() => ({ playlist: false }));
  },
  plus: false,
  handlePlus: () => {
    set(() => ({ plus: true }));
  },
  NewPlaylistClick: () => {
    set(() => ({ plus: false, playlist: true }));
  },

  artist3: "",
  HandleSelectedAuthor3: (artist3?: string) => {
    set(() => ({ InnerClick: true, artist3 }));
  },
  plusHover: false,
  PlusEnter: () => {
    set(() => ({ plusHover: true }));
  },
  PlusLeave: () => {
    set(() => ({ plusHover: false }));
  },
  marked: false,
  MarkedClick: () => {
    set(() => ({ marked: true }));
  },
  MarkedClick2: () => {
    set(() => ({ marked: false }));
  },
  dotsHover: false,
  DotsEnter: () => {
    set(() => ({ dotsHover: true }));
  },
  DotsLeave: () => {
    set(() => ({ dotsHover: false }));
  },
  DotsClick: false,
  DotsClickFunc: () => {
    set((state) => ({ DotsClick: !state.DotsClick }));
  },
  validemail: false,
  setvalidemail: () => {
    set(() => ({ validemail: true }));
  },
  email: "",
  setEmail: (email) => set({ email }),
}));
