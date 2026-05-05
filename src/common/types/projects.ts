export interface ProjectItemProps {
  title: string;
  slug: string;
  /** Folder under `public/images/bim-reference-images/` when it differs from `slug`. */
  imageFolder?: string;
  description: string;
  image: string;
  /** Filled on project detail pages: images under the asset folder (see `imageFolder` or `slug`). */
  gallery?: string[];
  link_demo?: string;
  link_github?: string;
  stacks: string;
  content?: string;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
