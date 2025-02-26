import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { Clock, Users, Star, BookOpen, CheckCircle, ArrowLeft, Play, Video } from 'lucide-react';

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [selectedVideo, setSelectedVideo] = useState(course?.videos[0]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Курс не найден</h1>
          <Link to="/" className="text-[#7C77D3] hover:text-[#AA60BC]">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const curriculum = [
    {
      title: 'Начало работы',
      duration: '2 часа',
      lessons: [
        'Введение в курс',
        'Настройка окружения разработки',
        'Базовые концепции и основы'
      ]
    },
    {
      title: 'Основные концепции',
      duration: '4 часа',
      lessons: [
        'Понимание основ',
        'Продвинутые техники',
        'Лучшие практики и паттерны'
      ]
    },
    {
      title: 'Продвинутые темы',
      duration: '6 часов',
      lessons: [
        'Профессиональный рабочий процесс',
        'Оптимизация производительности',
        'Реальные приложения'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад к курсам
            </Link>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-white/90 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: <Clock className="w-5 h-5" />, text: '12 часов' },
                { icon: <Users className="w-5 h-5" />, text: '2,500+ студентов' },
                { icon: <Star className="w-5 h-5" />, text: '4.9 рейтинг' },
                { icon: <BookOpen className="w-5 h-5" />, text: '24 урока' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  {stat.icon}
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${course.id}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#CFF409] text-black rounded-full hover:bg-white transition-colors font-semibold"
              >
                Купить - {course.price} ₸
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Видеоуроки</h2>
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                {selectedVideo && (
                  <iframe
                    src={selectedVideo.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="space-y-4">
                {course.videos.map((video) => (
                  <motion.button
                    key={video.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      selectedVideo?.id === video.id
                        ? 'bg-[#7C77D3] text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="p-2 bg-white/10 rounded-full">
                      <Play className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold">{video.title}</h3>
                      <p className="text-sm opacity-80">{video.duration}</p>
                    </div>
                    <Video className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Чему вы научитесь</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#7C77D3] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Программа курса</h2>
              <div className="space-y-6">
                {curriculum.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="flex items-center justify-between bg-gray-50 p-4">
                      <div>
                        <h3 className="font-semibold">{section.title}</h3>
                        <p className="text-sm text-gray-600">{section.duration}</p>
                      </div>
                      <span className="text-sm text-gray-600">
                        {section.lessons.length} уроков
                      </span>
                    </div>
                    <div className="p-4 space-y-3">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div 
                          key={lessonIndex}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <BookOpen className="w-4 h-4 text-[#AA60BC]" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Course Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Особенности курса</h3>
              <div className="space-y-4">
                {[
                  { label: 'Уровень', value: 'Все уровни' },
                  { label: 'Язык', value: 'Русский' },
                  { label: 'Сертификат', value: 'Да' },
                  { label: 'Пожизненный доступ', value: 'Да' }
                ].map((feature, index) => (
                  <div key={index} className="flex justify-between text-gray-700">
                    <span>{feature.label}</span>
                    <span className="font-semibold">{feature.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Требования</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#7C77D3]" />
                  Базовые знания компьютера
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#7C77D3]" />
                  Интернет-соединение
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#7C77D3]" />
                  Желание учиться
                </li>
              </ul>
            </div>

            {/* Share */}
            <div className="bg-[#7C77D3] rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Поделиться курсом</h3>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'VK'].map((platform, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}