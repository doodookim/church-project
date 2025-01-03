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