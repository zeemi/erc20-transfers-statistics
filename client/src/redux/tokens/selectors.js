const getStatistics = (state) => {
  return state.tokens.statistics
};

export const getWindowsLimit = (state) => {
  return state.tokens.windowsLimit
};

export const getStartTimestamp = (state) => {
  return state.tokens.startTimestamp
};

export const getEndTimestamp = (state) => {
  return state.tokens.endTimestamp
};

export const getDates = (state) => {
  return state.tokens.windowsLimit
};

export const isFetchingInProgress = (state) => {
  return Object.values(getStatistics(state)).some((tokenDefinition) => {
    return tokenDefinition.fetchingInProgress;
  })
};

export const wasFetchingTriggered = (state) => {
  return state.tokens.wasFetchingTriggered};

export const getChartsData = (state) => {
  return state.tokens.chartsData;
};

export const getChartsDataKeys = (state) => {
  return Object.keys(getStatistics(state));
};