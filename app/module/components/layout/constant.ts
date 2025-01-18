const HEADER_MENU_LIST = [
  {
    id: 0,
    name: "교회 안내",
    url: "/notice",
  },
  {
    id: 1,
    name: "교회 소식",
    url: "/news",
  },
  {
    id: 2,
    name: "예배 및 집회",
    url: "/worship",
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
        url: "",
        isClick: false,
      },
      {
        id: 1,
        name: "담임목사 소개",
        url: "",
        isClick: false,
      },
      {
        id: 2,
        name: "표어",
        url: "",
        isClick: false,
      },
      {
        id: 3,
        name: "예배 안내",
        url: "",
        isClick: false,
      },
      {
        id: 4,
        name: "오시는 길",
        url: "",
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
        url: "",
        isClick: false,
      },
      {
        id: 1,
        name: "아동부",
        url: "",
        isClick: false,
      },
      {
        id: 2,
        name: "청소년부",
        url: "",
        isClick: false,
      },
      {
        id: 3,
        name: "청년부",
        url: "",
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
    url: "/news",
    isClick: false,
  },

  {
    id: 1,
    name: "주보",
    url: "/news/weekly",
    isClick: false,
  },
  {
    id: 2,
    name: "갤러리",
    url: "/news/gallery",
    isClick: false,
  },
];

// 예배 및 집회
const WORSHIP_SIDEBAR_LIST = [
  {
    id: 0,
    name: "예배 및 집회",
    url: "/worship",
    isClick: false,
    subMenuList: [
      {
        id: 0,
        name: "주일 예배",
        url: "/worship/?category=sundaySermon",
        isClick: false,
      },
      {
        id: 1,
        name: "주일 찬양 예배",
        url: "/worship/?category=sundayWorshipSermon",
        isClick: false,
      },
      {
        id: 2,
        name: "특별 예배",
        url: "/worship/?category=sundayEventSermon",
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
        url: "/mission/gallery",
        isClick: false,
      },
    ],
  },
];

export {
  HEADER_MENU_LIST,
  NOTICE_SIDEBAR_LIST,
  NEWS_SIDEBAR_LIST,
  WORSHIP_SIDEBAR_LIST,
  MISSION_SIDEBAR_LIST,
};
