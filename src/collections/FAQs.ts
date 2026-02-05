
import { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs_v2',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
  ],
}
