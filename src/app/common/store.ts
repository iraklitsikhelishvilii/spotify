import { create } from "zustand";

interface ZustandProps {
  playlist: boolean;
  plus: boolean;
  Podcasts: boolean;
  Allpodcasts: boolean;
  InnerClick: boolean;
  artist: string;
  artist2: string;
  artist3: string;
  HandlePlatlistClick: () => void;
  RemovePlaylistClick: () => void;
  handlePlus: () => void;
  NewPlaylistClick: () => void;
  HandlePodcasts: () => void;
  HandleAllPodcasts: () => void;
  HandleSelectedAuthor: (artist: string) => void;
  HandleSelectedAuthor2: (artist2?: string) => void;
  HandleSelectedAuthor3: (artist3?: string) => void;
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
  artist: "",

  InnerClick: false,
  HandleSelectedAuthor: (artist: string) => {
    set(() => ({ InnerClick: true, artist }));
  },
  artist2: "",
  HandleSelectedAuthor2: (artist2?: string) => {
    set(() => ({ InnerClick: true, artist2 }));
  },
  artist3: "",
  HandleSelectedAuthor3: (artist3?: string) => {
    set(() => ({ InnerClick: true, artist3 }));
  },
}));
