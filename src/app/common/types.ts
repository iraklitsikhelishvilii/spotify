export interface Icon {
  classname: string;
  Hover?: boolean;
  fillcolor?: string;
}
export interface ZustandProps {
  playlist: boolean;
  plus: boolean;
  artist3: string;
  plusHover: boolean;
  marked: boolean;
  dotsHover: boolean;
  DotsClick: boolean;
  email: string;
  validemail?: boolean;
  emailError: string;
  HandlePlatlistClick: () => void;
  RemovePlaylistClick: () => void;
  handlePlus: () => void;
  NewPlaylistClick: () => void;
  HandleSelectedAuthor3: (artist3?: string) => void;
  PlusEnter: () => void;
  PlusLeave: () => void;
  MarkedClick?: () => void;
  MarkedClick2: () => void;
  DotsEnter: () => void;
  DotsLeave: () => void;
  DotsClickFunc: () => void;
  setEmail?: (email: string) => void;
  setvalidemail?: () => void | undefined;
  setEmailError: (emailError: string) => void;
  password: string;
  setPassword: (password: string) => void;
  oneLetter: boolean;
  setOneLetter: (val: boolean) => void;
  oneSymbol: boolean;
  setOneSymbol: (val: boolean) => void;
  tenChar: boolean;
  setTenChar: (val: boolean) => void;
  oneLetterError: boolean;
  setOneLetterError: (val: boolean) => void;
  oneSymbolError: boolean;
  setOneSymbolError: (val: boolean) => void;
  tenCharError: boolean;
  setTenCharError: (val: boolean) => void;
  validPassword: boolean;
  setValidPassword: (val: boolean) => void;
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
  setValidAbout: () => void;
}

export interface Trendingsongsinner {
  songData?: {
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
  song_name?: string;
  author_name?: string;
  song_image?: string;
  id: number;
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
}

export interface Moreoptionsminor2div {
  icon: React.ReactNode;
  text: string;
}
export interface Show {
  show_id: number;
  host: string;
  show_name?: string;
  show_image?: string;
  radio_name?: string;
  radio_image?: string;
}

interface Radio {
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
  songs: Song[];
}

export interface FeaturedItem {
  id: number;
  chart_name: string;
  chart_image: string;
  description: string;
  color: string;
  songs: Song[];
}
export interface PodcastsDiv {
  component: React.ReactNode;
}
