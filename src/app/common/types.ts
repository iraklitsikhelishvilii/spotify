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
    id: number;
    song_image: string;
    song_name: string;
    author_image: string;
    author_name: string;
    color: string;
  };
}

export interface Artistsinner {
  Info: {
    author_image?: string;
    author_name?: string;
    id?: number;
    song_image?: string;
    song_name?: string;
    isTreanding?: boolean;
    popular?: boolean;
    color?: string;
  };
}
export interface CreatePlaylistAllert {
  RemovePlaylistClick: () => void;
}
export interface Params {
  params: { song_name: string; artist: string; artistname: string };
}
