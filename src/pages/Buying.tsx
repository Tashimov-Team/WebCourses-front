import React, { useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Buying() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if(!course){
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Последний шаг к обучению!</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Оставьте свои данные, и мы оперативно свяжемся с вами для завершения заказа.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C77D3] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C77D3] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  id="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7C77D3] focus:border-transparent"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#7C77D3] text-white hover:bg-[#AA60BC]'
                }`}
                type="submit"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Оплачено!
                  </>
                ) : (
                  <>
                    Оплатить
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Товары</h2>
              <div className="space-y-6">
                {[
                  { 
                    title: 'Email',
                    content: 'support@eduplatform.com'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 border-b-2 border-dotted"
                  >
                    <div className="p-3 bg-[#CFF409] rounded-full">
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{course?.title}</h3>
                      <p className="text-gray-600 mb-2">{course?.price}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="h-20 grid grid-cols-2 w-full border-y-2 border-gray-950">
                    <div><h2 className='font-bold text-lg'>Итого</h2></div>
                    <div className='flex place-content-end font-bold text-xl'>{course.price} ₸</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}