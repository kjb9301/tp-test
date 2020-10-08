import { MovieItem } from './types';

type MovieState = {
  loading: boolean;
  movies: MovieItem[];
  errorMessage: Error | null;
};

type MovieAction =
  | { type: 'SEARCH_MOVIES_REQUEST' }
  | { type: 'SEARCH_MOVIES_SUCCESS'; payload: MovieItem[] }
  | { type: 'SEARCH_MOVIES_FAILURE'; error: Error };

export const movieState: MovieState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const movieReducer = (state: MovieState, action: MovieAction) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
