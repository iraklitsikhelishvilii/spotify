export interface Icon {
  classname: string;
  Hover?: boolean;
  fillcolor?: string;
}
export interface ZustandProps {
  playlist: boolean;
  plus: boolean;
  Podcasts: boolean;
  Allpodcasts: boolean;
  artist3: string;
  plusHover: boolean;
  marked: boolean;
  dotsHover: boolean;
  DotsClick: boolean;
  HandlePlatlistClick: () => void;
  RemovePlaylistClick: () => void;
  handlePlus: () => void;
  NewPlaylistClick: () => void;
  HandlePodcasts: () => void;
  HandleAllPodcasts: () => void;
  HandleSelectedAuthor3: (artist3?: string) => void;
  PlusEnter: () => void;
  PlusLeave: () => void;
  MarkedClick?: () => void;
  MarkedClick2: () => void;
  DotsEnter: () => void;
  DotsLeave: () => void;
  DotsClickFunc: () => void;
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
  };
}
export interface SongDivs {
  href: string;
  key: number;
  image: string;
  songname: string;
  artist: string;
  imgclass: string;
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
