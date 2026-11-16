# 伯明翰大学视觉素材来源

按用户要求用于 School of Computer Science 风格的网站模板。来源核对日期：2026-11-16。

| 本地文件 | 来源与用途 |
| --- | --- |
| `public/images/branding/uob-logo-light.svg` | [学校官网原始 SVG](https://www.birmingham.ac.uk/Images/logos/uob/uob-uk-logo-light.svg)，用于浅色背景的页眉、页脚；矢量内容未改动。 |
| `public/images/branding/uob-logo-dark.svg` | [学校官网原始 SVG](https://www.birmingham.ac.uk/Images/logos/uob/uob-uk-logo-dark.svg)，预留给深色背景；矢量内容未改动。 |
| `public/images/branding/edgbaston-campus.jpg` | [学校官网校园图片](https://www.birmingham.ac.uk/media-library/header-images/bisca-edgbaston-campus-aerial.x3af10975.jpg?f=webp&fit=crop&height=700&q=80&width=948)，与参考网站使用的图片源一致。图中为 Edgbaston 校园和 Old Joe 钟塔；仅使用 CSS 调整展示裁切及叠加渐变，未修改原始图片。服务器实际返回 JPEG，故采用 `.jpg` 扩展名。 |

官方学院页面：[School of Computer Science](https://www.birmingham.ac.uk/about/college-of-engineering-and-physical-sciences/computer-science)。

## 英文字体

- **DM Sans**：[Google Fonts 页面](https://fonts.google.com/specimen/DM+Sans)。本地文件 `public/fonts/dm-sans-latin.woff2`，用于正文、按钮和导航。
- **Source Serif 4**：[Google Fonts 页面](https://fonts.google.com/specimen/Source+Serif+4)。本地常规与斜体文件 `public/fonts/source-serif-4-latin.woff2`、`source-serif-4-italic-latin.woff2`，用于标题和少量装饰文字。
- 字体从 Google Fonts 官方 CSS 服务下载 Latin 字符集，保留可变字重。许可分别来自 Google Fonts 官方仓库的 [DM Sans OFL](https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt) 和 [Source Serif 4 OFL](https://github.com/google/fonts/blob/main/ofl/sourceserif4/OFL.txt)，原文随附于 `public/fonts/`。

学校官网当前使用大学统一 Logo，本模板使用“大学原版 Logo + School of Computer Science 独立文字”的组合，没有宣称存在一个单独的学院徽标。校徽与照片的权利归原权利人所有，本文件记录来源，不额外授予素材许可。
