// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://duanabi.com/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Qiraati',
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
    }),
  ],
});