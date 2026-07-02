import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionDataFA = {
  config: {
    title: 'My favorites', // TODO: Replace with 'موارد مورد علاقهٔ من'
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: false,
  },
  books: {
    title: 'Books I read', // TODO: Replace with 'کتاب‌هایی که خوانده‌ام'
    data: [
      {
        image: import('@/assets/favorites/books/book-1.jpeg'),
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andy Hunt, Dave Thomas',
        url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      },
      {
        image: import('@/assets/favorites/books/book-2.jpg'),
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
      },
      {
        image: import('@/assets/favorites/books/book-3.jpeg'),
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },
  people: {
    title: 'People I learn from', // TODO: Replace with 'افرادی که از آن‌ها یاد می‌گیرم'
    data: [
      {
        image: import('@/assets/favorites/people/person-1.jpg'),
        name: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/',
      },
      {
        image: import('@/assets/favorites/people/person-2.jpeg'),
        name: 'Kent Beck',
        url: 'https://www.kentbeck.com/',
      },
      {
        image: import('@/assets/favorites/people/person-3.jpeg'),
        name: 'Eric Evans',
        url: 'https://www.domainlanguage.com/',
      },
      {
        image: import('@/assets/favorites/people/person-4.jpeg'),
        name: 'Martin Fowler',
        url: 'https://martinfowler.com/',
      },
      {
        image: import('@/assets/favorites/people/person-5.jpg'),
        name: 'Robert C. Martin',
        url: 'http://cleancoder.com/',
      },
      {
        image: import('@/assets/favorites/people/person-6.jpeg'),
        name: 'Adam Dymitruk',
        url: 'https://eventmodeling.org/',
      },
    ],
  },
  videos: {
    title: 'Videos I watched', // TODO: Replace with 'ویدیوهایی که دیده‌ام'
    data: [
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow', // TODO: Replace with 'رسانه‌هایی که دنبال می‌کنم'
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel', // TODO: Replace with 'کانال یوتیوب'
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-2.jpeg'),
        title: 'Healthy Software Developer',
        type: 'YouTube channel', // TODO: Replace with 'کانال یوتیوب'
        url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
      },
      {
        image: import('@/assets/favorites/media/media-3.png'),
        title: 'Bytes',
        type: 'Newsletter', // TODO: Replace with 'خبرنامه'
        url: 'https://bytes.dev/',
      },
      {
        image: import('@/assets/favorites/media/media-4.png'),
        title: 'TypeScript Weekly',
        type: 'Newsletter', // TODO: Replace with 'خبرنامه'
        url: 'https://typescript-weekly.com/',
      },
      {
        image: import('@/assets/favorites/media/media-5.jpeg'),
        title: 'Front End Happy Hour',
        type: 'Podcast', // TODO: Replace with 'پادکست'
        url: 'https://www.frontendhappyhour.com/',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog', // TODO: Replace with 'وبلاگ'
        url: 'https://cult.honeypot.io/',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionDataFA;
