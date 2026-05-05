import { PERSON_NAME_SHORT, PERSON_TITLE } from '@/common/constant/personal';

const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m {PERSON_NAME_SHORT}</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Taipei, Taiwan <span className='ml-1'>🇹🇼</span>
            </li>
            <li>Fully remote</li>
            <li>Architecture · BIM · 3D</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        {PERSON_TITLE}. I lead architectural and BIM delivery from early design
        through CA—coordinating teams, models, and documentation for clients
        remotely, with deep experience on U.S. building types and workflows.
      </p>
    </section>
  );
};

export default Introduction;
