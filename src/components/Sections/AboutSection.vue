<template>
	<section
		class="about"
		id="about"
	>
		<!-- 区域标题 -->
		<div class="section-header">
			<span class="section-label animate-on-enter">{{
				t('about.subtitle')
			}}</span>
			<h2 class="section-title animate-on-enter">
				{{ t('about.title') }}
			</h2>
		</div>

		<!-- 内容区域 -->
		<div class="about-content animate-on-enter">
			<!-- 左侧内容区 -->
			<div class="about-left">
				<!-- 文字介绍 -->
				<div class="about-text">
					<p>{{ t('about.story') }}</p>
					<p class="about-extra">
						Currently exploring opportunities in Japan's tech scene,
						where I can contribute my expertise in frontend
						architecture while immersing myself in a culture that
						values craftsmanship and attention to detail.
					</p>
				</div>

				<!-- 数据统计 -->
				<div class="about-stats">
					<div
						v-for="(stat, index) in stats"
						:key="index"
						class="stat-card"
					>
						<span class="stat-number">{{ stat.number }}</span>
						<span class="stat-label">{{ stat.label }}</span>
					</div>
				</div>
			</div>

			<!-- 右侧图片轮播区 -->
			<div
				class="image-gallery"
				@mouseenter="pauseAutoplay"
				@mouseleave="resumeAutoplay"
			>
				<div class="gallery-viewport">
					<div
						class="gallery-track"
						:style="{
							transform: `translateX(-${currentIndex * 100}%)`
						}"
					>
						<div
							v-for="(image, index) in galleryImages"
							:key="index"
							class="gallery-slide"
						>
							<img
								:src="image.src"
								:alt="image.alt"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

				<!-- 导航按钮 -->
				<button
					class="gallery-nav gallery-nav-prev"
					@click="prevImage"
					aria-label="Previous image"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M15 18l-6-6 6-6" />
					</svg>
				</button>
				<button
					class="gallery-nav gallery-nav-next"
					@click="nextImage"
					aria-label="Next image"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M9 18l6-6-6-6" />
					</svg>
				</button>

				<!-- 进度指示器 -->
				<div class="gallery-indicators">
					<button
						v-for="(_, index) in galleryImages"
						:key="index"
						:class="[
							'gallery-indicator',
							{ active: index === currentIndex }
						]"
						@click="goToImage(index)"
						:aria-label="`Go to image ${index + 1}`"
					></button>
				</div>
			</div>
		</div>

		<!-- 亮点卡片 -->
		<div class="highlights-grid">
			<div
				v-for="(item, index) in highlights"
				:key="index"
				class="highlight-card animate-on-enter"
			>
				<div class="highlight-icon">{{ getHighlightIcon(index) }}</div>
				<div class="highlight-info">
					<h4>{{ item.title || item.label }}</h4>
					<p>{{ item.desc }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const highlights = computed(() => tm('about.highlights') as any[])
const stats = computed(() => tm('about.stats') as any[])

const getHighlightIcon = (index: number) => {
	const icons = ['⚡', '💡', '🎯', '📊']
	return icons[index % icons.length]
}

// 图片轮播逻辑
const galleryImages = computed(() => [
	{
		src: new URL('@/assets/per_01.jpg', import.meta.url).href,
		alt: 'Portfolio 01'
	},
	{
		src: new URL('@/assets/per_02.jpg', import.meta.url).href,
		alt: 'Portfolio 02'
	},
	{
		src: new URL('@/assets/per_03.jpg', import.meta.url).href,
		alt: 'Portfolio 03'
	},
	{
		src: new URL('@/assets/per_04.jpg', import.meta.url).href,
		alt: 'Portfolio 04'
	},
	{
		src: new URL('@/assets/per_05.jpg', import.meta.url).href,
		alt: 'Portfolio 05'
	},
	{
		src: new URL('@/assets/per_06.jpg', import.meta.url).href,
		alt: 'Portfolio 06'
	},
	{
		src: new URL('@/assets/per_07.jpg', import.meta.url).href,
		alt: 'Portfolio 07'
	},
	{
		src: new URL('@/assets/per_08.jpg', import.meta.url).href,
		alt: 'Portfolio 08'
	}
])

const currentIndex = ref(0)
const isPaused = ref(false)
let intervalId: number | null = null

const nextImage = () => {
	currentIndex.value = (currentIndex.value + 1) % galleryImages.value.length
}

const prevImage = () => {
	currentIndex.value =
		(currentIndex.value - 1 + galleryImages.value.length) %
		galleryImages.value.length
}

const goToImage = (index: number) => {
	currentIndex.value = index
}

const startAutoplay = () => {
	intervalId = window.setInterval(() => {
		if (!isPaused.value) {
			nextImage()
		}
	}, 3000)
}

const stopAutoplay = () => {
	if (intervalId !== null) {
		clearInterval(intervalId)
		intervalId = null
	}
}

const pauseAutoplay = () => {
	isPaused.value = true
}

const resumeAutoplay = () => {
	isPaused.value = false
}

onMounted(() => {
	startAutoplay()
})

onUnmounted(() => {
	stopAutoplay()
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.about {
	max-width: var(--container-max-width);
	margin: 0 auto;
	padding: $spacing-32 $spacing-8;
	background: var(--color-background-alt);
}

// 区域标题
.section-header {
	text-align: center;
	margin-bottom: $spacing-16;
}

.section-label {
	display: inline-block;
	font-family: $font-family-base;
	font-size: $font-size-xs;
	font-weight: $font-weight-semibold;
	color: var(--color-accent);
	letter-spacing: $letter-spacing-wider;
	text-transform: uppercase;
	margin-bottom: $spacing-3;
}

.section-title {
	font-family: $font-family-display;
	font-size: $font-size-5xl;
	font-weight: $font-weight-bold;
	color: var(--color-primary-dark);
	letter-spacing: $letter-spacing-tighter;
	line-height: $line-height-tight;

	@media (max-width: $breakpoint-md) {
		font-size: $font-size-3xl;
	}
}

// 内容区域
.about-content {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
	gap: $spacing-12;
	margin-bottom: $spacing-16;
	align-items: start;

	@media (max-width: $breakpoint-xl) {
		grid-template-columns: 1fr 1.1fr;
		gap: $spacing-8;
	}

	@media (max-width: $breakpoint-lg) {
		grid-template-columns: 1fr;
		gap: $spacing-10;
	}
}

// 左侧内容区
.about-left {
	display: flex;
	flex-direction: column;
	gap: $spacing-10;

	@media (max-width: $breakpoint-lg) {
		gap: $spacing-8;
	}
}

.about-text {
	p {
		font-family: $font-family-base;
		font-size: $font-size-base;
		font-weight: $font-weight-normal;
		color: var(--color-dark-gray);
		line-height: $line-height-relaxed;

		@media (max-width: $breakpoint-md) {
			font-size: $font-size-sm;
		}
	}
}

.about-extra {
	margin-top: $spacing-4;
}

// 图片轮播区域
.image-gallery {
	position: relative;
	width: 100%;
	overflow: hidden;
	height: auto;
	aspect-ratio: 4 / 3;

	@media (max-width: $breakpoint-lg) {
		aspect-ratio: 16 / 10;
	}

	@media (max-width: $breakpoint-md) {
		aspect-ratio: 3 / 2;
	}
}

.gallery-viewport {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: var(--color-background);
}

.gallery-track {
	display: flex;
	height: 100%;
	transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-slide {
	flex: 0 0 100%;
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
}

// 导航按钮
.gallery-nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	background: rgba(255, 255, 255, 0.9);
	border: 1px solid var(--color-border);
	color: var(--color-primary-dark);
	cursor: pointer;
	opacity: 0;
	transition: all $transition-normal $ease-default;
	backdrop-filter: blur(8px);

	@media (max-width: $breakpoint-md) {
		opacity: 1;
		width: 40px;
		height: 40px;
	}

	&:hover {
		background: #ffffff;
		border-color: var(--color-accent);
		color: var(--color-accent);
	}

	&:active {
		transform: translateY(-50%) scale(0.95);
	}

	svg {
		width: 20px;
		height: 20px;

		@media (max-width: $breakpoint-md) {
			width: 16px;
			height: 16px;
		}
	}
}

.image-gallery:hover .gallery-nav {
	opacity: 1;
}

.gallery-nav-prev {
	left: $spacing-4;
}

.gallery-nav-next {
	right: $spacing-4;
}

// 进度指示器
.gallery-indicators {
	position: absolute;
	bottom: $spacing-4;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: $spacing-2;
	z-index: 10;
	padding: 0 $spacing-4;

	@media (max-width: $breakpoint-md) {
		bottom: $spacing-3;
		gap: $spacing-1;
	}
}

.gallery-indicator {
	position: relative;
	width: 32px;
	height: 3px;
	background: rgba(255, 255, 255, 0.3);
	border: none;
	cursor: pointer;
	transition: all $transition-normal $ease-default;

	@media (max-width: $breakpoint-md) {
		width: 24px;
		height: 2px;
	}

	&:hover {
		background: rgba(255, 255, 255, 0.5);
	}

	&.active {
		background: #ffffff;
		width: 40px;

		@media (max-width: $breakpoint-md) {
			width: 32px;
		}
	}
}

// 数据统计
.about-stats {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: $spacing-4;

	@media (max-width: $breakpoint-sm) {
		grid-template-columns: 1fr;
	}
}

.stat-card {
	padding: $spacing-6;
	background: #ffffff;
	border: 1px solid var(--color-border);
}

.stat-number {
	display: block;
	font-family: $font-family-display;
	font-size: $font-size-5xl;
	font-weight: $font-weight-bold;
	color: var(--color-accent);
	line-height: 1;
	margin-bottom: $spacing-2;

	@media (max-width: $breakpoint-md) {
		font-size: $font-size-3xl;
	}
}

.stat-label {
	display: block;
	font-family: $font-family-base;
	font-size: $font-size-sm;
	font-weight: $font-weight-normal;
	color: var(--color-gray);
}

// 亮点卡片
.highlights-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: $spacing-4;

	@media (max-width: $breakpoint-lg) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: $breakpoint-sm) {
		grid-template-columns: 1fr;
	}
}

.highlight-card {
	display: flex;
	gap: $spacing-4;
	padding: $spacing-6;
	background: var(--color-background);
	border: 1px solid var(--color-border);
	transition: border-color $transition-fast $ease-default;

	&:hover {
		border-color: var(--color-accent);
	}
}

.highlight-icon {
	font-size: 28px;
	flex-shrink: 0;
	line-height: 1;
}

.highlight-info {
	h4 {
		font-family: $font-family-display;
		font-size: $font-size-base;
		font-weight: $font-weight-semibold;
		color: var(--color-primary-dark);
		margin-bottom: $spacing-1;
	}

	p {
		font-family: $font-family-base;
		font-size: $font-size-xs;
		font-weight: $font-weight-normal;
		color: var(--color-gray);
		line-height: $line-height-normal;
	}
}

// 滚动动画
.animate-on-enter {
	opacity: 0;
	transform: translateY(16px);
	transition: all 0.5s $ease-default;

	&.visible {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
