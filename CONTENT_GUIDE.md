# 内容编辑指南

本文档详细说明如何编辑和个性化网站内容。

## 文件结构

所有文本内容存储在以下文件中：

```
src/locales/
├── zh.ts    # 中文内容
└── en.ts    # 英文内容
```

## 内容区块详解

### 1. Hero 区域 (首屏)

**中文示例：**
```typescript
hero: {
  tagline: 'Design Thinking × Frontend Engineering',
  greeting: '你好，我是',
  name: '前端工程师',
  experience: '5 年企业级前端开发经验',
  specialization: '专注 Vue3 生态 / 数据可视化 / 组件化开发',
  cta: {
    primary: '查看作品',
    secondary: '下载简历'
  }
}
```

**编辑建议：**
- `tagline`: 保持简洁，一句话概括你的核心价值
- `name`: 可以替换为你的名字或职业定位
- `specialization`: 列出 3-5 个核心技能领域

### 2. About 区域 (关于我)

**关键部分：**

```typescript
about: {
  story: '你的个人故事...',
  highlights: [
    { label: '标签', desc: '简短描述' },
    // ... 更多亮点
  ]
}
```

**编辑建议：**
- `story`: 保持 3-4 段，每段 2-3 行
- 使用 `v-html` 支持简单 HTML（如 `<br>` 换行）
- `highlights`: 4 个亮点，突出你的独特价值

### 3. Skills 区域 (技能展示)

**结构：**
```typescript
skills: {
  categories: [
    {
      name: '分类名称',
      icon: '图标名称',
      items: ['技能1', '技能2', ...]
    }
  ]
}
```

**可用图标：**
- `code` - 代码相关
- `tool` - 工具相关
- `chart` - 图表相关
- `git` - 版本控制

**编辑建议：**
- 保持 4 个技能分类
- 每个分类 4-6 项技能
- 技能描述要简洁具体

### 4. Projects 区域 (项目经验)

**完整项目结构：**
```typescript
{
  id: 'mes',
  name: '项目名称',
  role: '你的职位',
  duration: '2021 - 2022',
  description: '项目简介（2-3句话）',
  tech_stack: ['技术1', '技术2', ...],
  responsibilities: [
    '职责1',
    '职责2',
    // ...
  ],
  achievements: [
    '成果1',
    '成果2',
    // ...
  ]
}
```

**编辑建议：**
- `name`: 简洁的项目名称
- `description`: 突出项目价值和影响力
- `tech_stack`: 4-6 个关键技术
- `responsibilities`: 3-5 条主要职责
- `achievements`: 3 条具体成果，最好有数据支撑

### 5. Design Thinking 区域 (设计思维)

**结构：**
```typescript
designThinking: {
  intro: '引言...',
  pillars: [
    {
      title: '核心能力',
      desc: '简短描述',
      examples: ['例子1', '例子2', '例子3']
    }
  ],
  closing: '总结...'
}
```

**编辑建议：**
- 保持 3 个核心能力
- 每个能力 3 个具体例子
- 如果没有设计背景，可以调整这部分内容

### 6. Japan Career 区域 (赴日发展)

**关键部分：**
```typescript
japanCareer: {
  motivation: '赴日动机...',
  whyJapan: [
    { title: '原因标题', desc: '详细说明' }
  ],
  language: {
    status: '日语学习中',
    level: 'N4 → N3 目标',
    commitment: '持续提升...'
  },
  values: ['价值1', '价值2', ...]
}
```

**编辑建议：**
- `motivation`: 真诚表达赴日动机
- `language`: 据实填写日语水平
- `values`: 5 点你能提供的价值

### 7. Contact 区域 (联系方式)

**结构：**
```typescript
contact: {
  channels: [
    {
      type: 'Email',
      value: 'your.email@example.com',
      icon: 'email',
      url: 'mailto:your.email@example.com'
    }
  ]
}
```

**可用图标：**
- `email` - 邮箱
- `github` - GitHub
- `linkedin` - LinkedIn
- `wechat` - 微信

## 中文英文同步

**重要：** 编辑内容时，务必同步更新 `zh.ts` 和 `en.ts` 两个文件。

**建议流程：**
1. 先完成中文内容
2. 翻译成英文（注意专业术语的准确翻译）
3. 检查两版本的一致性

## 样式微调

如需调整样式，编辑 `src/styles/variables.scss`：

```scss
// 修改主题色
$color-primary: #2563eb;  // 改为你喜欢的颜色

// 修改字体大小
$font-size-4xl: 3.5rem;   // 调整最大标题大小

// 修改间距
$spacing-12: 6rem;         // 调整大间距
```

## 添加新项目

复制现有项目结构并修改：

```typescript
{
  id: 'new-project',
  name: '新项目名称',
  // ... 其他字段
}
```

然后将该项目添加到 `projects.items` 数组中。

## 删除不需要的内容

如果某些区块不需要：

1. 在 `HomePage.vue` 中删除对应的组件引用
2. 从 `AppHeader.vue` 的导航中移除对应链接
3. 可选：从语言文件中删除相关内容

## 内容检查清单

发布前检查：

- [ ] 所有个人信息已更新
- [ ] 项目经验真实准确
- [ ] 联系方式有效
- [ ] 中英内容对应
- [ ] 无错别字
- [ ] 专业术语准确
- [ ] 链接全部有效

## 常见编辑问题

### Q: 如何添加换行？
A: 在字符串中使用 `\n` 或在组件中使用 `v-html` + `<br>`

### Q: 如何添加特殊字符？
A: 使用 Unicode 转义，如 `©` 表示 ©

### Q: 如何调整文本长度？
A: 保持简介简洁（2-3行），详细内容可以稍长（3-5行）

### Q: 项目描述写多长？
A: 2-3句话，突出项目价值和技术挑战

## 获取帮助

如需更多帮助：
- 查看 Vue I18n 文档
- 参考现有内容结构
- 保持内容简洁专业
