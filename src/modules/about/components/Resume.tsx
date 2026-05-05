import Link from 'next/link';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL;

const Resume = () => {
  return (
    <div className='space-y-5'>
      {RESUME_URL ? (
        <Link
          href={RESUME_URL}
          target='_blank'
          passHref
          className='flex w-fit items-center gap-2 rounded-lg border border-neutral-400 px-4 py-2.5 text-sm text-neutral-600 transition-all duration-300 hover:gap-3 hover:border-neutral-500 hover:text-neutral-700 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 hover:dark:border-neutral-300 hover:dark:text-neutral-300'
          data-umami-event='Download Resume'
        >
          <DownloadIcon />
          <span>Download résumé</span>
        </Link>
      ) : (
        <p className='text-sm text-neutral-600 dark:text-neutral-400'>
          Add{' '}
          <code className='rounded bg-neutral-200 px-1 dark:bg-neutral-800'>
            NEXT_PUBLIC_RESUME_URL
          </code>{' '}
          in{' '}
          <code className='rounded bg-neutral-200 px-1 dark:bg-neutral-800'>
            .env
          </code>{' '}
          to link your résumé PDF or portfolio file.
        </p>
      )}
    </div>
  );
};

export default Resume;
