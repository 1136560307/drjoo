# DR.JOO 俏博士企业官网 React 深度优化版

本项目是基于已确认的俏博士官网原型图、门店素材、证书素材、页面路由与需求清单重构的 React + Vite 版本。

## 技术架构

- React + Vite
- React Router DOM
- 原生 CSS 设计系统
- 数据集中在 `src/data/siteData.js`
- 组件化结构：Header / Footer / SEO / LeadForm / SectionTitle / CTA / Accordion
- 适配 PC、平板、手机
- 支持 Vercel / Netlify / 宝塔 / Nginx 静态部署

## 目录说明

```text
src/
  components/        公共组件
  pages/             路由页面
  data/siteData.js   全站文案、产品、新闻、FAQ、图片配置
  hooks/useSeo.js    页面 SEO title/description 管理
  App.jsx            路由表
  main.jsx           React 入口
  styles.css         全站视觉样式
public/assets/       图片素材
```

## 本地运行

```bash
npm install
npm run dev
```

## 打包部署

```bash
npm run build
npm run preview
```

构建后的文件在：

```text
dist/
```

## 部署说明

如果使用 BrowserRouter，静态服务器需要把所有路径回退到 `index.html`。
本项目已提供：

- `vercel.json`
- `netlify.toml`
- `nginx.conf`

宝塔 / Nginx 可参考 `nginx.conf` 中的配置：

```nginx
try_files $uri $uri/ /index.html;
```

## 已完成优化

1. 从静态 HTML 升级为 React 组件化架构。
2. 首页按高保真原型升级为“专业 + 科技 + 品牌信任”视觉方向。
3. 全站文案集中配置，方便后续维护。
4. 产品、证书、门店、新闻、FAQ 数据化渲染。
5. 留资表单带前端校验与成功提示。
6. 全站 SEO title / description 可单独设置。
7. 移动端导航、响应式卡片和图片适配已配置。
8. 路由覆盖：首页、关于、科研实力、产品、单品、套盒、门店形象、AI赋能、加盟、案例、新闻、FAQ、联系。

## 注意事项

- 本项目使用 React 依赖，首次运行需要执行 `npm install`。
- 若部署到普通静态服务器，请确保配置路由回退到 `index.html`。
- 留资表单目前为前端模拟提交，后续可接飞书、企微或 CRM。
