import { useEffect, useState } from "react";
import { IMainMenuList } from "../types/layout-types";

export default function useSidebarForce(
  pathName: string,
  mainMenuList: IMainMenuList[],
  params?: string
) {
  const [menuList, setMenuList] = useState([...mainMenuList]);

  const menuListForce = () => {
    const copyMenuList = [...menuList];
    const deleteParamsPathName = params
      ? pathName.replace(`/${params}`, "")
      : pathName;

    const forceMenu = copyMenuList.map((item) => {
      return item.url === deleteParamsPathName
        ? { ...item, isClick: true }
        : { ...item, isClick: false };
    });
    setMenuList([...forceMenu]);
  };

  useEffect(() => {
    menuListForce();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return { menuList };
}
