import clsx from 'clsx';
import Link from 'next/link';

import { SOCIAL_MEDIA } from '@/common/constant/menu';
import {
  PERSON_EMAIL,
  PERSON_HANDLE,
  PERSON_WHATSAPP_E164,
} from '@/common/constant/personal';

const DETAIL_BY_TITLE: Record<string, string> = {
  Email: PERSON_EMAIL,
  Telegram: `@${PERSON_HANDLE}`,
  WhatsApp: `+${PERSON_WHATSAPP_E164}`,
};

const SocialMediaList = () => {
  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Contact</h3>
      <div className='grid gap-3 md:grid-cols-3'>
        {SOCIAL_MEDIA?.map((item, index: number) => {
          const detail = DETAIL_BY_TITLE[item.title] ?? item.href;

          return (
            <Link
              key={index}
              href={item.href}
              target='_blank'
              className={clsx(
                'flex w-full items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-all duration-300 hover:scale-[1.01] hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700',
                item?.className,
              )}
              data-umami-event={item?.eventName}
            >
              <span className='flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100'>
                <span className='opacity-90'>{item.icon}</span>
                <span>{item.title}</span>
              </span>
              <span className='truncate text-sm text-neutral-700 dark:text-neutral-300'>
                {detail}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaList;
