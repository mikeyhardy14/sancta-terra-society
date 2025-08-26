import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Our Society',
    }),
    defineField({
      name: 'foundationSection',
      title: 'Foundation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Foundation',
        }),
        defineField({
          name: 'firstParagraph',
          title: 'First Paragraph',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'secondParagraph',
          title: 'Second Paragraph',
          type: 'text',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'heritageSection',
      title: 'Heritage Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Heritage',
        }),
        defineField({
          name: 'firstParagraph',
          title: 'First Paragraph',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'secondParagraph',
          title: 'Second Paragraph',
          type: 'text',
          rows: 4,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
})
