# Portfolio Japan - 个人品牌网站

面向日本 IT 企业求职的个人品牌网站，展示 5 年前端开发经验，突出"设计思维 × 前端工程"的复合型背景。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 下一代前端构建工具
- **Element Plus** - Vue 3 组件库
- **Vue Router** - 官方路由管理
- **Pinia** - Vue 3 状态管理
- **Vue I18n** - 国际化方案
- **SCSS** - CSS 预处理器

## 项目结构

```
portfolio-japan/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 资源文件
│   ├── components/     # 组件
│   │   ├── Layout/     # 布局组件
│   │   ├── Sections/   # 页面区块
│   │   └── UI/         # UI组件
│   ├── i18n/           # 国际化配置
│   ├── locales/        # 语言文件
│   ├── pages/          # 页面组件
│   ├── router/         # 路由配置
│   ├── styles/         # 全局样式
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── index.html          # HTML 模板
├── vite.config.ts      # Vite 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 页面结构

网站采用单页滚动设计，包含以下区块：

1. **Hero** - 首屏定位，展示核心价值主张
2. **About** - 个人故事，从服装设计到前端开发的转型经历
3. **Skills** - 技能展示，涵盖前端核心、框架工具、数据可视化、工程化
4. **Projects** - 项目经验，展示 MES 系统、OEE 设备管理、数据可视化平台
5. **Design Thinking** - 设计思维，阐述设计背景带来的独特优势
6. **Japan Career** - 赴日发展，说明职业目标和语言学习计划
7. **Contact** - 联系方式，提供多种沟通渠道

## 国际化

项目支持中英双语切换，可通过以下方式切换：

- 点击导航栏的语言切换按钮
- 修改 `src/i18n/index.ts` 中的默认语言

语言文件位置：
- `src/locales/zh.ts` - 中文
- `src/locales/en.ts` - 英文

## 个性化配置

### 修改个人信息

编辑以下文件来个性化你的内容：

1. **语言文件** (`src/locales/`)
   - 修改所有展示文本
   - 更新项目经验
   - 调整技能列表
   - 更新联系方式

2. **样式变量** (`src/styles/variables.scss`)
   - 调整配色方案
   - 修改字体大小
   - 更改间距系统

### 更新联系方式

在 `src/locales/zh.ts` 和 `src/locales/en.ts` 中修改 `contact.channels` 部分：

```typescript
contact: {
  channels: [
    { type: 'Email', value: 'your.email@example.com', icon: 'email', url: 'mailto:your.email@example.com' },
    { type: 'GitHub', value: 'github.com/yourusername', icon: 'github', url: 'https://github.com/yourusername' },
    // ... 添加更多联系方式
  ]
}
```

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Vite 配置并进行部署

### Netlify

1. 在 Netlify 中创建新站点
2. 连接 GitHub 仓库
3. 构建命令：`npm run build`
4. 发布目录：`dist`

### GitHub Pages

1. 在 `vite.config.ts` 中设置 base 路径
2. 构建项目
3. 将 `dist` 目录推送到 `gh-pages` 分支

## 设计规范

### 配色方案

- 主色：`#2563eb` (蓝色)
- 文字：`#1a1a1a` (黑色)
- 背景：`#ffffff` (白色)
- 辅助背景：`#f5f5f5` (浅灰)

### 字体系统

- 基础字体：系统字体栈（支持中日文）
- 代码字体：等宽字体
- 字体大小：12px - 56px

### 间距系统

基于 8px 网格系统：4px、8px、12px、16px、24px、32px、48px、64px

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

MIT

## 联系方式

如有问题或建议，欢迎通过以下方式联系：

- Email: your.email@example.com
- GitHub: github.com/yourusername
