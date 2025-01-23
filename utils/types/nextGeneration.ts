interface INextImage {
  id: number;
  image_files: string;
}

export interface INextGenerationItem {
  kinder_content: string;
  next_generation_kinder_img: INextImage;
  child_content: string;
  next_generation_child_img: INextImage;
  youth_content: string;
  next_generation_youth_img: INextImage;
  adult_content: string;
  next_generation_adult_img: INextImage;
}
