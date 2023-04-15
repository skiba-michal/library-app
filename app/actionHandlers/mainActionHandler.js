import { clr, displayCurrentRecord } from "../helpers.js";
import { applicationState } from "../applicationStateHandler.js";
import { displayErrorMessage } from "../helpers.js";

export const mainActionHandler = async (action) => {
  switch (action) {
    case "addRecord":
      await handleAddRecordAction();
      return;
    case "showRecords":
      await handleShowRecordAction();
      return;
    case "searchRecord":
      await handleSearchRecordsAction();
      return;
    case "exit":
      handleExitAction();
      return "exit";
    default:
      displayErrorMessage();
      return "error";
  }
};

const handleAddRecordAction = async () => {
  console.log("Work in progress");
};

const handleShowRecordAction = async () => {
  await displayCurrentRecord();
  applicationState.currentState = "showRecords";
};

const handleSearchRecordsAction = async () => {
  console.log("Work in progress");
};

const handleExitAction = () => {
  console.log(clr("Dziękujemy za skorzystanie z aplikacji !", "green"));
};
