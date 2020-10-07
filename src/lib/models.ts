export interface Track {
    id: string;
    name: string;
    popularity: number;
    url: string;
    album: Album;
    artists: Artist[];
}

export interface Album {
    id: string;
    name: string;
    images: Image[];
    artists: Artist[];
}

export interface Artist {
    id: string;
    name: string;
}

export interface Image {
    url: string;
    width: number;
    height: number;
}
