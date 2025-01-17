interface ISundayData {
  id: string;
  title: string;
  verse: string;
  date: string;
  url: string;
}

export interface ISundayList {
  count: number;
  next: string;
  previous: string;
  results: ISundayData[];
}
