import Image from './Image';

const TopBar = () => {
  return (
    <div className='hidden items-center justify-center gap-x-2 bg-cover bg-no-repeat p-2.5 text-sm shadow-lg backdrop-blur-2xl dark:border-b dark:border-neutral-800 dark:text-neutral-300 xl:flex'>
      <span>🏗️</span>
      <span>
        Ting Chi Chen · Architectural PM · BIM &amp; 3D · Taipei · Fully remote
      </span>
      <Image src='/images/dot_new_animated.svg' width={30} height={30} alt='' />
    </div>
  );
};

export default TopBar;
