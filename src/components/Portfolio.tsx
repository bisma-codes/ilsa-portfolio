import React, { useState } from 'react';
import { ExternalLink, Heart, Eye, MessageCircle } from 'lucide-react';


const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);



  const portfolioItems = [
    {

      id: 1,
      title: 'Why myco?',
      categories: ['video', 'social-media'],
      video: '/videos/cc5.webm', // ✅ Local or hosted video path
      likes: 2543,
      views: 45231,
      comments: 187,
      height: 'h-80'


    },
    {
      id: 2,
      title: 'Story of the startup',
      categories: ['video', 'social-media'],
      video: '/videos/vm1.webm',
      likes: 1876,
      views: 32108,
      comments: 143,
      height: 'h-64'
    },
    {
      id: 3,
      title: 'Sufi PR',
      categories: ['collaboration', 'social-media'],
      video: '/videos/co1.webm',
      likes: 3421,
      views: 67543,
      comments: 298,
      height: 'h-72'
    },
    {
      id: 4,
      title: 'Life of a Social Media Intern',
      categories: ['content', 'social-media'],
      video: '/videos/cc2.webm',
      likes: 4523,
      views: 89432,
      comments: 456,
      height: 'h-96'
    },
    {
      id: 5,
      title: 'Wimbledon Promotion',
      categories: ['social-media', 'collaboration'],
      video: '/videos/vm2.webm',
      likes: 2134,
      views: 43256,
      comments: 189,
      height: 'h-80'
    },
    {
      id: 6,
      title: 'will we make it happen?',
      categories: ['content', 'social-media'],
      video: '/videos/cc4.webm',
      likes: 3876,
      views: 76234,
      comments: 342,
      height: 'h-64'
    },
    {
      id: 7,
      title: 'her type? ',
      categories: ['social-media', 'video'],
      video: '/videos/vm3.webm',
      likes: 1654,
      views: 28976,
      comments: 123,
      height: 'h-72'
    },
    
    {
      id: 8,
      title: 'English Premiere League',
      categories: ['script', 'collaboration'],
      video: '/videos/sc1.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-88'
    },
    {
      id: 9,
      title: 'PSL',
      categories: ['content', 'collaboration'],
      video: '/videos/cc6.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-78'
    },
    {
      id: 10,
      title: 'Dont be that guy',
      categories: ['content', 'video'],
      video: '/videos/vm5.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-67'
    },
    {
      id: 11,
      title: 'Daani',
      categories: ['collaboration', 'script'],
      video: '/videos/sc2.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-74'
    },
    {
      id: 12,
      title: 'Hunger Hub',
      categories: ['collaboration', 'video'],
      video: '/videos/co2.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-79'
    },
    {
      id: 13,
      title: 'Win 50 Lakhs',
      categories: ['script', 'video'],
      video: '/videos/sc3.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-65'
    },
    {
      id: 14,
      title: 'International Squash',
      categories: ['script', 'collaboration'],
      video: '/videos/co6.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-68'
    },
    {
      id: 15,
      title: 'Broadway',
      categories: ['video', 'collaboration'],
      video: '/videos/co4.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-59'
    },
    {
      id: 16,
      title: 'Khausay Kitchen',
      categories: ['video', 'collaboration'],
      video: '/videos/co3.webm',
      likes: 2987,
      views: 54321,
      comments: 234,
      height: 'h-40'
    },
    
    
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'content', label: 'Content Creation' },
    { id: 'video', label: 'Video Marketing' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'script', label: 'Script Writing' },
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.categories?.includes(filter));


  return (
    <section id="portfolio" className="relative bg-white pb-20">

      {/* Sticky Header */}
      <div className=" bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-transparent bg-clip-text bg-pinterest-red">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of successful campaigns and creative projects that have driven exceptional results for my clients.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="sticky top-0 z-10 overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap bg-background pt-3 pl-1">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 mr-2 mb-3 ${filter === id
              ? 'bg-pinterest-red text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
              }`}
          >
            {label}
          </button>
        ))}
      </div>


      {/* Scrollable Masonry Grid */}
      <div className="scrollbar-hide px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto columns-2 sm:columns-2 md:columns-3 xl:columns-4 gap-6 py-10">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => item.video && setActiveVideo(item)}
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full object-cover ${item.height} group-hover:scale-105 transition-transform duration-300`}
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover ${item.height} group-hover:scale-105 transition-transform duration-300`}
                    />
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
                </div>

                <div className="p-4 sm:p-3 md:p-4">

                  <h3 className="text-base sm:text-sm md:text-base font-semibold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  

                </div>
              </div>
            </div>
          ))} {/* Close map correctly */}

          {activeVideo && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-auto"
              onClick={() => setActiveVideo(null)}
            >
              <div
                className="bg-white max-w-md w-full rounded-xl shadow-lg overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-4 text-gray-500 text-2xl font-bold hover:text-red-400 z-10"
                >
                  ×
                </button>

                <video
                  src={activeVideo.video}
                  className="w-full max-h-[70vh] object-cover"
                  controls
                  autoPlay
                />


                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {activeVideo.title}
                  </h2>
                  <p className="text-sm text-gray-500 capitalize mb-2">
                    {activeVideo.category}
                  </p>
                  <div className="flex justify-between text-gray-600 text-sm mt-2">
                    <span>👁 {activeVideo.views}</span>
                    <span>❤️ {activeVideo.likes}</span>
                    <span>💬 {activeVideo.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </section>
  );
};



export default Portfolio;
