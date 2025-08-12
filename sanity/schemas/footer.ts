import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Content',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: '"Through Beauty, to Beauty\'s God."',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      rows: 3,
      initialValue: 'A Catholic lay organization dedicated to sanctifying the temporal order through building public shrines to Christ, Mary, the angels, and the saints.',
    }),
    defineField({
      name: 'sacredMissionLinks',
      title: 'Sacred Mission Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Link Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        },
      ],
      initialValue: [
        { title: 'Home', url: '/' },
        { title: 'About Our Work', url: '/about' },
        { title: 'Sacred Projects', url: '/projects' },
        { title: 'Leadership', url: '/leadership' },
      ],
    }),
    defineField({
      name: 'joinWorkLinks',
      title: 'Join Our Work Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Link Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        },
      ],
      initialValue: [
        { title: 'Contact Us', url: '/contact' },
        { title: 'Support Our Mission', url: '/donate' },
        { title: 'Content Management', url: '/studio' },
      ],
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
      rows: 2,
      initialValue: 'For inquiries about shrine projects, membership, or collaboration opportunities.',
    }),
    defineField({
      name: 'socialMediaText',
      title: 'Social Media Text',
      type: 'string',
      initialValue: 'Follow our sacred work:',
    }),
    defineField({
      name: 'blessing',
      title: 'Latin Blessing',
      type: 'string',
      initialValue: 'Ad Majorem Dei Gloriam',
    }),
    defineField({
      name: 'bibleQuote',
      title: 'Bible Quote',
      type: 'text',
      initialValue: '"And the Word became flesh and dwelt among us" - John 1:14',
    }),
  ],
  preview: {
    select: {
      title: 'tagline',
    },
  },
})
