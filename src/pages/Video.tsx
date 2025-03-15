import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coursesApi } from '../api';
import { Clock, Users, Star, BookOpen, CheckCircle, ArrowLeft, Play, Video, Loader2 } from 'lucide-react';

export default function VideoPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    coursesApi.getCourse(id)
      .then(response => {
        setCourse(response.data);
        if (response.data.videos.length > 0) {
          setLoading(false)
          setSelectedVideo(response.data.videos[0]);
        }
      })
      .catch(error => console.error('Ошибка загрузки курса:', error));
  }, [id]);

  if (loading) {
    return(
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section id='top'></section>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3">
            <motion.div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Видеоуроки</h2>
              <div className="w-full h-1/4 bg-black rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                {selectedVideo && (
                  <video
                    src={selectedVideo.url}
                    className="w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                  />
                )}
              </div>
              <div className="space-y-4">
                {course.videos.map((video) => (
                  <motion.button
                    key={video.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      selectedVideo?.id === video.id ? 'bg-[#7C77D3] text-white' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold">{video.title}</h3>
                      <p className="text-sm opacity-80">{video.duration}</p>
                    </div>
                    <Video className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
