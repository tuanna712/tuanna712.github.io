import { BlogPost } from '../types';

/**
 * This file contains the metadata for blog posts.
 * The actual content is in markdown files in the `data/blog/` directory.
 * The slug should match the filename (without .md).
 */
export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: 'seismic-stratigraphy-analysis-2021',
    title: 'Seismic Stratigraphy Analysis for unstructured trap determining at Block 09-1,Cuu Long Basin (2021)',
    date: '2025-08-01',
    summary: 'With the advancement of machine learning, new approaches like automatic and semi-automatic seismic horizon interpretation enable detailed mapping of subsurfaces, even capturing individual seismic events. This project covers a 973 km² 3D4C seismic volume and over 500 wells.',
    featured: true,
  },
  // {
  //   id: 2,
  //   slug: 'reflections-on-acl-2024',
  //   title: 'Reflections on ACL 2024',
  //   date: '2024-07-20',
  //   summary: 'Key takeaways and personal highlights from the Annual Meeting of the Association for Computational Linguistics in Bangkok.',
  //   featured: true,
  // }
];