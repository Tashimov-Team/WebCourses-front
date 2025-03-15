import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coursesApi } from '../api';
import { Clock, Users, Star, BookOpen, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

export default function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await coursesApi.getCourse(id!);
        setCourse(response.data);
      } catch (err) {
        setError('Ошибка загрузки курса');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{error || 'Курс не найден'}</h1>
          <Link to="/" className="text-[#7C77D3] hover:text-[#AA60BC]">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const featuresList = course.features?.split(', ') || [];
  const totalLessons = course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section id='top'></section>
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
                { icon: <BookOpen className="w-5 h-5" />, text: `Кол-во уроков: ${totalLessons}` }
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
            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Чему вы научитесь</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuresList.map((feature, index) => (
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
                {course.curriculum?.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="flex items-center justify-between bg-gray-50 p-4">
                      <div>
                        <h3 className="font-semibold">{section.title || `Раздел ${index + 1}`}</h3>
                        <p className="text-sm text-gray-600">{section.duration}</p>
                      </div>
                      <span className="text-sm text-gray-600">
                        Кол-во уроков: {section.lessons.length}
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