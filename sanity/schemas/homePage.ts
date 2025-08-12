import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'SANCTA TERRA SOCIETY',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: '"Through Beauty, to Beauty\'s God."',
    }),
    defineField({
      name: 'leftColumnTitle',
      title: 'Left Column Title',
      type: 'string',
      initialValue: 'CONSILIO DOMINI SANCTAE TERRAE',
    }),
    defineField({
      name: 'leftColumnIntro',
      title: 'Left Column Introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'leftColumnSecondParagraph',
      title: 'Left Column Second Paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaOpera',
      title: 'Prima Opera',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'PRIMA OPERA',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'secundaOpera',
      title: 'Secunda Opera',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'SECUNDA OPERA',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'rightColumnTitle',
      title: 'Right Column Title',
      type: 'string',
      initialValue: 'QUATTUOR COLUMNAE MISSIONIS',
    }),
    defineField({
      name: 'rightColumnIntro',
      title: 'Right Column Introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'tertiaOpera',
      title: 'Tertia Opera',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'TERTIA OPERA',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'quartaOpera',
      title: 'Quarta Opera',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'QUARTA OPERA',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'vocationSection',
      title: 'Vocation Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'VOCATIO NOSTRA',
        }),
        defineField({
          name: 'quote',
          title: 'Bible Quote',
          type: 'text',
        }),
        defineField({
          name: 'quoteReference',
          title: 'Quote Reference',
          type: 'string',
          initialValue: 'John 1:14',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'joinSection',
      title: 'Join Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'JOIN OUR SACRED MISSION',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
        }),
        defineField({
          name: 'learnMoreButtonText',
          title: 'Learn More Button Text',
          type: 'string',
          initialValue: 'Learn More About Our Mission',
        }),
        defineField({
          name: 'contactButtonText',
          title: 'Contact Button Text',
          type: 'string',
          initialValue: 'Contact Us to Get Involved',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
