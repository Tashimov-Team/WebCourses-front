import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { User } from '../types';
import { UserCircle, Book, Clock, Award } from 'lucide-react';

// Mock user data (replace with actual user data from authentication)
const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  purchasedCourses: ['1', '2']
};

export default function Profile() {
  const purchasedCourses = courses.filter(course => 
    mockUser.purchasedCourses.includes(course.id)
  );

  const availableCourses = courses.filter(course => 
    !mockUser.purchasedCourses.includes(course.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-[#7C77D3] rounded-full text-white">
              <UserCircle className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{mockUser.name}</h1>
              <p className="text-gray-600">{mockUser.email}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: <Book className="w-6 h-6" />, label: 'Куплено курсов', value: purchasedCourses.length },
            { icon: <Clock className="w-6 h-6" />, label: 'Пройдено часов', value: '24' },
            { icon: <Award className="w-6 h-6" />, label: 'Заработанно сертификатов', value: '2' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#CFF409] rounded-full">{stat.icon}</div>
                <div>
                  <p className="text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Мои курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purchasedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-sm opacity-90">Видеоурок</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Прогресс:</span> 45%
                    </div>
                    <button className="px-4 py-2 bg-[#7C77D3] text-white rounded-full hover:bg-[#AA60BC] transition-colors">
                      Продолжить
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Available Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-6">Доступные курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-sm opacity-90">${course.price}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <button className="w-full px-4 py-2 bg-[#CFF409] text-black rounded-full hover:bg-[#7C77D3] hover:text-white transition-colors font-semibold">
                    Купить сейчас
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}