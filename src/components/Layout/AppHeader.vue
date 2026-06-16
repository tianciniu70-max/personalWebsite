<template>
	<header
		class="app-header"
		:class="{ 'app-header--scrolled': isScrolled }"
	>
		<nav class="header-inner">
			<!-- Logo -->
			<a
				href="#/"
				class="logo"
			>
				<img
					src="@/assets/frontend-logo.png"
					alt="T.C."
					class="logo-img"
				/>
			</a>

			<!-- 桌面端导航 -->
			<div class="nav-links">
				<a
					v-for="item in navItems"
					:key="item.key"
					:href="`#/#${item.key}`"
					class="nav-link"
					:class="{ 'nav-link--active': activeSection === item.key }"
				>
					{{ item.label }}
				</a>
			</div>

			<!-- 右侧操作区 -->
			<div class="header-actions">
				<button
					class="lang-toggle"
					@click="toggleLanguage"
				>
					{{ localeLabel }}
				</button>
				<a
					href="#/#contact"
					class="cta-btn"
				>
					{{ t('hero.cta.secondary') }}
				</a>

				<!-- 移动端菜单按钮 -->
				<button
					class="mobile-btn"
					@click="toggleMobileMenu"
					aria-label="Toggle menu"
				>
					<span
						class="mobile-hamburger"
						:class="{ 'is-active': isMobileMenuOpen }"
					>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			</div>
		</nav>

		<!-- 移动端全屏菜单 -->
		<transition name="mobile-slide">
			<div
				v-if="isMobileMenuOpen"
				class="mobile-menu"
			>
				<a
					v-for="item in navItems"
					:key="item.key"
					:href="`#/#${item.key}`"
					class="mobile-link"
					@click="closeMobileMenu"
				>
					{{ item.label }}
				</a>
				<button
					class="mobile-lang-btn"
					@click="toggleLanguage"
				>
					{{ localeLabel }}
				</button>
			</div>
		</transition>
	</header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('')

const locales = ['zh', 'en'] as const

const localeLabel = computed(() => {
	switch (locale.value) {
		case 'zh':
			return '中文'
		case 'en':
			return 'EN'
		default:
			return 'EN'
	}
})

const navItems = computed(() => [
	{ key: 'about', label: t('nav.about') },
	{ key: 'experience', label: t('nav.experience') || 'Experience' },
	{ key: 'skills', label: t('nav.skills') },
	{ key: 'projects', label: t('nav.projects') }
])

const toggleLanguage = () => {
	const currentIndex = locales.indexOf(
		locale.value as (typeof locales)[number]
	)
	const nextIndex = (currentIndex + 1) % locales.length
	locale.value = locales[nextIndex]
	document.documentElement.lang = locale.value
	closeMobileMenu()
}

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
	document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
	document.body.style.overflow = ''
}

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.app-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: var(--header-height);
	z-index: 9999;
	background: #ffffff;
	border-bottom: 1px solid var(--color-border);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	transition: box-shadow $transition-fast $ease-default;

	&--scrolled {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
	}
}

.header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	max-width: var(--container-max-width);
	margin: 0 auto;
	padding: 0 $spacing-8;
}

// Logo
.logo {
	text-decoration: none;
}

.logo-img {
	height: 60px;
	width: auto;
	object-fit: contain;
}

// 桌面导航
.nav-links {
	display: flex;
	align-items: center;
	gap: $spacing-8;

	@media (max-width: $breakpoint-lg) {
		display: none;
	}
}

.nav-link {
	font-family: $font-family-base;
	font-size: $font-size-sm;
	font-weight: $font-weight-medium;
	color: var(--color-gray);
	text-decoration: none;
	transition: color $transition-fast $ease-default;

	&:hover,
	&--active {
		color: var(--color-primary-dark);
	}
}

// 右侧操作区
.header-actions {
	display: flex;
	align-items: center;
	gap: $spacing-4;
}

.lang-toggle {
	font-family: $font-family-base;
	font-size: $font-size-sm;
	font-weight: $font-weight-medium;
	color: var(--color-gray);
	background: none;
	border: none;
	cursor: pointer;
	padding: $spacing-2 $spacing-3;
	transition: color $transition-fast $ease-default;

	&:hover {
		color: var(--color-primary);
	}

	@media (max-width: $breakpoint-lg) {
		display: none;
	}
}

.cta-btn {
	display: inline-flex;
	align-items: center;
	padding: $spacing-2 $spacing-5;
	font-family: $font-family-base;
	font-size: $font-size-sm;
	font-weight: $font-weight-semibold;
	color: #ffffff;
	background: var(--color-primary);
	text-decoration: none;
	transition: background $transition-fast $ease-default;

	&:hover {
		background: var(--color-primary-dark);
	}

	@media (max-width: $breakpoint-lg) {
		display: none;
	}
}

// 移动端按钮
.mobile-btn {
	display: none;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	padding: 0;
	background: none;
	border: none;
	cursor: pointer;

	@media (max-width: $breakpoint-lg) {
		display: flex;
	}
}

.mobile-hamburger {
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 18px;

	span {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--color-primary);
		transition: all $transition-fast $ease-default;

		.is-active &:nth-child(1) {
			transform: rotate(45deg) translate(4px, 4px);
		}

		.is-active &:nth-child(2) {
			opacity: 0;
		}

		.is-active &:nth-child(3) {
			transform: rotate(-45deg) translate(4px, -4px);
		}
	}
}

// 移动端菜单
.mobile-menu {
	position: fixed;
	top: var(--header-height);
	left: 0;
	right: 0;
	bottom: 0;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: $spacing-6;
	z-index: calc(var(--z-index-fixed) - 1);

	@media (min-width: $breakpoint-lg) {
		display: none;
	}
}

.mobile-link {
	font-family: $font-family-display;
	font-size: $font-size-2xl;
	font-weight: $font-weight-semibold;
	color: var(--color-primary);
	text-decoration: none;
	transition: opacity $transition-fast $ease-default;

	&:hover {
		opacity: 0.7;
	}
}

.mobile-lang-btn {
	margin-top: $spacing-4;
	padding: $spacing-3 $spacing-6;
	font-family: $font-family-base;
	font-size: $font-size-base;
	font-weight: $font-weight-medium;
	color: var(--color-accent);
	background: var(--color-muted);
	border: none;
	cursor: pointer;
	transition: background $transition-fast $ease-default;

	&:hover {
		background: var(--color-border);
	}
}

// 移动端菜单过渡
.mobile-slide-enter-active,
.mobile-slide-leave-active {
	transition: transform 0.3s $ease-default;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
	transform: translateX(100%);
}
</style>
