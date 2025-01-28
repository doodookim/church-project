export interface IImageData {
  id: number;
  image_files: string;
}

export interface IVideoData {
  id: number;
  video_files: string;
}

export interface IChurchNotice {
  church_info_content: string;
  church_info_img: IImageData;
  pastor_info_content: string;
  pastor_img: IImageData;
  slogan_img: IImageData;
  worship_time_img: IImageData;
  location: string;
}

interface IGalleyAll {
  id: number;
  title: string;
  date: string;
  mission_gallery_thumb_img: IImageData;
}
export interface IMissionGalleryAll {
  count: number;
  next: string | null;
  previous: string | null;
  results: IGalleyAll[];
}

export interface IMissionGalleryData {
  id: number;
  title: string;
  date: string;
  mission_gallery_img_set: IImageData[];
  mission_gallery_thumb_img: IImageData;
  mission_gallery_video_set: IVideoData[];
}
