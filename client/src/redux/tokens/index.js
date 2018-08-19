import {FETCH_TOKEN_STATISTIC_ERROR, FETCH_TOKEN_STATISTIC_REQUEST, FETCH_TOKEN_STATISTIC_SUCCESS} from "./action";

const initialState = {
  tokenInput: '',
  numberOfWindows: 2,
  statistics: {},
  wasFetchingTriggered: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_TOKEN_STATISTIC_REQUEST:
      return {
        ...state,
        statistics: {
          ...state.statistics,
          [action.payload.token]: {fetchingInProgress: true, error: null, data: {}}},
        wasFetchingTriggered: true
      };
    case FETCH_TOKEN_STATISTIC_SUCCESS:
      return {
        ...state,
        statistics: {
          ...state.statistics,
          [action.payload.token]: {
            ...(state.statistics[action.payload.token] ? state.statistics[action.payload.token] : {}),
            fetchingInProgress: false, data: action.payload.data}}
        };
    case FETCH_TOKEN_STATISTIC_ERROR:
      return {
        ...state,
        statistics: {
          ...state.statistics,
          [action.payload.token]: {
            ...(state.statistics[action.payload.token] ? state.statistics[action.payload.token] : {}),
            fetchingInProgress: false, error: action.payload.error}}
      };
    default:
      return state;
  }
}
