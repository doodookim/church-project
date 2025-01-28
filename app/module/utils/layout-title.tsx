const layoutTitle = (pathName: string): string => {
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

  //유저
  if (pathName === "/sign-in") return "회원 로그인";
  if (pathName === "/sign-up") return "회원 가입";
  if (pathName === "/success-sign-up") return "회원가입";
  if (pathName === "/my-page") return "마이 페이지";
  if (pathName === "/find-password") return "비밀번호 찾기";

  return "";
};

export { layoutTitle };
