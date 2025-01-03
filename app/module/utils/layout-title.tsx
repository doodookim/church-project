import React from "react";

const layoutTitle = (pathName: string): string => {
  let title = "";
  // 교회 안내
  if (pathName === "/notice") return "교회 안내";
  if (pathName === "/notice/organization") return "교회 조직";
  if (pathName === "/notice/facility") return "시설안내";
  if (pathName === "/notice/next-generation") return "다음 세대";

  // 교회 소식
  if (pathName.includes("/news")) return "교회 소식";
  if (pathName.includes("/news/weekly")) return "주보";
  if (pathName.includes("/news/gallery")) return "생명의 빛 갤러리";

  // 예배 및 집회
  if (pathName.includes("/worship")) return "예배 및 집회";

  // 선교
  if (pathName === "/mission") return "선교지 안내";
  if (pathName.includes("/mission/gallery")) return "선교지 갤러리";

  return "";
};

export { layoutTitle };
