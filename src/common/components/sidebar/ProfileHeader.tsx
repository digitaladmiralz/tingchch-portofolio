import clsx from 'clsx';
import Link from 'next/link';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import {
  PERSON_HANDLE,
  PERSON_NAME,
  PROFILE_IMAGE_SRC,
} from '@/common/constant/personal';

import Image from '../elements/Image';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5 lg:px-2',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <Image
        src={PROFILE_IMAGE_SRC}
        alt={PERSON_NAME}
        width={expandMenu ? 160 : imageSize}
        height={expandMenu ? 160 : imageSize}
        rounded='rounded-full'
        className='rotate-3 dark:border-neutral-600 lg:hover:scale-105'
      />
      <>
        <div className='mt-1 flex items-center gap-2 lg:mt-4'>
          <Link href='/' passHref>
            <h2 className='flex-grow  text-lg font-medium lg:text-xl'>
              {PERSON_NAME}
            </h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
        <div className='hidden text-[15px] text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 lg:flex'>
          @{PERSON_HANDLE}
        </div>
      </>
    </div>
  );
};

export default ProfileHeader;
