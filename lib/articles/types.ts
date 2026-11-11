/**
 * Article text for one language.
 * In any string, `[[product-slug]]` becomes a link to that product (shown with its name in the reader's language)
 * and `**text**` is bold.
 */
export type ArticleCopy = {
  intro: string
  /** `text` paragraphs, then an optional bulleted `list`, then optional `after` paragraphs */
  sections: { heading: string; text?: string[]; list?: string[]; after?: string[] }[]
  summary: string
}
