# NLP 课题组介绍网站

一个可继续填写资料的静态学术网站。使用 Astro + TypeScript，无数据库或登录依赖。浅色与深绿色视觉、响应式导航、全英文界面。当前已按要求加入伯明翰大学校徽、School of Computer Science 标识文字和 Old Joe 校园主视觉。

## 运行与预览

需要 Node.js 24 或更新版本、pnpm 11.25.0。若没有 pnpm，可先运行 `npm install -g pnpm@11.25.0`。

在本目录打开终端：

```sh
pnpm install
pnpm dev
```

打开终端显示的地址，默认是 http://127.0.0.1:4321/ 。依赖已在本机安装，可直接 `pnpm dev`。Windows 也可双击 `启动预览.cmd`（需要 Node.js 已加入 PATH）；关闭预览窗口或按 Ctrl+C 即可停止。

```sh
pnpm check       # Astro / TypeScript 检查
pnpm build       # 生成 dist/ 静态文件
pnpm preview     # 预览构建后的版本
```

如果当前电脑终端尚未配置 pnpm，但依赖已经安装，也可直接运行：

```sh
node node_modules/astro/bin/astro.mjs dev --host 127.0.0.1
```

## 页面

| 地址 | 内容 |
| --- | --- |
| `/` | 首页、研究入口、代表作、最新动态、加入入口 |
| `/research/` | 研究方向与项目卡片 |
| `/people/` | 按角色组织的团队成员 |
| `/publications/` | 按年份归档的论文；有资料时启用搜索和年份筛选 |
| `/news/` | 按日期排列的动态 |
| `/news/消息标识/` | 添加动态后自动生成的详情页 |
| `/join/` | 招生、招聘、实习、合作说明 |
| `/contact/` | 单位、邮箱、地址、相关链接 |
| `/404.html` | 页面未找到 |

## 只修改一个文件即可填充主要资料

**`src/data/lab.ts`** 是资料入口；文件顶部定义了字段格式，并包含 TODO 注释。真实姓名、论文和联系信息目前全部留空；所属单位和学院已按要求预设为 University of Birmingham / School of Computer Science。

| 数据项 | 填写内容 |
| --- | --- |
| `site` | 中英文名称、简称、单位、简介、首页标题、Logo、联系信息、SEO |
| `site.branding` | 学校 Logo、学院名称、官方链接、校园主视觉及图片说明 |
| `research` | 研究标题、简介、配图和项目链接 |
| `memberCategories` | 成员分类名称与顺序，可增删 |
| `members` | 姓名、所属分类、身份、兴趣、照片、主页、邮箱 |
| `publications` | 标题、作者、会议/期刊、数字年份、可选链接及 BibTeX |
| `news` | 唯一 slug、日期、标题、摘要、详情或外部原文 |
| `join` | 招生、招聘、实习和合作文字与链接 |

图片放在 `public/images/`，引用时填写 `/images/文件名.jpg`，网站会自动处理 GitHub Pages 的仓库子路径。推荐头像为正方形，研究配图为 16:9。没有照片时使用抽象人像占位；没有 Logo 时使用通用图形。

框架占位文字独立放在 **`src/data/ui.ts`**，不代表真实资料。需要修改导航文字也在此文件。首页口号和英文页脚是可替换的设计文案；填写 `site.heroTitle` 即可覆盖首页口号，换行使用 `\n`。基础样式位于 `src/styles/global.css`，学校视觉样式位于 `src/styles/university.css`，英文排版与字体位于 `src/styles/typography.css`。

### 英文与字体

全站默认语言为 `en-GB`，包括导航、空状态、按钮、论文筛选、日期格式和无障碍标签。标题使用 Source Serif 4，正文和导航使用 DM Sans；字体均随项目本地保存，不依赖访客连接 Google Fonts。字体文件及开放字体许可位于 `public/fonts/`。课题组真实名称仍为空，页面暂显示通用的 “NLP Research Group”。

### 学校视觉模板

- 页眉、页脚使用学校官网原版 University of Birmingham Logo，学院名称作为独立文字展示，没有绘制或编造新的学院徽标。
- 首页主视觉使用学校官网提供的 Edgbaston 校园 / Old Joe 航拍照片，并叠加深色渐变以保证图注清晰；照片展示的是校园，不特指计算机学院楼。
- 所有素材保存在 `public/images/branding/`，运行时不依赖第三方图片链接。
- 修改 `site.branding` 即可更换图片、名称、官方链接与图注。将 `enabled` 设为 `false` 可隐藏学校 Logo 并恢复原有语言抽象主视觉；所属单位字段可独立修改。
- 素材来源与对应本地文件见 [ASSET_SOURCES.md](ASSET_SOURCES.md)。

### 首页布局与新闻占位

页眉右侧按“课题组名称 / School of Computer Science”上下排版；大学 Logo 单独位于左侧。首页校园图横向铺满，通过左右及向下的渐变融入页面，图注仅显示学院名称。相关样式位于 `src/styles/refinements.css`。

首页 Latest news 预留三条“日期 + 事件”行，日期显示为 `DD MMM YYYY`，不代表真实新闻。占位条目在 `src/data/ui.ts` 的 `newsPlaceholders` 中。将真实消息加入 `src/data/lab.ts` 的 `news` 数组后，将自动按日期从新到旧显示最新三条，日期、标题及新闻详情链接均由真实资料生成。

首页主分区按菜单顺序展示：01 Research、02 People、03 Publications、04 News、05 Contact、06 Join us。标题与顺序均来自 `src/data/ui.ts` 的 `navigation`，由 `HomeSections.astro` 渲染；Home 和顶部 Latest news 摘要不参与编号。菜单本身和各个独立页面不显示装饰编号。页脚已省去重复的单位文字。

### 填写范式（仅说明字段，不是实际成果）

将以下格式的对象加入对应数组，替换说明文字。不要将示例说明文字原样作为真实内容发布。

```ts
// research 数组中的一个对象：
{
  id: '唯一英文标识',
  title: '填写真实研究方向',
  description: '填写真实研究简介',
  image: '',
  imageAlt: '',
  projects: [], // 每项为 { label: '项目名称', url: '实际 https 地址' }
}

// members 数组中的一个对象：
{
  id: '唯一英文标识',
  name: '填写真实姓名',
  category: 'phd', // 必须对应 memberCategories 的 id
  role: '',
  interests: '',
  photo: '',
  homepage: '',
  email: '',
}

// publications 数组中的一个对象：
{
  id: '唯一英文标识',
  title: '填写真实论文标题',
  authors: '填写真实作者',
  venue: '填写真实发表 venue',
  year: 2026, // 按真实年份修改，必须为数字
  paper: '', code: '', project: '', bibtex: '',
  featured: true, // 首页“研究成果”只显示 featured 为 true 的条目
}

// news 数组中的一个对象：
{
  slug: '唯一英文消息标识', // 仅使用字母、数字和连字符；不能重复
  date: '2026-01-01', // 修改为实际日期，格式 YYYY-MM-DD
  title: '填写真实消息标题',
  summary: '填写真实摘要',
  content: '填写真实详情。\n\n新段落。',
  url: '',
}
```

可选链接保持空字符串时不显示按钮。外部网址使用 `https://` 完整地址。新闻详情使用纯文本，不会执行 HTML。填写资料后重新构建即可更新静态页面。当前没有虚构成员、论文、新闻、研究主题或联系地址。

## GitHub Pages 部署

目前没有推送至远程仓库或公开发布。项目已包含 `.github/workflows/deploy.yml`：

1. 在 GitHub 创建网站仓库，把**本目录的内容**放在仓库根目录，默认分支使用 `main`。提交 `pnpm-lock.yaml`，不要提交 `node_modules/`。
2. 在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. 推送到 `main` 或手动运行 Deploy to GitHub Pages 工作流。工作流自动获取正确的站点域名和仓库子路径，执行检查及构建，随后发布。
4. 使用 GitHub Pages 返回的地址访问网站。若使用自定义域名，请先在 GitHub Pages 设置中配置；生成的站点域名和路径由配置步骤提供。还可按需添加 `public/CNAME`。

本地模拟仓库子路径（PowerShell）：

```powershell
$env:SITE_URL = 'https://你的用户名.github.io'
$env:BASE_PATH = '/你的仓库名'
pnpm build
pnpm preview
```

此时请打开 `http://127.0.0.1:4321/你的仓库名/`。根域名仓库 `用户名.github.io` 使用 `/`。测试完移除这两个环境变量，再执行普通本地构建。

部署参考：[Astro 官方 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/)。工作流将在实际连接 GitHub 仓库后执行；当前仅完成本地验证。

## 后续需要的资料

- 中英文课题组名称、单位、Logo 和简介。
- 实际研究方向、配图、项目说明。
- 各分类成员信息、头像和个人链接。
- 真实论文清单、年份、作者、链接及代表作标记。
- 真实动态、招生/招聘/实习/合作说明。
- 邮箱、地址、相关主页、站点描述与分享图片。

## 设计与可访问性

参考网站的学术内容组织方式；按后续要求加入伯明翰大学统一视觉与同款官方校园照片，未复用参考网站的成员资料或论文。原有代码绘制的抽象语言示意图保留为可切换版本。网站包含跳转正文链接、语义化结构、键盘焦点、移动菜单展开状态与 Escape 关闭、减少动画设置和打印样式。搜索与年份筛选只在有论文资料且脚本可运行时显示；禁用脚本时仍可阅读全部内容。
