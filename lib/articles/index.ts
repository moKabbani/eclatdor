import type { Locale } from '../i18n'
import type { ArticleSlug } from '../products'
import acneTreatment from './acne-treatment'
import howToUse from './how-to-use'
import melasmaTreatment from './melasma-treatment'
import morningRoutine from './morning-routine'
import nightRoutine from './night-routine'
import sensitiveSkin from './sensitive-skin'
import type { ArticleCopy } from './types'

export type { ArticleCopy } from './types'

const articleCopy: Record<ArticleSlug, Record<Locale, ArticleCopy>> = {
  'morning-routine': morningRoutine,
  'night-routine': nightRoutine,
  'acne-treatment': acneTreatment,
  'melasma-treatment': melasmaTreatment,
  'sensitive-skin': sensitiveSkin,
  'how-to-use': howToUse,
}

export function getArticleCopy(slug: ArticleSlug, lang: Locale): ArticleCopy {
  return articleCopy[slug][lang]
}
