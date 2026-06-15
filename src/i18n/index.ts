import { createI18n } from 'vue-i18n'
import type { LocaleMessage } from '@/locales/types'
import zh from '../locales/zh'
import en from '../locales/en'

const i18n = createI18n<[LocaleMessage], 'zh' | 'en'>({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh: zh as LocaleMessage,
    en: en as LocaleMessage
  }
})

export default i18n
