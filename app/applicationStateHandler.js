const defaultState = Object.freeze({
  current: 1,
  sortType: "",
  sortValue: "",
  searchValue: "",
  searchType: "",
});

export const applicationState = {
  currentState: "main",
  records: Object.assign({}, defaultState),
};

export const resetApplicationRecordState = () => {
  applicationState.records = Object.assign({}, defaultState);
};
