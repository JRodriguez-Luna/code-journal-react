/* exported data, writeData */
import { Entry } from '../pages/CodeJournal';

export interface Data {
  view: 'entries' | 'entry-form';
  entries: Entry[];
  editing: null | Entry;
  nextEntryId: number;
}

const dataKey = 'code-journal-data';

export const data = readData();

export function readData(): Data {
  let data: Data;
  const localData = localStorage.getItem(dataKey);
  if (localData) {
    data = JSON.parse(localData) as Data;
  } else {
    data = {
      view: 'entry-form',
      entries: [],
      editing: null,
      nextEntryId: 1,
    };
  }
  return data;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- exported
export function writeData(): void {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(dataKey, dataJSON);
}
