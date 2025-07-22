import React from 'react';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    'Social Media Marketing',
    'Content Creation',
    'Social Media Management',
    'Campaign Planning & Execution',
    'Email Marketing',
    'Influencer Marketing',
    'Brand Development',
    'Analytics & Reporting'
  ];

  const achievements = [
    {
      icon: Award,
      title: '1+ Years Experience',
      description: 'Helping brands grow their digital presence'
    },
    {
      icon: Users,
      title: 'Happy Clients',
      description: 'Making everyone go crazy with the content'
    },
    {
      icon: BookOpen,
      title: 'Digital Marketing Certified',
      description: 'Indus Valley School of Arts (IVS)'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solver',
      description: 'Turning challenges into opportunities'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-pinterest-red">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that matter and drive real business results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-30 h-30 bg-pinterest-red rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <img src="/images/pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Hey, I’m Ilsa Naeem – Your Brand’s New Best Friend 💻✨
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              I’m a digital marketer with a passion for storytelling, strategy, and making things pop—online and on paper.
              Certified from Indus Valley School (IVS), I’ve spent the last few years diving deep into the world of social
              media marketing, content creation, and brand building.Whether it’s crafting a caption that hooks in 3 seconds,
              writing a video script that makes people hit "share," or curating a feed that actually feels like your brand—I live for that magic.
              I don’t just post content.I build narratives, spark engagement, and turn followers into loyal fans (and customers).



            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              I love trends, but I love beating them more. If it’s fresh, fun, and scroll-stopping—I’m already on it.
              If it isn’t, I’ll make it. I believe that every brand has a unique story to tell, and my job is to help
              you tell it in the most engaging way possible. From social media campaigns to
              comprehensive digital strategies, I'm here to help your brand shine online.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">My Expertise</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-200 hover:text-pinterest-red transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Achievements */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pinterest-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;