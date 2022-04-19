export enum buttonBackgerandEnum {
  danger = 'danger',
  success = 'success',
  primary = 'primary',
}

export interface movieResultType {
  poster_path: string;
  video: boolean;
  vote_average: number;
  id: number;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: number[];
  title: string;
  original_language: string;
  original_title: string;
  popularity: number;
  media_type: string;
}

export interface movieDetailType {
  adult: boolean;
  backdrop_path: boolean;
  belongs_to_collection: null;
  budget: number;
  genres: object[];
  homepage: boolean;
  id: number;
  imdb_id: boolean;
  original_language: boolean;
  original_title: boolean;
  overview: boolean;
  popularity: 14.471;
  poster_path: boolean;
  production_companies: object[];
  production_countries: object[];
  release_date: boolean;
  revenue: number;
  runtime: number;
  spoken_languages: object[];
  status: boolean;
  tagline: boolean;
  title: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
