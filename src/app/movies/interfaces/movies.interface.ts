export interface Movie {
  _id?:                   string;
  id?:                    number;
  title:                 string | any;
  vote_average?:          number;
  vote_count?:            number;
  status:                Status | any;
  release_date?:         Date;
  revenue?:               number;
  runtime?:               number;
  adult?:                 boolean;
  backdrop_path?:        string;
  budget?:                number;
  homepage?:             string;
  imdb_id?:              string;
  original_language?:     OriginalLanguage;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:          string;
  tagline?:              string;
  genres?:               string;
  production_companies?: string;
  production_countries?: string;
  spoken_languages?:     string;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
}

export enum Status {
  Released = "Released",
}
