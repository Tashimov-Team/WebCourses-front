import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { coursesApi } from '../api';
import { Course } from '../types';
import { motion } from 'framer-motion';
import { Sparkles, Book, Users, Trophy, Rocket, Star, Clock, Globe, Loader2 } from 'lucide-react';

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await coursesApi.getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return(
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
    </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&auto=format&fit=crop')] bg-cover bg-center"
          style={{
            transform: 'translateY(var(--tw-scroll-y))',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Rocket className="w-16 h-16 text-[#CFF409] mx-auto mb-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6"
          >
            Прокачайте свои навыки!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Погрузись в мир веб-разработки и научись создавать современные и функциональные сайты. Наши курсы подходят как для новичков, так и для тех, кто хочет улучшить свои навыки. С нами ты освоишь все необходимые технологии, от HTML и CSS до JavaScript и фреймворков. Присоединяйся и начни создавать свой первый проект уже сегодня!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a href='#courses' className="px-8 py-3 bg-[#7C77D3] text-white rounded-full hover:bg-[#AA60BC] transition-colors cursor-pointer">
              Начать обучение!
            </a>
            <a href='#why' className="px-8 py-3 bg-transparent border-2 border-[#CFF409] text-[#CFF409] rounded-full hover:bg-[#CFF409] hover:text-black transition-colors cursor-pointer">
              Узнать больше
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-[#7C77D3]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, stat: '1000+', label: 'Студентов' },
              { icon: <Star className="w-8 h-8" />, stat: '4.9', label: 'Рейтинг' },
              { icon: <Clock className="w-8 h-8" />, stat: '100+', label: 'Часы контента' },
              { icon: <Globe className="w-8 h-8" />, stat: '50+', label: 'Регоны обучения' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{item.stat}</div>
                <div className="text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id='why'>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Почему мы?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Мы учим тому, что востребовано на рынке. Все материалы обновляются в соответствии с последними трендами в веб-разработке, чтобы ты всегда был в курсе самых современных технологий.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Book className="w-8 h-8" />, 
                title: 'Экспертные курсы',
                description: 'Обучайся у профессионалов отрасли с многолетним опытом. Наши преподаватели — эксперты, которые делятся своими знаниями и реальным опытом работы.'
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: 'Сообщество поддержки',
                description: 'Присоединяйся к сообществу разработчиков и обучайся в компании единомышленников. Обменивайся опытом, задавай вопросы и растем вместе.'
              },
              { 
                icon: <Trophy className="w-8 h-8" />, 
                title: 'Сертификаты',
                description: 'Получи официальные сертификаты, которые признаются в индустрии. Заверши курс и продемонстрируй свои навыки потенциальным работодателям.'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="inline-block p-3 bg-[#CFF409] rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20" id='courses'>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-[#AA60BC] mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Выбирай из нашего набора профессиональных курсов, которые помогут тебе пройти путь от новичка до эксперта. <br />
            Каждый курс разработан с учетом реальных приложений и задач, чтобы ты мог применить свои знания на практике.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7C77D3]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Готовы?</h2>
            <p className="text-xl mb-8 opacity-90">
             Присоединяйся к тысячам студентов, которые уже учат с нами!
            </p>
            <button className="px-8 py-3 bg-[#CFF409] text-black rounded-full hover:bg-white transition-colors font-semibold">
              Начни сегодня
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}