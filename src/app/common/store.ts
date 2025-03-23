import { create } from "zustand";
interface ZustandProps {
  playlist: boolean;
  plus: boolean;
  Podcasts: boolean;
  Allpodcasts: boolean;
  HandlePlatlistClick: () => void;
  RemovePlaylistClick: () => void;
  handlePlus: () => void;
  NewPlaylistClick: () => void;
  HandlePodcasts: () => void;
  HandleAllPodcasts: () => void;
}
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
  Podcasts: false,
  HandlePodcasts: () => {
    set(() => ({ Podcasts: true }));
  },
  Allpodcasts: false,
  HandleAllPodcasts: () => {
    set(() => ({ Allpodcasts: true }));
  },
}));
