// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://qiraatith.com/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Qiraati',
      description: 'เว็บไซต์ทบทวนบทเรียนกีรออาตี ฝึกอ่านอย่างถูกต้อง ตามหลักสูตรกีรออาตี เพื่อให้ผู้เรียนสามารถอ่านอัลกุรอานได้อย่างถูกต้อง',
      sidebar: [
        {
          label: 'หนังสือเรียนกีรอาตี',
          items: [
            {
              label: 'กีรออาตี เล่ม 1',
              items: [{ autogenerate: { directory: 'qiraati-1' } }],
            },
            {
              label: 'กีรออาตี เล่ม 2',
              items: [{ autogenerate: { directory: 'qiraati-2' } }],
            },
            {
              label: 'กีรออาตี เล่ม 3',
              items: [{ autogenerate: { directory: 'qiraati-3' } }],
            },
            {
              label: 'กีรออาตี เล่ม 4',
              items: [{ autogenerate: { directory: 'qiraati-4' } }],
            },
            {
              label: 'กีรออาตี เล่ม 5',
              items: [{ autogenerate: { directory: 'qiraati-5' } }],
            },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content: 'ทบทวนบทเรียนกีรออาตีออนไลน์ แบบฝึกอ่านอัลกุรอาน ตามหลักสูตรกีรออาตี',
          },
        },        
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://qiraatith.com/QiraatithOG.jpg',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1200',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '630',
          },
        },
      ],
      logo: {
        src: './src/assets/qiraatith.png',
        alt: 'Qiraati - กีรออาตี',
        replacesTitle: false,
      }
    }),
  ],
});