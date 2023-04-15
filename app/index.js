import prompts from "prompts";
import { mainActionHandler, showRecordsHandler, sortTypeRecordsHandler, sortValueRecordsHandler } from "./actionHandlers/index.js";
import { getMenu, getRecordsMenu, getSortValueMenu, getSortTypeMenu } from "./storageHandler.js";
import { applicationState } from "./applicationStateHandler.js";

const handleStatus = async ({ action, type }) => {
  if (type === "main") {
    const actionStatus = await mainActionHandler(action);
    return actionStatus;
  }
  if (type === "showRecords") {
    const actionStatus = await showRecordsHandler(action);
    return actionStatus;
  }
  if (type === "sortTypeRecords") {
    const actionStatus = sortTypeRecordsHandler(action);
    return actionStatus;
  }
  if (type === "sortValueRecords") {
    const actionStatus = sortValueRecordsHandler(action);
    return actionStatus;
  }
  if (type === "error") {
    const actionStatus = sortValueRecordsHandler(action);
    return actionStatus;
  }
};

let response = {};

const startApp = async () => {
  while (true) {
    console.log(applicationState.currentState);
    if (applicationState.currentState === "main") {
      response = await prompts({
        type: "select",
        name: "value",
        message: "Menu",
        choices: getMenu(),
        hint: "hint to do",
      });
    }

    if (applicationState.currentState === "showRecords") {
      response = await prompts({
        type: "select",
        name: "value",
        message: "Menu",
        choices: getRecordsMenu(),
        hint: "hint to do",
      });
    }

    if (applicationState.currentState === "sortTypeRecords") {
      response = await prompts({
        type: "select",
        name: "value",
        message: "Menu",
        choices: getSortTypeMenu(),
        hint: "hint to do",
      });
    }

    if (applicationState.currentState === "sortValueRecords") {
      response = await prompts({
        type: "select",
        name: "value",
        message: "Menu",
        choices: getSortValueMenu(),
        hint: "hint to do",
      });
    }

    const status = await handleStatus(response.value);

    if (status === "exit" || status === "error") break;
  }
};

startApp();
