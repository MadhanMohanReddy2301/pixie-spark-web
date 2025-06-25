
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: 'Dr. Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI Research Director at Google. PhD in Machine Learning from Stanford.',
      avatar: '👨‍💼',
      expertise: ['Machine Learning', 'Strategy', 'Product Vision']
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-Founder',
      bio: 'Ex-OpenAI Engineer. Expert in LLMs and generative AI systems.',
      avatar: '👩‍💻',
      expertise: ['LLMs', 'System Architecture', 'AI Safety']
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Engineering',
      bio: 'Former Tesla Autopilot engineer with 10+ years in AI development.',
      avatar: '👨‍🔧',
      expertise: ['Computer Vision', 'Robotics', 'MLOps']
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Research',
      bio: 'PhD in AI from MIT. Published 50+ papers in top-tier conferences.',
      avatar: '👩‍🔬',
      expertise: ['NLP', 'Research', 'Innovation']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology.',
      icon: '🚀'
    },
    {
      title: 'Ethical AI',
      description: 'Building responsible AI systems that benefit humanity.',
      icon: '⚖️'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering real value.',
      icon: '🎯'
    },
    {
      title: 'Continuous Learning',
      description: 'Staying at the forefront of AI research and development.',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="magic-text">PixieAI</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We're a team of AI researchers, engineers, and business strategists 
            passionate about making artificial intelligence accessible and impactful 
            for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="magic-text">Mission</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                To democratize artificial intelligence by creating practical, powerful, 
                and ethical AI solutions that empower businesses to solve their most 
                complex challenges.
              </p>
              <p className="text-foreground/70">
                We believe AI should augment human intelligence, not replace it. 
                Our solutions are designed to enhance decision-making, automate 
                repetitive tasks, and unlock new possibilities for growth and innovation.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="magic-text">Vision</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                A future where every business, regardless of size or industry, 
                can harness the transformative power of artificial intelligence 
                to achieve extraordinary results.
              </p>
              <p className="text-foreground/70">
                We envision a world where AI-driven insights guide strategic 
                decisions, intelligent automation handles routine work, and 
                human creativity is amplified by artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="magic-text">Values</span>
            </h2>
            <p className="text-xl text-foreground/80">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="magic-text">Team</span>
            </h2>
            <p className="text-xl text-foreground/80">
              World-class experts in AI and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-blue-300 mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
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
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="magic-text">Impact</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Completed', icon: '🚀' },
              { number: '50+', label: 'Happy Clients', icon: '😊' },
              { number: '5', label: 'Years Experience', icon: '📅' },
              { number: '24/7', label: 'Support Available', icon: '🔧' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up glass-effect p-6 rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold magic-text mb-2">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="magic-text">Story</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg text-foreground/80">
            <p className="animate-fade-in-up">
              PixieAI was born from a simple observation: while AI technology was advancing 
              rapidly, most businesses struggled to harness its potential effectively. 
              Founded in 2019 by a team of AI researchers and industry veterans, 
              we set out to bridge this gap.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our founders, Dr. Alex Chen and Sarah Williams, met while working on 
              cutting-edge AI projects at leading tech companies. They realized that 
              the most sophisticated AI technologies were only accessible to a few 
              large corporations, leaving countless businesses unable to benefit 
              from AI's transformative power.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Today, PixieAI has helped over 100 companies across various industries 
              implement AI solutions that drive real business value. From startups 
              to Fortune 500 companies, we've proven that with the right approach, 
              AI can be accessible, practical, and transformative for any business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
