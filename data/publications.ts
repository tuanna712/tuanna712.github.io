
import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 1,
    title: 'Delayed mini-batch sampling for accelerated training',
    authors: ['A. T. Nguyen', 'Stephen Becker'],
    venue: 'To be submitted to the International Conference on Machine Learning (ICML 2026)',
    year: 2026,
    featured: true,
    links: [],
  },
  {
    id: 2,
    title: 'Large-scale video content retrieval using a multimodal model optimized for Vietnamese semantics',
    authors: ['A. T. Nguyen', 'N. K. Tran', 'H. P. Bui', 'T. T. Nguyen', 'T. P. Nguyen', 'D. P. Pham'],
    venue: 'Vietnam National Scientific Conference on Natural Language Processing and Artificial Intelligence (Under review)',
    year: 2025,
    featured: true,
    links: [],
  },
  {
    id: 3,
    title: 'VPI-Mlogs: A web-based machine learning solution for applications in petrophysics',
    authors: ['A. T. Nguyen'],
    venue: 'Petrovietnam J., 10:46 -- 52',
    year: 2022,
    featured: true,
    links: [
      { name: 'DOI', url: 'https://doi.org/10.47800/PVJ.2022.10-06' },
      { name: 'Project', url: 'http://pvj.vn/index.php/TCDK/article/view/891' },
    ],
  },
  {
    id: 4,
    title: 'Results of seismic surveys offshore the northern part of Bac Bo Gulf',
    authors: ['T. H. Nguyen', 'T. H. Nguyen', 'D. L. Nguyen', 'T. T. H. Hoang', 'A. T. Nguyen', 'N. M. Tran', 'H. S. Nguyen', 'Q. H. Vu'],
    venue: 'Petrovietnam J, 5:5--10',
    year: 2021,
    links: [
      { name: 'DOI', url: 'https://doi.org/10.47800/PVJ.2021.05-01' },
      { name: 'Project', url: 'https://pvj.com.vn/index.php/TCDK/article/view/616' },
    ],
  }
];
