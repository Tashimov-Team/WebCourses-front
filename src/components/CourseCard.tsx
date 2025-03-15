import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../types';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <Link to={`/course/${course.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="relative overflow-hidden">
          <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#7C77D3] transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="space-y-2 mb-4">
          {course.features
            .split(',') // Преобразуем строку в массив
            .slice(0, 4) // Берем первые 4 элемента
            .map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle className="w-4 h-4 text-[#AA60BC]" />
                <span>{feature.trim()}</span> {/* Убираем лишние пробелы */}
              </motion.div>
            ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <motion.span 
            className="text-[#AA60BC] font-bold text-xl"
            whileHover={{ scale: 1.1 }}
          >
            {course.price} ₸
          </motion.span>
          <Link to={`/course/${course.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-[#7C77D3] font-semibold hover:underline">
            Подробнее <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}