export interface INewsListItem {
  id: number;
  title: string;
  date: string;
  notification: boolean;
}

export interface INewsListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: INewsListItem[];
}
