import { applicationState } from "../applicationStateHandler.js";
import { displayNextRecord, displayPreviousRecord, displayErrorMessage } from "../helpers.js";

export const showRecordsHandler = async (action) => {
  switch (action) {
    case "nextRecord":
      await handleNextRecords();
      return;
    case "previousRecord":
      await handlePreviousRecords();
      return;
    case "sortRecords":
      await handleSortRecords();
      return;
    case "editRecord":
      await handleEditRecord();
      return;
    case "deleteRecord":
      await handleDeleteRecord();
      return;
    case "backToMenu":
      await handleBackToMenu();
      return;
    default:
      displayErrorMessage();
      return "error";
  }
};

const handleNextRecords = async () => {
  await displayNextRecord();
};

const handlePreviousRecords = async () => {
  await displayPreviousRecord();
};

const handleSortRecords = async () => {
  applicationState.currentState = "sortTypeRecords";
};

const handleEditRecord = async () => {};

const handleDeleteRecord = async () => {};

const handleBackToMenu = () => {
  applicationState.currentState = "main";
};
