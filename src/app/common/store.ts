import { create } from "zustand";
import { Show, Song, Song2, ZustandProps } from "./types";
import {
  saveSongToIndexedDB,
  getSongsFromIndexedDB,
  removeSongFromIndexedDB,
} from "../common/functions";

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

  email: "",
  setEmail: (email) => set({ email }),
  validemail: false,
  setvalidemail: () => set({ validemail: true }),
  emailError: "",
  setEmailError: (emailError) => set({ emailError }),

  password: "",
  setPassword: (password: string) => set({ password }),
  oneLetter: false,
  setOneLetter: (oneLetter: boolean) => set({ oneLetter }),
  oneSymbol: false,
  setOneSymbol: (oneSymbol: boolean) => set({ oneSymbol }),
  tenChar: false,
  setTenChar: (tenChar: boolean) => set({ tenChar }),
  oneLetterError: false,
  setOneLetterError: (error: boolean) => set({ oneLetterError: error }),
  oneSymbolError: false,
  setOneSymbolError: (error: boolean) => set({ oneSymbolError: error }),
  tenCharError: false,
  setTenCharError: (error: boolean) => set({ tenCharError: error }),
  validPassword: false,
  setValidPassword: (valid: boolean) => set({ validPassword: valid }),
  name: "",
  day: "",
  month: "",
  year: "",
  gender: "",
  nameError: "",
  dayError: "",
  monthError: "",
  yearError: "",
  genderError: "",
  validAbout: false,
  setValidAbout: () => {
    set({ validAbout: true });
  },
  setName: (value) => set({ name: value }),
  setDay: (value) => set({ day: value }),
  setMonth: (value) => set({ month: value }),
  setYear: (value) => set({ year: value }),
  setGender: (value) => set({ gender: value }),
  setNameError: (value) => set({ nameError: value }),
  setDayError: (value) => set({ dayError: value }),
  setMonthError: (value) => set({ monthError: value }),
  setYearError: (value) => set({ yearError: value }),
  setGenderError: (value) => set({ genderError: value }),

  authorizedplus: false,
  handleauthorizedplus: () => {
    set((state) => ({ authorizedplus: !state.authorizedplus }));
  },

  ProfileIconClick: false,
  HandleProfileIconClick: () => {
    set((state) => ({ ProfileIconClick: !state.ProfileIconClick }));
  },

  libraryMassive: [],
  setlibraryMassive: (items) => set({ libraryMassive: items }),

  songs: [],

  loadSongs: async () => {
    try {
      const songs = await getSongsFromIndexedDB();
      set({ songs });
    } catch (error) {
      console.error("Error loading songs from IndexedDB:", error);
    }
  },

  addSong: async (newSong: Song2) => {
    try {
      await saveSongToIndexedDB(newSong);

      set((state) => {
        const updatedSongs = [...state.songs, newSong];
        return { songs: updatedSongs };
      });
    } catch (error) {
      console.error("Error saving song:", error);
    }
  },

  removeSong: async (songId: string) => {
    try {
      await removeSongFromIndexedDB(songId);
      set((state) => {
        const updatedSongs = state.songs.filter((song) => song.id !== songId);
        return { songs: updatedSongs };
      });
    } catch (error) {
      console.error("Error removing song:", error);
    }
  },

  targetArray:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("targetArray") || "[]")
      : [],

  addToTarget: (objectToAdd: Song | Show) =>
    set((state) => {
      if (typeof window !== "undefined") {
        const isDuplicate = state.targetArray.some(
          (item) =>
            item.id === objectToAdd.id &&
            item.song_name === objectToAdd.song_name &&
            item.author_name === objectToAdd.author_name
        );

        if (!isDuplicate) {
          const newArray = [...state.targetArray, objectToAdd];
          localStorage.setItem("targetArray", JSON.stringify(newArray));
          return { targetArray: newArray };
        }
      }
      return state;
    }),

  deleteFromTargetByName: (name: string) => {
    set((state) => {
      if (typeof window !== "undefined") {
        const updatedTargetArray = state.targetArray.filter((item) => {
          const displayName =
            item.song_name ||
            item.chart_name ||
            item.radio_name ||
            item.show_name ||
            item.artist ||
            item.song_name_al;
          return displayName !== name;
        });
        localStorage.setItem("targetArray", JSON.stringify(updatedTargetArray));
        return { targetArray: updatedTargetArray };
      }
      return state;
    });
  },
  headerinput: "",
  handleHeaderinput: (value) => set({ headerinput: value }),

  language: "English",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "English" ? "ქართული" : "English",
    })),
  setLanguage: (lang) => set({ language: lang }),
}));
