export interface ISermonData {
  id: number;
  title: string;
  verse: string;
  date: string;
  url: string;
}

export interface ISermonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISermonData[];
}
