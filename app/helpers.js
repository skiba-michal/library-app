import { getBooksList } from "./storageHandler.js";
import { applicationState } from "./applicationStateHandler.js";
import { parse, differenceInCalendarDays } from "date-fns";

export const clr = (text, color) => {
  const code = { red: 91, green: 92, blue: 34, cian: 96, yellow: 93 }[color];
  if (code) return "\x1b[" + code + "m" + text + "\x1b[0m";
};

export const displayNextRecord = async () => {
  const bookList = await getSortedRecords();
  const recordToShowIndex = applicationState.records.current;
  const recordToShow = bookList[recordToShowIndex];
  if (!recordToShow) {
    console.log(clr("To ostatni rekord", "red"));
  } else {
    applicationState.records.current += 1;
    displayBooksRecord(recordToShow, applicationState.records.current);
  }
};

export const displayPreviousRecord = async () => {
  const bookList = await getSortedRecords();
  const recordToShowIndex = applicationState.records.current - 2;
  const recordToShow = bookList[recordToShowIndex];
  if (!recordToShow) {
    console.log(clr("To pierwszy rekord", "red"));
  } else {
    applicationState.records.current -= 1;
    displayBooksRecord(recordToShow, applicationState.records.current);
  }
};

export const displayCurrentRecord = async () => {
  const bookList = await getSortedRecords();
  const recordToShowIndex = applicationState.records.current - 1;
  const recordToShow = bookList[recordToShowIndex];
  if (!recordToShow) {
    console.log(clr("Brak rekordu", "red"));
  } else {
    displayBooksRecord(recordToShow, applicationState.records.current);
  }
};

export const getSortedRecords = async () => {
  const { sortValue, sortType } = applicationState.records;
  const bookList = await getBooksList();

  if (!sortValue || !sortType) return bookList;
  const returnValueBigger = sortType === "asc" ? 1 : -1;
  const returnValueLower = sortType === "asc" ? -1 : 1;

  return bookList.sort((a, b) => {
    const aValue = a[sortValue];
    const bValue = b[sortValue];

    if (!aValue || !bValue) return 0;

    if (sortValue === "publicationDate") {
      const dateA = parse(a[sortValue], "dd.MM.yyyy", new Date());
      const dateB = parse(b[sortValue], "dd.MM.yyyy", new Date());
      const difference = differenceInCalendarDays(dateA, dateB);
      if (difference > 0) return returnValueBigger;
      if (difference < 0) return returnValueLower;
      return 0;
    }

    if (aValue > 0) return returnValueBigger;
    if (aValue < 0) return returnValueLower;
    return 0;
  });
};

export const displayBooksRecord = ({ title, author, publishingHouse, publicationDate, IsbnNumber }, numberRecord) => {
  const titleKey = clr("Tutuł:", "blue");
  const titleValue = clr(title, "green");

  const authorKey = clr("Autor:", "blue");
  const authorValue = clr(author, "green");

  const publishingHouseKey = clr("Wydawnictwo:", "blue");
  const publishingHouseValue = clr(publishingHouse, "green");

  const publicationDateKey = clr("Data Wydania:", "blue");
  const publicationDateValue = clr(publicationDate, "green");

  const IsbnNumberKey = clr("Numer ISBN:", "blue");
  const IsbnNumberValue = clr(IsbnNumber, "green");

  console.log(`Numer rekordu: ${numberRecord} \n`);
  console.log(titleKey, " ", titleValue);
  console.log(authorKey, " ", authorValue);
  console.log(publishingHouseKey, " ", publishingHouseValue);
  console.log(publicationDateKey, " ", publicationDateValue);
  console.log(IsbnNumberKey, " ", IsbnNumberValue);
  console.log("\n");
};

export const displayErrorMessage = () => {
  console.log(clr("Sytuacje wymkneła się spod kontroli, programiści dostaną 100 batów !", "red"));
};
