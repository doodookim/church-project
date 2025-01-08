interface ISubMenuList {
  id: number;
  name: string;
  url: string;
  isClick: boolean;
}
interface IMainMenuList {
  id: number;
  name: string;
  url: string;
  isClick: boolean;
  subMenuList?: ISubMenuList[];
}

export type { IMainMenuList, ISubMenuList };
