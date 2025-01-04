export interface IimageData {
  id: number;
  image_files: string;
}

export interface IchurchNotice {
  church_info_content: string;
  church_info_img: IimageData;
  pastor_info_content: string;
  pastor_img: IimageData;
  slogan_img: IimageData;
  worship_time_img: IimageData;
  location: string;
}

interface IGalleyAll {
  id: number;
  title: string;
  date: string;
  mission_gallery_thumb_img: IimageData;
}
export interface IMissionGalleryAll {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGalleyAll[];
}
