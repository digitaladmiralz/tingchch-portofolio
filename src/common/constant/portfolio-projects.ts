import { ProjectItemProps } from '@/common/types/projects';

/**
 * Static BIM portfolio work.
 * - Listing thumbnail / fallback: first file in the asset folder, else `image`.
 * - Asset folder: `public/images/bim-reference-images/<name>/`
 *   Use `imageFolder` when the folder name on disk ≠ URL `slug`.
 */
type RawProject = Pick<
  ProjectItemProps,
  | 'title'
  | 'slug'
  | 'description'
  | 'image'
  | 'is_show'
  | 'is_featured'
  | 'content'
> & {
  stackList: string[];
  link_demo?: string;
  link_github?: string;
  imageFolder?: string;
};

const rawProjects: RawProject[] = [
  {
    title: 'Rendering',
    slug: 'rendering',
    description:
      'This section of the portfolio showcases renderings across design and visualization workflows.',
    image: '/images/placeholder.png',
    stackList: [
      'Architectural Design',
      'Architectural Rendering',
      'Autodesk Revit',
      'Floor Plan Design',
      'Photorealistic Rendering',
      'Rhinoceros 3D',
      'Drafting',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
    is_show: true,
    is_featured: true,
  },
  {
    title: 'Timber project',
    slug: 'timber-project',
    description:
      '3D modeling of a multi-purpose shed, customized to the client’s requirements. Construction is based on tenon and mortise joinery.',
    image: '/images/placeholder.png',
    stackList: [
      'Adobe Illustrator',
      'SketchUp',
      'Drafting',
      'Floor Plan Design',
      'Architectural Rendering',
      'Architectural Design',
      'Adobe Photoshop',
    ],
    is_show: true,
    is_featured: true,
  },
  {
    title: 'Museum exhibition',
    slug: 'museum-exhibition',
    description:
      '3D models used to plan partition walls that are crucial for showcasing the client’s exhibits.',
    image: '/images/placeholder.png',
    stackList: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Architectural Rendering',
      'Autodesk Revit',
      'Floor Plan Design',
      'Architectural Design',
      'Interior Design',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Stairs',
    slug: 'stairs',
    description:
      'Stair assemblies built using customized Revit stairs tailored to the design.',
    image: '/images/placeholder.png',
    stackList: [
      'Adobe Photoshop',
      'Autodesk Revit',
      '3D Design',
      '3D Modeling',
      '3D Mockup',
      'Interior Design',
      'Architectural Design',
      'Architectural Rendering',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Short presentations',
    slug: 'short-presentations',
    imageFolder: 'short-persentations',
    description:
      'Presentation sheets produced from Revit, refined in Adobe Illustrator and Photoshop.',
    image: '/images/placeholder.png',
    stackList: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Architectural Design',
      'Architectural Rendering',
      'Autodesk Revit',
      'Presentation Design',
      'Presentations',
      'Floor Plan Design',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Site model & 3D map',
    slug: 'site-model-3d-map',
    imageFolder: 'site-model-or-3D-map',
    description:
      'Site modeled with BIM / Revit for use as a 3D map supporting emergency management services.',
    image: '/images/placeholder.png',
    stackList: [
      'Building Information Modeling',
      'Autodesk Revit',
      'Adobe Photoshop',
      'Adobe InDesign',
      'Architectural Design',
      'Architectural Rendering',
      'Map Illustration',
      'Site Planning',
      'Sitebuilder',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Technical school & public library',
    slug: 'technical-school-public-library',
    imageFolder: 'the-skills-technical-school-and-public-library',
    description:
      'Life skills academy supporting the local community and young adults with an alternative career path.',
    image: '/images/placeholder.png',
    stackList: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Floor Plan Design',
      'Autodesk AutoCAD',
      'Drafting',
      'Architectural Design',
      'Rhinoceros 3D',
      'Technical Illustration',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Diagrams',
    slug: 'diagrams',
    description:
      'Elevation diagrams derived from floor plans for clear design communication.',
    image: '/images/placeholder.png',
    stackList: [
      'Rhinoceros 3D',
      'Autodesk 3ds Max',
      'Adobe Illustrator',
      'Architectural Rendering',
      'Floor Plan Design',
      'Adobe Photoshop',
      'Autodesk Revit',
      'Autodesk AutoCAD',
      'Drafting',
      'Architectural Design',
      'Autodesk Maya',
      'Adobe InDesign',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'Rhinoceros 3D',
    slug: 'rhinoceros-3d',
    imageFolder: 'rhinoceros-3D',
    description:
      'Samples from Rhinoceros 3D while exploring different design concepts.',
    image: '/images/placeholder.png',
    stackList: [
      'Rhinoceros 3D',
      '3D Animation',
      'Architectural Rendering',
      'Adobe Illustrator',
      'Architectural Design',
      'Autodesk Revit',
      'Adobe Photoshop',
      'Autodesk 3ds Max',
      'Autodesk Maya',
      'Adobe InDesign',
    ],
    is_show: true,
    is_featured: false,
  },
  {
    title: 'CAD, Revit & AutoCAD',
    slug: 'cad-revit-autocad',
    description:
      'Drafted floor plans and site plans produced with digital CAD / BIM tools.',
    image: '/images/placeholder.png',
    stackList: [
      'CAD',
      'Floor Plan Design',
      'Autodesk Revit',
      'Architectural Design',
      'Drafting',
      'Autodesk AutoCAD',
      'Site Planning',
      'Blueprint Style',
      'Archicad',
    ],
    is_show: true,
    is_featured: false,
  },
];

function toProps(r: RawProject, index: number): ProjectItemProps {
  const { stackList, link_demo, link_github, imageFolder, ...rest } = r;
  return {
    ...rest,
    ...(link_demo ? { link_demo } : {}),
    ...(link_github ? { link_github } : {}),
    ...(imageFolder ? { imageFolder } : {}),
    stacks: JSON.stringify(stackList),
    updated_at: new Date(2026, 4, index + 1),
  };
}

export function getPortfolioProjects(): ProjectItemProps[] {
  return rawProjects.map((r, i) => toProps(r, i));
}

export function getPortfolioProjectBySlug(
  slug: string,
): ProjectItemProps | null {
  const idx = rawProjects.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  return toProps(rawProjects[idx], idx);
}

export function getPortfolioProjectSlugs(): string[] {
  return rawProjects.map((p) => p.slug);
}
