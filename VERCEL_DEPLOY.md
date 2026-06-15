# Vercel 部署指南

## ✅ 项目已准备就绪！

项目已经完成了以下准备工作：
- ✅ Git 仓库已初始化
- ✅ 依赖已安装
- ✅ 构建测试成功
- ✅ Vercel 配置已添加
- ✅ 代码已提交

## 📤 部署到 Vercel

### 方法一：通过 Vercel 网站（推荐，最简单）

#### 步骤 1：推送代码到 GitHub

1. 在 GitHub 上创建一个新仓库
2. 运行以下命令推送代码：

```bash
cd /Users/niutianci/Desktop/workBuddy/portfolio-japan

# 添加 GitHub 远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

#### 步骤 2：在 Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 使用 **GitHub 账号登录**（推荐）
3. 点击 **"New Project"**
4. 选择你刚才创建的 GitHub 仓库
5. Vercel 会自动检测到这是 Vite 项目
6. 点击 **"Deploy"** 按钮

等待几分钟，部署完成后你会得到一个 URL，比如：
- `https://your-project-name.vercel.app`

#### 步骤 3：设置自定义域名（可选）

1. 在 Vercel 项目中点击 **"Settings"**
2. 点击 **"Domains"**
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

---

### 方法二：使用 Vercel CLI

如果你更喜欢使用命令行：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 在项目目录中
cd /Users/niutianci/Desktop/workBuddy/portfolio-japan

# 部署
vercel
```

---

## 📝 部署前检查清单

在部署前，建议先修改以下内容：

### 1. 更新个人信息

编辑 `src/locales/zh.ts` 和 `src/locales/en.ts`：

- ✏️ 更新邮箱：`your.email@example.com`
- ✏️ 更新 GitHub：`github.com/yourusername`
- ✏️ 更新 LinkedIn：`linkedin.com/in/yourprofile`
- ✏️ 更新微信：`your_wechat_id`

### 2. 更新项目经验

根据你的实际经验修改：
- ✏️ 项目名称和描述
- ✏️ 技术栈
- ✏️ 时间线
- ✏️ 职责和成果

### 3. 修改网站标题

编辑 `index.html` 中的 `<title>` 标签

### 4. 个性化样式（可选）

编辑 `src/styles/variables.scss` 修改主题色

---

## 🔧 修改后重新部署

### 自动部署

推送到 GitHub main 分支后，Vercel 会自动重新部署：

```bash
git add .
git commit -m "Update content"
git push
```

### 手动部署

在 Vercel 网站中：
1. 进入你的项目
2. 点击 **"Deployments"**
3. 点击最新的部署右侧的 **"..."** 菜单
4. 选择 **"Redeploy"**

---

## 🎯 下一步

1. **修改个人信息** - 让网站真正属于你
2. **推送代码到 GitHub** - 使用上面的命令
3. **在 Vercel 部署** - 只需几次点击
4. **获取域名** - 让你的简历更专业（可选）

---

## 📞 需要帮助？

- Vercel 文档：https://vercel.com/docs
- GitHub 文档：https://docs.github.com
- 本项目文档：查看 README.md 和 DEPLOYMENT.md

---

**准备好后，运行以下命令推送到 GitHub：**

```bash
# 替换下面的信息
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**然后访问 vercel.com 部署！** 🚀
