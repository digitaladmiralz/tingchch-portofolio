import fs from 'fs';
import path from 'path';

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|svg)$/i;

/** Public URL base for BIM project assets */
export const BIM_PROJECT_IMAGE_ROOT = '/images/bim-reference-images';

/**
 * Lists image files in `public/images/bim-reference-images/<folder>/` (sorted).
 * `folder` is usually the project slug; use `imageFolder` in data when the disk folder name differs.
 */
export function getProjectGalleryImages(folder: string): string[] {
  const dir = path.join(
    process.cwd(),
    'public',
    'images',
    'bim-reference-images',
    folder,
  );

  if (!fs.existsSync(dir)) {
    return [];
  }

  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith('.'))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
    )
    .map(
      (name) =>
        `${BIM_PROJECT_IMAGE_ROOT}/${folder}/${encodeURIComponent(name)}`,
    );
}

export function getProjectAssetFolder(project: {
  slug: string;
  imageFolder?: string;
}): string {
  return project.imageFolder ?? project.slug;
}
