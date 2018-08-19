const getStatistics = (state) => {
  return state.tokens.statistics
};

export const isFetchingInProgress = (state) => {
  return Object.values(getStatistics(state)).some((tokenDefinition) => {
    return tokenDefinition.fetchingInProgress;
  })
};

export const wasFetchingTriggered = (state) => {
  return state.tokens.wasFetchingTriggered};