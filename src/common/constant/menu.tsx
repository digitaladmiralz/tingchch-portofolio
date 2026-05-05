import { BiRocket as ContactIcon } from 'react-icons/bi';
import { BsEnvelopeAtFill as EmailIcon } from 'react-icons/bs';
import {
  FiCoffee as ProjectIcon,
  FiPieChart as AnalyticsIcon,
  FiPocket as HomeIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';

import {
  PERSON_EMAIL,
  PERSON_TELEGRAM_URL,
  PERSON_WHATSAPP_URL,
} from '@/common/constant/personal';
import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
];

/** Kept for compatibility; all items hidden — no server/API-backed apps. */
export const MENU_APPS: MenuItemProps[] = [];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: `mailto:${PERSON_EMAIL}`,
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Telegram',
    href: PERSON_TELEGRAM_URL,
    icon: <SiTelegram size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Telegram',
    className: '!bg-sky-600 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'WhatsApp',
    href: PERSON_WHATSAPP_URL,
    icon: <SiWhatsapp size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: WhatsApp',
    className: '!bg-emerald-600 border border dark:border-neutral-700',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: '#',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
