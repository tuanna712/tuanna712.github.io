import { AcademicData } from '../types';
import { personalInfo } from './personalInfo';
import { publications } from './publications';
import { news } from './news';
import { blogs } from './blogs';
import { cv } from './cv';

/**
 * This file aggregates all the data from the other files in this directory
 * and exports it as a single `academicData` object.
 * This makes it easy to import all site data from a single point.
 * The old `data/content.ts` file is now obsolete and can be deleted.
 */
export const academicData: AcademicData = {
  personalInfo,
  publications,
  news,
  blog: blogs,
  cv,
};
