import {FETCH_TOKEN_STATISTIC_ERROR, FETCH_TOKEN_STATISTIC_REQUEST, FETCH_TOKEN_STATISTIC_SUCCESS} from "./action";

const initialState = {
  tokenInput: '',
  windowsLimit: 3,
  startTimestamp: null,
  endTimestamp: null,
  chartsData: [],
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
        startTimestamp: action.payload.data.start_timestamp,
        endTimestamp: action.payload.data.end_timestamp,
        statistics: {
          ...state.statistics,
          [action.payload.token]: {
            ...(state.statistics[action.payload.token] ? state.statistics[action.payload.token] : {}),
            fetchingInProgress: false, ...action.payload.data}
        },
        chartsData: (state.chartsData.length ? state.chartsData : Array.from(Array(state.windowsLimit), () => ({}))).map(
          (chartItem, index) => {
            return {...chartItem, [action.payload.token]: action.payload.data.transfers_per_window[index]};
          }
        )

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
