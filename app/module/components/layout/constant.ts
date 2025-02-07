const HEADER_MENU_LIST = [
  {
    id: 0,
    name: "교회 안내",
    url: "/notice",
  },
  {
    id: 1,
    name: "교회 소식",
    url: "/news?page=1",
  },
  {
    id: 2,
    name: "예배 및 집회",
    url: "/worship?category=sundaySermon&page=1",
  },
  {
    id: 3,
    name: "선교",
    url: "/mission",
  },
];

// 교회 안내
const NOTICE_SIDEBAR_LIST = [
  {
    id: 0,
    name: "교회 안내",
    url: "/notice",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "교회 소개",
        url: "#church_info",
        isClick: false,
      },
      {
        id: 1,
        name: "담임목사 소개",
        url: "#pastor_info",
        isClick: false,
      },
      {
        id: 2,
        name: "표어",
        url: "#slogan",
        isClick: false,
      },
      {
        id: 3,
        name: "예배 안내",
        url: "#worship_time",
        isClick: false,
      },
      {
        id: 4,
        name: "오시는 길",
        url: "#location",
        isClick: false,
      },
    ],
  },
  {
    id: 1,
    name: "다음 세대",
    url: "/notice/next-generation",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "유치부",
        url: "#kinder",
        isClick: false,
      },
      {
        id: 1,
        name: "아동부",
        url: "#child",
        isClick: false,
      },
      {
        id: 2,
        name: "청소년부",
        url: "#youth",
        isClick: false,
      },
      {
        id: 3,
        name: "청년부",
        url: "#adult",
        isClick: false,
      },
    ],
  },
  {
    id: 2,
    name: "교회 조직",
    url: "/notice/organization",
    isClick: false,
  },
  {
    id: 3,
    name: "시설 안내",
    url: "/notice/facility",
    isClick: false,
  },
];

// 교회 소식
const NEWS_SIDEBAR_LIST = [
  {
    id: 0,
    name: "교회 소식",
    url: "/news?page=1",
    isClick: false,
  },
  {
    id: 1,
    name: "주보",
    url: "/news/weekly?page=1",
    isClick: false,
  },
  {
    id: 2,
    name: "갤러리",
    url: "/news/gallery?page=1",
    isClick: false,
  },
];

// 예배 및 집회
const WORSHIP_SIDEBAR_LIST = [
  {
    id: 0,
    name: "예배 및 집회",
    url: "#",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "주일 예배",
        url: "/worship/?category=sundaySermon&page=1",
        isClick: false,
      },
      {
        id: 1,
        name: "주일 찬양 예배",
        url: "/worship/?category=sundayWorshipSermon&page=1",
        isClick: false,
      },
      {
        id: 2,
        name: "특별 예배",
        url: "/worship/?category=sundayEventSermon&page=1",
        isClick: false,
      },
    ],
  },
];

const MISSION_SIDEBAR_LIST = [
  {
    id: 0,
    name: "선교",
    url: "#",
    isClick: true,
    subMenuList: [
      {
        id: 0,
        name: "선교지 안내",
        url: "/mission",
        isClick: false,
      },
      {
        id: 1,
        name: "선교 갤러리",
        url: "/mission/gallery?page=1",
        isClick: false,
      },
    ],
  },
];

const MOBILE_SIDE_MENU = [
  {
    id: 0,
    name: "교회 안내",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "교회 안내",
        url: "/notice",
        isClick: false,
      },
      {
        id: 1,
        name: "다음 세대",
        url: "/notice/next-generation",
        isClick: false,
      },

      {
        id: 2,
        name: "교회 조직",
        url: "/notice/organization",
        isClick: false,
      },
      {
        id: 3,
        name: "시설 안내",
        url: "/notice/facility",
        isClick: false,
      },
    ],
  },
  {
    id: 1,
    name: "교회 소식",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "교회 소식",
        url: "/news?page=1",
        isClick: false,
      },
      {
        id: 1,
        name: "주보",
        url: "/news/weekly?page=1",
        isClick: false,
      },
      {
        id: 2,
        name: "갤러리",
        url: "/news/gallery?page=1",
        isClick: false,
      },
    ],
  },
  {
    id: 2,
    name: "예배 및 집회",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "주일 예배",
        url: "/worship/?category=sundaySermon&page=1",
        isClick: false,
      },
      {
        id: 1,
        name: "주일 찬양 예배",
        url: "/worship/?category=sundayWorshipSermon&page=1",
        isClick: false,
      },
      {
        id: 2,
        name: "특별 예배",
        url: "/worship/?category=sundayEventSermon&page=1",
        isClick: false,
      },
    ],
  },
  {
    id: 3,
    name: "선교",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "선교지 안내",
        url: "/mission",
        isClick: false,
      },
      {
        id: 1,
        name: "선교 갤러리",
        url: "/mission/gallery?page=1",
        isClick: false,
      },
    ],
  },
];

const FOOTER_INFO_LIST = [
  {
    id: 0,
    title: "상호",
    description: "생명의 빛 교회",
  },
  {
    id: 1,
    title: "담임목사",
    description: "김영식",
  },
  // {
  //   id: 2,
  //   title: "사업자 등록번호",
  //   description: "10-1234-5678",
  // },
  {
    id: 3,
    title: "주소",
    description: "경기도 고양시 일산동구 중산동 13-2번지 1층 생명의빛교회",
  },
  {
    id: 4,
    title: "이메일",
    description: " dukeun23@hanmail.net",
  },
];

export {
  HEADER_MENU_LIST,
  NOTICE_SIDEBAR_LIST,
  NEWS_SIDEBAR_LIST,
  WORSHIP_SIDEBAR_LIST,
  MISSION_SIDEBAR_LIST,
  MOBILE_SIDE_MENU,
  FOOTER_INFO_LIST,
};
