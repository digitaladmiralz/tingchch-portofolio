import Image from '@/common/components/elements/Image';
import MDXComponent from '@/common/components/elements/MDXComponent';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

import ProjectLink from './ProjectLink';

const ProjectDetail = ({
  title,
  image,
  gallery,
  stacks,
  link_demo,
  link_github,
  content,
}: ProjectItemProps) => {
  const stacksArray = JSON.parse(stacks);
  const galleryImages = gallery && gallery.length > 0 ? gallery : [image];

  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='mb-1 text-[15px] text-neutral-700 dark:text-neutral-300'>
            Tools &amp; skills:
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>
                  {STACKS[stack] ?? (
                    <span className='rounded-full border border-neutral-400 px-2 py-0.5 text-xs dark:border-neutral-600'>
                      {stack}
                    </span>
                  )}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_github={link_github}
        />
      </div>

      <div className='space-y-3'>
        <h2 className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>
          {gallery && gallery.length > 0 ? 'Project imagery' : 'Preview'}
        </h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {galleryImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className='relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800'
            >
              <Image
                src={src}
                alt={`${title} – image ${index + 1}`}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 hover:scale-[1.02]'
              />
            </div>
          ))}
        </div>
        {(!gallery || gallery.length === 0) && (
          <p className='text-sm text-neutral-500 dark:text-neutral-500'>
            For multiple thumbnails, add files to{' '}
            <code className='rounded bg-neutral-200 px-1 text-xs dark:bg-neutral-800'>
              public/images/bim-reference-images/[slug]/
            </code>{' '}
            using the same folder name as this project (e.g.{' '}
            <code className='rounded bg-neutral-200 px-1 text-xs dark:bg-neutral-800'>
              rendering
            </code>
            ).
          </p>
        )}
      </div>

      {content && (
        <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
