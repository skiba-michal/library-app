import { applicationState } from "../applicationStateHandler.js";
import { displayErrorMessage } from "../helpers.js";

export const sortValueRecordsHandler = (action) => {
  switch (action) {
    case "sortByTitle":
      handleSortByTitle();
      return;
    case "sortByAuthor":
      handleSortByAuthor();
      return;
    case "sortByPublishHouse":
      handleSortByPublishHouse();
      return;
    case "sortByPublishDate":
      handleSortByPublishDate();
      return;
    case "sortByIsbn":
      handleSortByIsbn();
      return;
    case "backToRecordsMenu":
      handleBackToMenuSortType();
      return;
    default:
      displayErrorMessage();
      return "error";
  }
};

const handleSortByTitle = async () => {
  applicationState.records.sortValue = "title";
  applicationState.currentState = "showRecords";
};

const handleSortByAuthor = async () => {
  applicationState.records.sortValue = "author";
  applicationState.currentState = "showRecords";
};

const handleSortByPublishHouse = async () => {
  applicationState.records.sortValue = "publishingHouse";
  applicationState.currentState = "showRecords";
};

const handleSortByPublishDate = async () => {
  applicationState.records.sortValue = "publicationDate";
  applicationState.currentState = "showRecords";
};

const handleSortByIsbn = async () => {
  applicationState.records.sortValue = "IsbnNumber";
  applicationState.currentState = "showRecords";
};

const handleBackToMenuSortType = async () => {
  applicationState.currentState = "showRecords";
};
