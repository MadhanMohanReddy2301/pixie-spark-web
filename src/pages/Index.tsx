import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Users, Zap, TrendingUp } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'AI Agents & Copilots',
      description: 'Intelligent agents that automate tasks, assist teams, and enhance productivity across your organization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      features: ['Smart AI Copilots', 'Task Automation', 'Decision Support'],
      icon: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=60&h=60&fit=crop'
    },
    {
      title: 'Social Media AI Integration',
      description: 'Expert integration of customer support agents with WhatsApp, Facebook, and other platforms.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      features: ['WhatsApp Integration', 'Multi-platform Bots', '24/7 Support'],
      icon: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop'
    },
    {
      title: 'Database AI Querying',
      description: 'Query your databases using natural language - no SQL knowledge required.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      features: ['Natural Language Queries', 'Real-time Analytics', 'Automated Reports'],
      icon: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=60&h=60&fit=crop'
    },
    {
      title: 'Excel Data Analysis AI',
      description: 'Advanced AI-powered data analysis and automation for Excel workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: ['Excel Automation', 'Pattern Recognition', 'Predictive Analytics'],
      icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CTO, FinTech Solutions',
      content: 'PixieAI transformed our customer service with WhatsApp integration. 60% reduction in response time!',
      icon: <Bot className="w-12 h-12 text-orange-400 animate-pulse" />
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head, E-commerce',
      content: 'The database AI integration eliminated our need for SQL experts. Natural language queries work perfectly!',
      icon: <Users className="w-12 h-12 text-blue-400 animate-pulse" />
    },
    {
      name: 'Arjun Reddy',
      role: 'Founder, EdTech Startup',
      content: 'Their agentic AI system revolutionized our data analysis. Excel automation saved us countless hours.',
      icon: <TrendingUp className="w-12 h-12 text-green-400 animate-pulse" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Services Section - Microsoft-style clean layout */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Agentic AI and LLM solutions that solve real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-orange-400 bg-white/20 backdrop-blur-sm p-2">
                      <img src={service.icon} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-orange-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-4"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Microsoft-style split layout */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Why Choose <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">PixieAI</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                We're an AI-first innovation company that bridges the gap between cutting-edge AI 
                and practical business outcomes, empowering teams with intelligent, scalable solutions.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    title: 'Agentic AI Experts', 
                    desc: 'Specialized in autonomous AI agents and intelligent automation',
                    icon: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=80&h=80&fit=crop'
                  },
                  { 
                    title: 'Real-world Impact', 
                    desc: 'Solving actual business challenges with practical AI solutions',
                    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop'
                  },
                  { 
                    title: 'Rapid Implementation', 
                    desc: 'Fast deployment with minimal disruption to operations',
                    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop'
                  },
                  { 
                    title: 'Enterprise Ready', 
                    desc: 'Scalable, secure solutions that grow with your business',
                    icon: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=80&h=80&fit=crop'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-orange-400">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl p-10 backdrop-blur-sm border border-orange-400/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '10+', label: 'AI Projects Delivered' },
                    { metric: '10+', label: 'Industries Served' },
                    { metric: '24hr', label: 'Average Response Time' },
                    { metric: '99%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">{stat.metric}</div>
                      <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Microsoft-style card grid */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              What Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 flex items-center justify-center border-2 border-orange-400/30">
                      {testimonial.icon}
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-orange-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Microsoft-style centered */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your Business with <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">AI</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the AI revolution today. Let's discuss how our agentic AI solutions can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-6 text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-400/50 text-white hover:bg-orange-500/20 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Microsoft-style clean */}
      <footer className="py-16 px-6 border-t border-white/10 bg-black/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/d083078f-9e90-4dd9-98a3-a43e84f87daf.png" 
                  alt="PixieAI Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">PixieAI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                AI-first innovation company dedicated to solving real-world business challenges 
                using Agentic AI, Generative AI, and LLMs.
              </p>
              <div className="text-sm text-gray-400">
                © 2024 PixieAI. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
              <div className="space-y-4">
                {['About', 'Services', 'Projects', 'Careers'].map((link) => (
                  <div key={link}>
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                    >
                      {link}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="font-medium">Madhan Reddy - Founder & CEO</div>
                <div className="font-medium">madhanreddy@pixieai.in</div>
                <div className="font-medium">pavanreddy@pixieai.in</div>
                <div className="font-medium">+91 8106255668</div>
                <div className="font-medium">+91 9381054019</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
