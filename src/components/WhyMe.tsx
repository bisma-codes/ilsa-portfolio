import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Eye, Heart, MessageCircle, Target, Award, Zap } from 'lucide-react';

const WhyMe: React.FC = () => {
  const [counters, setCounters] = useState({
    followers: 0,
    views: 0,
    likes: 0,
    engagement: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  const animateCounter = (target: number, key: keyof typeof counters) => {
    let current = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 20);
    intervalRefs.current.push(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset counters to 0 first
          setCounters({
            followers: 0,
            views: 0,
            likes: 0,
            engagement: 0,
          });

          // Clear previous intervals if any
          intervalRefs.current.forEach(clearInterval);
          intervalRefs.current = [];

          // Animate again
          animateCounter(30, 'followers');
          animateCounter(324000000, 'views');
          animateCounter(11000000, 'likes');
          animateCounter(30, 'engagement');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      intervalRefs.current.forEach(clearInterval);
    };
  }, []);
  

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Growth Strategy',
      description: 'Data-driven approaches that consistently deliver measurable results across all digital platforms.'
    },
    {
      icon: Target,
      title: 'Targeted Audience Reach',
      description: 'Strategic content that connects with your ideal customers and builds lasting relationships.'
    },
    {
      icon: Award,
      title: 'Award-Winning Campaigns',
      description: 'Recognized expertise in creating campaigns that not only perform but also win industry awards.'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick execution without compromising quality, ensuring your campaigns launch when they matter most.'
    }
  ];

  return (
    <section id="why-me" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-pinterest-red">Me?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When you work with me, you're not just hiring a marketer – you're partnering with a growth catalyst.
          </p>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {counters.followers.toLocaleString()}K+
            </div>
            <div className="text-gray-600 font-medium">Followers Generated</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(counters.views / 1000000).toFixed(1)}K+
            </div>
            <div className="text-gray-600 font-medium">Views Delivered</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {(counters.likes / 1000000).toFixed(1)}K+
            </div>
            <div className="text-gray-600 font-medium">Likes & Reactions</div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {counters.engagement}%+
            </div>
            <div className="text-gray-600 font-medium">Avg. Engagement Rate</div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pinterest-red rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to see these numbers grow for your brand? Let's create something amazing together.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-pinterest-red text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Start Your Growth Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;