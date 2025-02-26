import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Front-End Разработка',
    description: 'Освойте современную веб-разработку с React, TypeScript и другими технологиями. Научитесь создавать красивые, отзывчивые пользовательские интерфейсы.',
    price: 29900,
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop',
    category: 'frontend',
    features: [
      'React и TypeScript',
      'Современный CSS и Tailwind',
      'Управление состоянием',
      'Оптимизация производительности',
      'Адаптивный дизайн',
      'Веб-доступность',
      'Стратегии тестирования',
      'CI/CD интеграция'
    ],
    videos: [
      {
        id: '1',
        title: 'Введение в курс',
        duration: '15:30',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'Основы React',
        duration: '25:45',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '3',
        title: 'Работа с TypeScript',
        duration: '20:15',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: '2',
    title: 'Back-End Разработка',
    description: 'Создавайте масштабируемые серверные приложения с PHP и базами данных. Изучите архитектуру корпоративного уровня и стратегии развертывания.',
    price: 34900,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop',
    category: 'backend',
    features: [
      'PHP и Laravel',
      'Проектирование баз данных',
      'Разработка API',
      'Лучшие практики безопасности',
      'Микросервисы',
      'Облачное развертывание',
      'Оптимизация производительности',
      'Системная архитектура'
    ],
    videos: [
      {
        id: '1',
        title: 'Введение в Back-End',
        duration: '18:20',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'PHP основы',
        duration: '22:15',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '3',
        title: 'Работа с базами данных',
        duration: '28:40',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: '3',
    title: 'Full-Stack Разработка',
    description: 'Станьте универсальным разработчиком, освоив как front-end, так и back-end технологии. Научитесь создавать полноценные приложения от начала до конца.',
    price: 49900,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop',
    category: 'frontend',
    features: [
      'Полный цикл веб-разработки',
      'Интеграция Front-End и Back-End',
      'Управление базами данных',
      'Аутентификация и авторизация',
      'Функции реального времени',
      'Интеграция платежей',
      'Стратегии развертывания',
      'Архитектура проекта'
    ],
    videos: [
      {
        id: '1',
        title: 'Введение в Full-Stack',
        duration: '20:10',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '2',
        title: 'Архитектура приложений',
        duration: '35:25',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '3',
        title: 'Интеграция сервисов',
        duration: '28:15',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
];