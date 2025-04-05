import { create } from "zustand";
import { ZustandProps } from "./types";

export const useStates = create<ZustandProps>((set, get) => ({
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
}));
