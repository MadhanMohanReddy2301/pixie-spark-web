import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: 'Madhan Reddy',
      role: 'CEO & Co-Founder',
      bio: 'Technical expert in Generative AI, Agentic AI, and LLMs with deep experience in building practical AI solutions.',
      avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop',
      expertise: ['Generative AI', 'Agentic AI', 'LLMs', 'AI Strategy']
    },
    {
      name: 'Pavan Reddy',
      role: 'CTO & Co-Founder',
      bio: 'Technical specialist in Generative AI, LLM assistants, and AI system architecture with extensive development experience.',
      avatar: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop',
      expertise: ['Generative AI', 'LLM Assistants', 'System Architecture', 'AI Development']
    },
    {
      name: 'Anitha Karre',
      role: 'Head of Research & Co-Founder',
      bio: 'Technical researcher specializing in LLMs, Generative AI, business analysis, and AI research methodologies.',
      avatar: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=100&h=100&fit=crop',
      expertise: ['LLMs', 'Generative AI', 'Business Analysis', 'AI Research']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology.',
      icon: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=80&h=80&fit=crop'
    },
    {
      title: 'Ethical AI',
      description: 'Building responsible AI systems that benefit humanity.',
      icon: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=80&h=80&fit=crop'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering real value.',
      icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop'
    },
    {
      title: 'Continuous Learning',
      description: 'Staying at the forefront of AI research and development.',
      icon: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=80&h=80&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8 text-gray-900">
            About <span className="font-semibold text-blue-600">PixieAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a team of AI researchers, engineers, and business strategists 
            passionate about making artificial intelligence accessible and impactful 
            for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize artificial intelligence by creating practical, powerful, 
                and ethical AI solutions that empower businesses to solve their most 
                complex challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe AI should augment human intelligence, not replace it. 
                Our solutions are designed to enhance decision-making, automate 
                repetitive tasks, and unlock new possibilities for growth and innovation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A future where every business, regardless of size or industry, 
                can harness the transformative power of artificial intelligence 
                to achieve extraordinary results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where AI-driven insights guide strategic 
                decisions, intelligent automation handles routine work, and 
                human creativity is amplified by artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img src={value.icon} alt={value.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Expert founders in AI and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden animate-pulse">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { number: '10+', label: 'Projects Completed', icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=60&h=60&fit=crop' },
              { number: '7+', label: 'Happy Clients', icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop' },
              { number: '24/7', label: 'Support Available', icon: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=60&h=60&fit=crop' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-sm transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={stat.icon} alt={stat.label} className="w-full h-full object-cover" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Our Story
            </h2>
          </div>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              PixieAI was born from a simple observation: while AI technology was advancing 
              rapidly, most businesses struggled to harness its potential effectively. 
              Founded by a team of AI experts and industry veterans, 
              we set out to bridge this gap.
            </p>
            
            <p>
              Our founders, Madhan Reddy, Pavan Reddy, and Anitha Karre, combined their 
              expertise in Generative AI, LLMs, and Agentic AI to create practical solutions 
              that deliver real business value. They realized that the most sophisticated 
              AI technologies were only accessible to a few large corporations, leaving 
              countless businesses unable to benefit from AI's transformative power.
            </p>
            
            <p>
              Today, PixieAI has helped numerous companies across various industries 
              implement AI solutions that drive real business value. From startups 
              to established enterprises, we've proven that with the right approach, 
              AI can be accessible, practical, and transformative for any business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
