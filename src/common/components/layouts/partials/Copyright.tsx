import { PERSON_NAME } from '@/common/constant/personal';

const Copyright = () => {
  return (
    <div className='flex items-center gap-1 px-3 py-1  text-sm text-neutral-600 dark:text-neutral-600'>
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className='animate-pulse text-red-500'>❤</span>
      <span>by</span>
      <span className='text-neutral-700 dark:text-neutral-400'>
        {PERSON_NAME}
      </span>
    </div>
  );
};

export default Copyright;
