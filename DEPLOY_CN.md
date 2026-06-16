# 国内部署指南

本项目为 Vue 3 + Vite 静态网站，提供以下国内部署方案：

## 🚀 方案一：Cloudflare Pages（推荐）

### 优点
- ✅ 完全免费
- ✅ 支持 Git 自动部署
- ✅ 全球 CDN 加速
- ✅ 自定义域名支持
- ✅ 自动 HTTPS

### 方式 A：通过 GitHub 连接

1. **推送代码到 GitHub**
   ```bash
   git remote add origin https://github.com/你的用户名/portfolio-japan.git
   git branch -M main
   git push -u origin main
   ```

2. **在 Cloudflare 创建项目**
   - 访问 https://pages.cloudflare.com/
   - 点击 "Create a project" → "Connect to Git"
   - 授权并选择你的仓库

3. **配置构建设置**
   ```
   构建命令: npm run build
   构建输出目录: dist
   Node.js 版本: 18 或 20
   ```

4. **完成部署**
   - 等待 1-2 分钟即可访问
   - 获得一个 `*.pages.dev` 域名

### 方式 B：通过 Wrangler CLI

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **部署项目**
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=portfolio-japan
   ```

---

## 📦 方案二：Gitee Pages

### 优点
- ✅ 完全免费
- ✅ 国内访问速度快
- ✅ 操作简单

### 部署步骤

1. **在 Gitee 创建仓库**
   - 访问 https://gitee.com/
   - 创建新仓库 `portfolio-japan`

2. **推送代码**
   ```bash
   git remote add gitee https://gitee.com/你的用户名/portfolio-japan.git
   git push gitee main
   ```

3. **开启 Gitee Pages**
   - 进入仓库 → "服务" → "Gitee Pages"
   - 选择部署分支：`main`
   - 部署目录：`dist`
   - 点击 "启动"

4. **注意**：Gitee Pages 需要手动更新，代码变更后需点击 "更新" 按钮

---

## 🌐 方案三：腾讯云/阿里云 COS + CDN

### 优点
- ✅ 国内速度最快
- ✅ 稳定性高
- ✅ 成本低（约 10 元/月）

### 腾讯云部署步骤

1. **创建存储桶**
   - 登录腾讯云控制台
   - 进入 COS 控制台
   - 创建存储桶，选择 **公有读** 权限

2. **上传文件**
   - 将 `dist` 目录下所有文件上传到存储桶
   - 或使用 COSCMD 工具：

   ```bash
   pip install coscmd
   coscmd config
   coscmd upload -r dist/ / --ignore ./dist/.gitkeep
   ```

3. **配置 CDN**
   - 进入 CDN 控制台
   - 添加域名（需已备案）
   - 源站类型选择 "COS 源"

4. **配置 HTTPS（可选）**
   - 在 CDN 控制台申请免费 SSL 证书

---

## 🖥️ 方案四：自建服务器 + Nginx

### 适用于已有服务器的场景

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/portfolio-japan/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 部署脚本

```bash
# 在服务器上执行
cd /var/www/
git clone https://github.com/你的用户名/portfolio-japan.git
cd portfolio-japan
npm install
npm run build

# 复制到 Nginx 目录
sudo cp -r dist/* /var/www/portfolio-japan/
```

---

## 📋 各方案对比总结

| 方案 | 成本 | 速度 | 维护 | 自动部署 |
|------|------|------|------|----------|
| Cloudflare Pages | 免费 | ⭐⭐⭐ | 简单 | ✅ |
| Gitee Pages | 免费 | ⭐⭐⭐⭐ | 一般 | ❌ |
| 腾讯云 COS+CDN | ~10元/月 | ⭐⭐⭐⭐⭐ | 简单 | 需配置 |
| 自建+Nginx | 按服务器 | ⭐⭐⭐⭐ | 较复杂 | 需配置 |

---

## 🔧 优化建议

### 1. 代码分割优化
当前 Element Plus 打包体积较大，可以优化 `vite.config.ts`：

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

### 2. 按需导入 Element Plus
```typescript
import { Button, Card, Col, Row } from 'element-plus'
```

### 3. 启用 Gzip/Brotli 压缩
在 CDN 或 Nginx 中开启压缩可减少 70% 的传输体积。

---

## 🎯 快速开始建议

- **个人作品集，免费优先** → Cloudflare Pages
- **国内求职，速度优先** → 腾讯云/阿里云 COS + CDN
- **已有备案域名** → 腾讯云/阿里云 CDN
- **已有服务器** → Nginx 部署
