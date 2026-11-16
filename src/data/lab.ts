/**
 * 真实资料统一在这里填写。未提供的文字保持 ''，列表保持 []。
 * 页面占位文案在 ui.ts 中，与真实内容分开管理。
 * 图片放在 public/images/ 下，填写 '/images/文件名.jpg'。
 */
export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  projects?: { label: string; url: string }[];
}
export interface Member {
  id: string;
  name: string;
  category: string;
  role?: string;
  interests?: string;
  photo?: string;
  homepage?: string;
  email?: string;
}
export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  paper?: string;
  code?: string;
  project?: string;
  bibtex?: string;
  featured?: boolean;
}
export interface NewsItem {
  slug: string;
  date: string; // YYYY-MM-DD
  title: string;
  summary: string;
  content?: string; // 纯文本，段落之间空一行
  url?: string; // 可选的外部原文；未提供时使用站内详情页
}
export const site = {
  name: "",
  englishName: "",
  shortName: "",
  institution: "University of Birmingham",
  department: "School of Computer Science",
  logo: "",
  introduction: "",
  heroTitle: "",
  location: "",
  address: "",
  email: "",
  copyright: "",
  seo: { title: "", description: "", image: "" },
  links: [] as { label: string; url: string }[],
  // 按本轮要求预设的学校视觉模板；关闭 enabled 可恢复无学校标识版本。
  branding: {
    enabled: true,
    universityName: "University of Birmingham",
    schoolName: "School of Computer Science",
    universityUrl: "https://www.birmingham.ac.uk/",
    schoolUrl:
      "https://www.birmingham.ac.uk/about/college-of-engineering-and-physical-sciences/computer-science",
    logo: "/images/branding/uob-logo-light.svg",
    logoOnDark: "/images/branding/uob-logo-dark.svg",
    heroImage: "/images/branding/edgbaston-campus.jpg",
    heroImageAlt:
      "An aerial view of the University of Birmingham Edgbaston campus, with the Old Joe clock tower at its centre.",
  },
};

// TODO: 按需填写和增删以下条目；字段格式见上方 interface 和 README。
export const research: ResearchArea[] = [];
export const members: Member[] = [];
export const publications: Publication[] = [];
export const news: NewsItem[] = [];

// category 对应 Member.category，可自由增加、删除、改名。
export const memberCategories = [
  {
    id: "principal-investigator",
    label: "Principal investigator",
    english: "Principal investigator",
  },
  {
    id: "researchers",
    label: "Faculty & researchers",
    english: "Faculty & researchers",
  },
  { id: "phd", label: "PhD students", english: "PhD students" },
  { id: "masters", label: "Master’s students", english: "Master’s students" },
  { id: "alumni", label: "Alumni", english: "Alumni" },
];

export const join = {
  introduction: "",
  opportunities: [
    {
      id: "study",
      title: "Graduate study",
      english: "Graduate study",
      description: "",
      url: "",
    },
    {
      id: "positions",
      title: "Open positions",
      english: "Open positions",
      description: "",
      url: "",
    },
    {
      id: "internship",
      title: "Research internships",
      english: "Research internships",
      description: "",
      url: "",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      english: "Collaboration",
      description: "",
      url: "",
    },
  ],
};
