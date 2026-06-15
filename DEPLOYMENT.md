# 部署指南

本文档介绍如何将个人品牌网站部署到生产环境。

## 推荐部署平台

### 1. Vercel (最推荐)

**优点：**
- 免费额度充足
- 全球 CDN 加速
- 自动 HTTPS
- 支持日本区域部署
- 与 GitHub 无缝集成

**步骤：**

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. Vercel 会自动检测 Vite 配置
6. 点击 "Deploy"

**环境变量（可选）：**
无需额外配置

**自定义域名：**
- 在项目设置中添加自定义域名
- 按照提示配置 DNS 记录

### 2. Netlify

**优点：**
- 免费额度充足
- 表单处理功能
- 支持 Git 集成
- 易于使用

**步骤：**

1. 访问 [Netlify](https://netlify.com)
2. 注册并登录
3. 点击 "New site from Git"
4. 选择 GitHub 并授权
5. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

### 3. GitHub Pages

**优点：**
- 完全免费
- 与 GitHub 集成
- 简单易用

**步骤：**

1. 修改 `vite.config.ts` 添加 base 配置：
```typescript
export default defineConfig({
  base: '/your-repo-name/', // 替换为你的仓库名
  // ... 其他配置
})
```

2. 构建项目：
```bash
npm run build
```

3. 部署到 gh-pages 分支：
```bash
# 安装 gh-pages
npm install -g gh-pages

# 部署
gh-pages -d dist
```

4. 在 GitHub 仓库设置中启用 GitHub Pages

### 4. Cloudflare Pages

**优点：**
- 免费无限带宽
- 全球 CDN
- 快速部署

**步骤：**

1. 访问 [Cloudflare Pages](https://pages.cloudflare.com)
2. 连接 GitHub 账户
3. 选择仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `dist`
5. 点击 "Save and Deploy"

## 部署前检查清单

在部署前，请确认：

- [ ] 更新了所有个人信息（邮箱、GitHub、LinkedIn 等）
- [ ] 修改了项目经验中的具体内容
- [ ] 检查了所有链接的有效性
- [ ] 测试了中英双语切换功能
- [ ] 在移动端测试了响应式布局
- [ ] 验证了所有图片和资源文件
- [ ] 检查了 SEO 相关的 meta 标签

## SEO 优化建议

1. **更新 `public/index.html` 中的 meta 标签：**
```html
<meta name="description" content="你的个人简介">
<meta name="keywords" content="前端开发, Vue3, TypeScript, 日本IT">
<meta property="og:title" content="你的名字 - Frontend Engineer">
<meta property="og:description" content="你的个人简介">
```

2. **添加 favicon：**
- 将 `favicon.svg` 替换为你自己的图标
- 或者在 `public` 目录添加 `favicon.ico`

3. **生成 sitemap：**
- 使用在线工具生成 sitemap
- 提交到 Google Search Console

## 性能优化

1. **代码分割：**
   - Vite 已自动配置
   - 路由级别的懒加载已启用

2. **图片优化：**
   - 使用 WebP 格式
   - 提供多种尺寸
   - 使用懒加载

3. **CDN：**
   - 部署平台会自动提供 CDN

## 域名配置

### 购买域名

推荐域名注册商：
- Namecheap
- GoDaddy
- Cloudflare Registrar

### DNS 配置

以 Vercel 为例：

1. 在 Vercel 项目设置中添加域名
2. Vercel 会提供 DNS 记录
3. 在域名注册商处添加以下记录：

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 持续部署

所有推荐平台都支持持续部署：

- 推送代码到 main 分支
- 平台自动触发构建
- 构建成功后自动部署

## 监控和分析

### Google Analytics

1. 在 Google Analytics 创建账号
2. 获取跟踪 ID
3. 在 `index.html` 中添加：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 常见问题

### Q: 部署后页面空白？
A: 检查：
1. 构建是否成功
2. 路由模式是否正确（使用 hash 模式更稳定）
3. 浏览器控制台是否有错误

### Q: 图片不显示？
A: 检查：
1. 图片路径是否正确
2. 图片文件是否在 `public` 或 `assets` 目录
3. 图片文件名是否正确

### Q: 语言切换不生效？
A: 检查：
1. 浏览器本地存储
2. i18n 配置是否正确
3. 语言文件是否存在

## 维护建议

1. **定期更新内容**
   - 每季度检查一次内容是否需要更新
   - 及时添加新项目经验

2. **检查链接**
   - 定期检查外部链接是否有效
   - 更新已失效的链接

3. **性能监控**
   - 使用 Lighthouse 定期检查性能
   - 优化发现的问题

4. **安全更新**
   - 定期更新依赖包
   - 关注安全公告
