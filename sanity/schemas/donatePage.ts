import { defineField, defineType } from 'sanity'

export const donatePage = defineType({
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Support Our Mission',
    }),
    defineField({
      name: 'donationOptions',
      title: 'Donation Options',
      type: 'array',
      of: [
        defineField({
          name: 'donationCard',
          title: 'Donation Card',
          type: 'object',
          fields: [
            defineField({
              name: 'textAbove',
              title: 'Text Above Card',
              type: 'text',
              rows: 2,
              description: 'Optional text to display above the card',
            }),
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'buttonUrl',
              title: 'Button URL',
              type: 'url',
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in New Tab',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'textBelow',
              title: 'Text Below Card',
              type: 'text',
              rows: 2,
              description: 'Optional text to display below the card',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'taxInformation',
      title: 'Tax Information Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Tax Information',
        }),
        defineField({
          name: 'description',
          title: 'Tax Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'taxId',
          title: 'Tax ID',
          type: 'string',
          description: 'Organization Tax ID number (optional)',
        }),
        defineField({
          name: 'bibleQuote',
          title: 'Bible Quote (Optional)',
          type: 'object',
          description: 'Optional inspirational quote to display',
          fields: [
            defineField({
              name: 'text',
              title: 'Quote Text',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'reference',
              title: 'Bible Reference',
              type: 'string',
            }),
          ],
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
