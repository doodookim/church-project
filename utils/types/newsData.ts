export interface INewsFile {
  id: number;
  file: string;
}

export interface INewsImg {
  id: number;
  image_files: string;
}

export interface INewsVideo {
  id: number;
  video_files: string;
}
export interface INewsListItem {
  id: number;
  title: string;
  content: string;
  date: string;
  notification: boolean;
  file_set: INewsFile[];
  church_news_img_set: INewsImg[];
  weekly_img_set: INewsImg[];
  gallery_thumb_img: INewsImg;
  gallery_img_set: INewsImg[];
  gallery_video_set: INewsVideo[];
}

export interface INewsList {
  count: number;
  next: string | null;
  previous: string | null;
  results: INewsListItem[];
}
