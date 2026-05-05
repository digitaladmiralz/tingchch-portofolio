import { ContentProps } from '../types/learn';

const LEARN_IMAGE_JS =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80';
const LEARN_IMAGE_PS =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'JavaScript Fundamental',
    slug: 'js-fundamental',
    description:
      'Introductory JavaScript notes (template content bundled with this starter).',
    image: LEARN_IMAGE_JS,
    is_new: true,
    level: 'Beginner',
    is_show: true,
  },
  {
    id: 2,
    title: 'Problem Solving',
    slug: 'problem-solving',
    description:
      'Practice problems (template content bundled with this starter).',
    image: LEARN_IMAGE_PS,
    is_new: false,
    level: 'All Levels',
    is_show: true,
  },
];
