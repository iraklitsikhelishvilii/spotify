export interface Icon {
  classname: string;
  Hover?: boolean;
  fillcolor?: string;
}
export interface ZustandProps {
  playlist: boolean;
  HandlePlatlistClick: () => void;
  RemovePlaylistClick: () => void;
  plus: boolean;
  handlePlus: () => void;
  NewPlaylistClick: () => void;

  artist3: string;
  HandleSelectedAuthor3: (artist3?: string) => void;
  plusHover: boolean;
  PlusEnter: () => void;
  PlusLeave: () => void;

  marked: boolean;
  MarkedClick: () => void;
  MarkedClick2: () => void;

  dotsHover: boolean;
  DotsEnter: () => void;
  DotsLeave: () => void;
  DotsClick: boolean;
  DotsClickFunc: () => void;

  email: string;
  setEmail: (email: string) => void;
  validemail: boolean;
  setvalidemail: () => void;
  emailError: string;
  setEmailError: (emailError: string) => void;

  password: string;
  setPassword: (password: string) => void;
  oneLetter: boolean;
  setOneLetter: (oneLetter: boolean) => void;
  oneSymbol: boolean;
  setOneSymbol: (oneSymbol: boolean) => void;
  tenChar: boolean;
  setTenChar: (tenChar: boolean) => void;
  oneLetterError: boolean;
  setOneLetterError: (error: boolean) => void;
  oneSymbolError: boolean;
  setOneSymbolError: (error: boolean) => void;
  tenCharError: boolean;
  setTenCharError: (error: boolean) => void;
  validPassword: boolean;
  setValidPassword: (valid: boolean) => void;

  name: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nameError: string;
  dayError: string;
  monthError: string;
  yearError: string;
  genderError: string;
  validAbout: boolean;
  setValidAbout: () => void;
  setName: (value: string) => void;
  setDay: (value: string) => void;
  setMonth: (value: string) => void;
  setYear: (value: string) => void;
  setGender: (value: string) => void;
  setNameError: (value: string) => void;
  setDayError: (value: string) => void;
  setMonthError: (value: string) => void;
  setYearError: (value: string) => void;
  setGenderError: (value: string) => void;

  authorizedplus: boolean;
  handleauthorizedplus: () => void;

  ProfileIconClick: boolean;
  HandleProfileIconClick: () => void;

  libraryMassive: Song2[];
  setlibraryMassive: (items: Song2[]) => void;

  songs: Song[];
  addSong: (newSong: Song2) => void;
  loadSongs: () => Promise<void>;
  removeSong: (songId: string) => Promise<void>;
  targetArray: (Song | Show)[];
  addToTarget: (objectToAdd: Song | Show) => void;

  deleteFromTargetByName: (id: string) => void;
}
export type Song2 = {
  id: string;
  name: string;
  author: string;
  image: string;
};
export interface Trendingsongsinner {
  songData?: {
    song_name_al?: string;
    id?: number;
    song_image?: string;
    song_name?: string;
    author_image?: string;
    author_name?: string;
    color?: string;
    artist?: string;
    isTrending?: boolean;
    popular?: boolean;
    radio_name?: string;
    radio_image?: string;
    chart_name?: string;
    chart_image?: string;
    description?: string;
    playlist_name?: string;
    playlist_image?: string;
  };
}
export interface Songslist {
  info: Song[];
}
export type HandleAddToTarget = (song: Song) => void;
export interface Artistsinner {
  Info: {
    id?: number;
    author_name?: string;
    author_image?: string;
    category?: string;
    color?: string;
    songs?: Song[];
    chart_name?: string;
    chart_image?: string;
    description?: string;
  };
  href: string;
}
export interface CreatePlaylistAllert {
  RemovePlaylistClick: () => void;
}
export interface Params {
  params: {
    song_name: string;
    artist: string;
    artistname: string;
    radioname: string;
    chart_name?: string;
    chart_image?: string;
    description?: string;
  };
}
export interface SongDivs {
  href: string;
  key: number;
  image: string;
  songname: string;
  artist: string;
  imgclass: string;
  chart_name?: string;
  chart_image?: string;
  description?: string;
  playlist_name?: string;
  splaylist_image?: string;
}

export interface Song {
  song_name_pl?: string;
  song_name_al?: string;
  song_name_char?: string;
  playlist_name?: string;
  song_name?: string;
  author_name?: string;
  song_image?: string;
  id?: string | number;
  show_name?: string;
  show_image?: string;
  radio_name?: string;
  radio_image?: string;
  show_id?: number;
  chart_name?: string;
  chart_image?: string;
  description?: string;
  song_id?: number;
  artist?: string;
  position?: number;
  duration?: string;
  image?: string;
  name?: string;
  author?: string;
  isTrending?: boolean;
  popular?: boolean;
  color?: string;
  author_image?: string;
}

export interface Moreoptionsminor2div {
  icon: React.ReactNode;
  text: string;
}
export interface Show {
  song_name_pl?: string;
  song_name_al?: string;
  song_name_char?: string;
  playlist_name?: string;
  id?: number | string;
  show_id?: number;
  host?: string;
  show_name?: string;
  show_image?: string;
  radio_name?: string;
  radio_image?: string;
  song_name?: string;
  author_name?: string;
  song_image?: string;
  chart_name?: string;
  chart_image?: string;
  description?: string;
  song_id?: number;
  artist?: string;
  position?: number;
  duration?: string;
}

export interface Radio {
  id: number;
  radio_image: string;
  radio_name: string;
  shows?: Show[];
}

export interface RadioDivsProps {
  key: number;
  image: string;
  radioname: string;
  href: string;
  info: Radio;
}

export interface DataItem {
  id: number;
  author_name: string;
  author_image: string;
  category: string;
  color: string;
  songs: Song[];
}

export interface FeaturedItem {
  id?: number;
  chart_name?: string;
  chart_image?: string;
  description?: string;
  color?: string;
  songs?: Song | Show[];
}
export interface PodcastsDiv {
  component: React.ReactNode;
}
