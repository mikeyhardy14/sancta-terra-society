import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Planning', value: 'planning' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
          { title: 'On Hold', value: 'on-hold' },
        ],
      },
      initialValue: 'planning',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project prominently on the projects page',
      initialValue: false,
    }),
    defineField({
      name: 'statusHistory',
      title: 'Status History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Planning', value: 'planning' },
                  { title: 'In Progress', value: 'in-progress' },
                  { title: 'Completed', value: 'completed' },
                  { title: 'On Hold', value: 'on-hold' },
                ],
              },
            }),
            defineField({
              name: 'date',
              title: 'Date Changed',
              type: 'datetime',
            }),
            defineField({
              name: 'notes',
              title: 'Notes',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: 'status',
              subtitle: 'date',
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Status Change',
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'updates',
      title: 'Project Updates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Update Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Update Date',
              type: 'datetime',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'media',
              title: 'Photos & Videos',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  type: 'file',
                  options: {
                    accept: 'video/*',
                  },
                },
              ],
            }),
            defineField({
              name: 'content',
              title: 'Full Update Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'date',
              media: 'media.0',
            },
            prepare(selection) {
              const { title, subtitle, media } = selection;
              return {
                title: title || 'Project Update',
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
                media: media,
              };
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'startDateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'featuredImage',
    },
  },
})
