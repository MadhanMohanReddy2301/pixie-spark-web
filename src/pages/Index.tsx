
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'AI Agents & Copilots',
      description: 'Intelligent agents that automate tasks, assist teams, and enhance productivity across your organization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      features: ['Smart AI Copilots', 'Task Automation', 'Decision Support'],
      icon: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=60&h=60&fit=crop'
    },
    {
      title: 'Social Media AI Integration',
      description: 'Expert integration of customer support agents with WhatsApp, Facebook, and other platforms.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
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
      avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=80&h=80&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head, E-commerce',
      content: 'The database AI integration eliminated our need for SQL experts. Natural language queries work perfectly!',
      avatar: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop'
    },
    {
      name: 'Arjun Reddy',
      role: 'Founder, EdTech Startup',
      content: 'Their agentic AI system revolutionized our data analysis. Excel automation saved us countless hours.',
      avatar: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=80&h=80&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
              Our <span className="font-semibold text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Agentic AI and LLM solutions that solve real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white bg-white/90 backdrop-blur-sm p-2">
                      <img src={service.icon} alt="" className="w-full h-full object-cover rounded" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-gray-900">
                Why Choose <span className="font-semibold text-blue-600">PixieAI</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We're an AI-first innovation company that bridges the gap between cutting-edge AI 
                and practical business outcomes, empowering teams with intelligent, scalable solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    title: 'Agentic AI Experts', 
                    desc: 'Specialized in autonomous AI agents and intelligent automation',
                    icon: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=60&h=60&fit=crop'
                  },
                  { 
                    title: 'Real-world Impact', 
                    desc: 'Solving actual business challenges with practical AI solutions',
                    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=60&h=60&fit=crop'
                  },
                  { 
                    title: 'Rapid Implementation', 
                    desc: 'Fast deployment with minimal disruption to operations',
                    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop'
                  },
                  { 
                    title: 'Enterprise Ready', 
                    desc: 'Scalable, secure solutions that grow with your business',
                    icon: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=60&h=60&fit=crop'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: '10+', label: 'AI Projects Delivered' },
                    { metric: '10+', label: 'Industries Served' },
                    { metric: '24hr', label: 'Average Response Time' },
                    { metric: '99%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.metric}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
              What Our <span className="font-semibold text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 animate-pulse">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
            Ready to Transform Your Business with <span className="font-semibold">AI</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the AI revolution today. Let's discuss how our agentic AI solutions can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 border-0 px-8 py-4 text-lg font-semibold rounded"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/1fad3257-35a4-46aa-93b5-c1631158f76b.png" 
                  alt="PixieAI Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-semibold text-gray-900">PixieAI</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                AI-first innovation company dedicated to solving real-world business challenges 
                using Agentic AI, Generative AI, and LLMs.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 PixieAI. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['About', 'Services', 'Projects', 'Careers'].map((link) => (
                  <div key={link}>
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-6">Contact</h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <div>madhanreddy@pixieai.in</div>
                <div>pavanreddy@pixieai.in</div>
                <div>+91 8106255668</div>
                <div>+91 9381054019</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
