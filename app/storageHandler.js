import { readFile } from "fs/promises";

const menuFile = JSON.parse(await readFile(new URL("../storage/menu.json", import.meta.url)));

export const getBooksList = async () => {
  const booksData = JSON.parse(await readFile(new URL("../storage/bookStorage.json", import.meta.url)));
  return booksData.books;
};

export const getMenu = () => {
  let choices = [];
  for (let item of menuFile.mainMenu) {
    choices.push({
      title: item.title,
      value: {
        action: item.action,
        type: item.type,
      },
    });
  }
  return choices;
};

export const getRecordsMenu = () => {
  let choices = [];
  for (let item of menuFile.recordsMenu) {
    choices.push({
      title: item.title,
      value: {
        action: item.action,
        type: item.type,
      },
    });
  }
  return choices;
};

export const getSortTypeMenu = () => {
  let choices = [];
  for (let item of menuFile.sortTypeMenu) {
    choices.push({
      title: item.title,
      value: {
        action: item.action,
        type: item.type,
      },
    });
  }
  return choices;
};

export const getSortValueMenu = () => {
  let choices = [];
  for (let item of menuFile.sortValueMenu) {
    choices.push({
      title: item.title,
      value: {
        action: item.action,
        type: item.type,
      },
    });
  }
  return choices;
};
