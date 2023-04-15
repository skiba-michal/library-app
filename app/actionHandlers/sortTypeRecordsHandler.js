import { applicationState } from "../applicationStateHandler.js";
import { displayErrorMessage } from "../helpers.js";

export const sortTypeRecordsHandler = (action) => {
  switch (action) {
    case "sortAscending":
      handleSortAscending();
      return;
    case "sortDescending":
      handleSortDescending();
      return;
    case "backToRecordsMenu":
      handleBackToMenu();
      return;
    default:
      displayErrorMessage();
      return "error";
  }
};

const handleSortAscending = async () => {
  applicationState.currentState = "sortValueRecords";
  applicationState.records.sortType = "asc";
};

const handleSortDescending = async () => {
  applicationState.currentState = "sortValueRecords";
  applicationState.records.sortType = "desc";
};

const handleBackToMenu = async () => {
  applicationState.currentState = "showRecords";
};
