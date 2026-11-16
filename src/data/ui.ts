// 仅用于框架展示；以下均不是课题组真实资料。
export const placeholders = {
  name: "NLP Research Group",
  englishName: "Natural Language Processing",
  institution: "Affiliation to be added",
  heroTitle: "Language meets\nintelligence.",
  introduction:
    "A short introduction to the group will appear here, outlining our research vision, the questions we ask and our current work.",
  research: "Research overview coming soon",
  publications: "Publications coming soon",
  news: "No updates yet",
  members: "Member profiles coming soon",
  join: "Details coming soon",
  contact: "Contact details coming soon",
};
interface NavigationItem {
  href: string;
  label: string;
  emphasis?: boolean;
}
export const navigation: NavigationItem[] = [
  { href: "", label: "Home" },
  { href: "research", label: "Research" },
  { href: "people", label: "People" },
  { href: "publications", label: "Publications" },
  { href: "news", label: "News" },
  { href: "contact", label: "Contact" },
  { href: "join", label: "Join us", emphasis: true },
];

// 首页编号、标题和排序直接跟随菜单；Home 本身不参与分区编号。
export const homeSections = navigation.filter((item) => item.href !== "");

// 日期与事件字段的版式占位，不代表已经发生的消息；真实新闻仍填写 lab.ts 的 news。
export const newsPlaceholders = [
  { date: "DD MMM YYYY", title: "Research news to be added" },
  { date: "DD MMM YYYY", title: "Seminar or event to be added" },
  { date: "DD MMM YYYY", title: "Group announcement to be added" },
];
