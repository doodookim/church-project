export interface INewsListItem {
  id: number;
  title: string;
  date: string;
  notification: boolean;
}

export interface INewsList {
  count: number;
  next: string | null;
  previous: string | null;
  results: INewsListItem[];
}
