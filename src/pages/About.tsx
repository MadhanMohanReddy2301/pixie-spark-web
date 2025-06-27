
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Lightbulb, Rocket, Heart, Brain, Search, BarChart3 } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Madhan Reddy',
      role: 'Co-Founder & AI Architect',
      description: 'Leading AI innovations with deep expertise in machine learning and neural networks.',
      skills: ['Machine Learning', 'Neural Networks', 'AI Strategy'],
      icon: <Users className="w-16 h-16 text-blue-400 animate-pulse" />
    },
    {
      name: 'Pavan Reddy',
      role: 'Co-Founder & Tech Lead',
      description: 'Driving technical excellence and scalable AI solutions for enterprise clients.',
      skills: ['System Architecture', 'Enterprise AI', 'Technical Leadership'],
      icon: <Rocket className="w-16 h-16 text-green-400 animate-pulse" />
    },
    {
      name: 'Anitha Karre',
      role: 'Head of Research & Co-Founder',
      description: 'Technical researcher specializing in LLMs, Generative AI, business analysis, and AI research methodologies.',
      skills: ['LLMs', 'Generative AI', 'Business Analysis', 'AI Research'],
      icon: <Brain className="w-16 h-16 text-purple-400 animate-pulse" />
    }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what AI can achieve for businesses.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Quality Excellence',
      description: 'Every solution we deliver meets the highest standards of performance.',
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you for long-term growth.',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Ethical AI',
      description: 'We build responsible AI solutions that benefit businesses and society.',
      icon: <Heart className="w-8 h-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            About <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">PixieAI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            We're a cutting-edge AI company dedicated to transforming businesses through 
            intelligent automation, agentic AI systems, and innovative machine learning solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket className="w-8 h-8 text-orange-400" />
                  <CardTitle className="text-3xl font-bold text-white">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize AI by making advanced artificial intelligence accessible to 
                  businesses of all sizes, helping them solve complex challenges and unlock 
                  new opportunities for growth and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                  <CardTitle className="text-3xl font-bold text-white">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To be the leading AI-first company that bridges the gap between cutting-edge 
                  research and practical business applications, creating a future where AI 
                  empowers every organization to reach its full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Meet Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300">
              The brilliant minds behind PixieAI's innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 flex items-center justify-center border-2 border-orange-400/30">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-300 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-orange-400/20 text-orange-300 rounded-full text-sm font-medium"
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

      {/* Core Values */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our Core <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300">
              The difference we've made in the AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: '10+', label: 'Projects Completed', icon: <Target className="w-8 h-8 text-green-400" /> },
              { metric: '7+', label: 'Happy Clients', icon: <Heart className="w-8 h-8 text-red-400" /> },
              { metric: '24/7', label: 'Support Available', icon: <Users className="w-8 h-8 text-blue-400" /> }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-lg text-white font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">
            Ready to Work with <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Us</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss how PixieAI can transform your business with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-400/50 text-white hover:bg-orange-500/20 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
