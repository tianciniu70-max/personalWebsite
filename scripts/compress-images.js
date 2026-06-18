import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const assetsDir = join(__dirname, '../src/assets')

// 图片配置
const QUALITY = 85 // JPEG 压缩质量 (1-100)
const MAX_WIDTH = 1920 // 最大宽度
const MAX_HEIGHT = 1080 // 最大高度

async function compressImages() {
  try {
    const files = await readdir(assetsDir)
    const jpgFiles = files.filter(f => f.match(/^per_\d+\.jpg$/)).sort()

    console.log(`找到 ${jpgFiles.length} 张图片待处理...`)
    console.log('─'.repeat(50))

    for (const file of jpgFiles) {
      const inputPath = join(assetsDir, file)
      const outputPath = join(assetsDir, file)

      try {
        const inputStats = await stat(inputPath)
        const inputSize = (inputStats.size / 1024).toFixed(2)

        console.log(`处理: ${file}`)
        console.log(`  原始大小: ${inputSize} KB`)

        // 获取图片尺寸
        const metadata = await sharp(inputPath).metadata()
        const { width, height } = metadata

        let resize = null
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          resize = {
            width: MAX_WIDTH,
            height: MAX_HEIGHT,
            fit: 'inside'
          }
          console.log(`  调整尺寸: ${width}x${height} → (最大 ${MAX_WIDTH}x${MAX_HEIGHT})`)
        }

        // 压缩图片
        await sharp(inputPath)
          .resize(resize)
          .jpeg({ quality: QUALITY, progressive: true })
          .toFile(outputPath + '.tmp')

        // 替换原文件
        const fs = await import('fs/promises')
        await fs.rename(outputPath + '.tmp', outputPath)

        const outputStats = await stat(outputPath)
        const outputSize = (outputStats.size / 1024).toFixed(2)
        const saved = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1)

        console.log(`  压缩后: ${outputSize} KB (节省 ${saved}%)`)
        console.log('  ✓ 完成\n')
      } catch (err) {
        console.error(`  ✗ 失败: ${err.message}\n`)
      }
    }

    console.log('─'.repeat(50))
    console.log('所有图片处理完成！')
  } catch (err) {
    console.error('错误:', err)
    process.exit(1)
  }
}

compressImages()
