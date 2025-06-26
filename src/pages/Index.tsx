
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      features: ['Smart AI Copilots', 'Task Automation', 'Decision Support']
    },
    {
      title: 'Social Media AI Integration',
      description: 'Expert integration of customer support agents with WhatsApp, Facebook, and other platforms.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      features: ['WhatsApp Integration', 'Multi-platform Bots', '24/7 Support']
    },
    {
      title: 'Database AI Querying',
      description: 'Query your databases using natural language - no SQL knowledge required.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      features: ['Natural Language Queries', 'Real-time Analytics', 'Automated Reports']
    },
    {
      title: 'Excel Data Analysis AI',
      description: 'Advanced AI-powered data analysis and automation for Excel workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      features: ['Excel Automation', 'Pattern Recognition', 'Predictive Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CTO, FinTech Solutions',
      content: 'PixieAI transformed our customer service with WhatsApp integration. 60% reduction in response time!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head, E-commerce',
      content: 'The database AI integration eliminated our need for SQL experts. Natural language queries work perfectly!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Arjun Reddy',
      role: 'Founder, EdTech Startup',
      content: 'Their agentic AI system revolutionized our data analysis. Excel automation saved us countless hours.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Our Solutions</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Agentic AI and LLM solutions that solve real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-500 border-white/10 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-orange-300 flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 pt-32 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">PixieAI</span>?
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
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
                  <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-400">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 glass-effect">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: '10+', label: 'AI Projects Delivered' },
                    { metric: '10+', label: 'Industries Served' },
                    { metric: '24hr', label: 'Average Response Time' },
                    { metric: '99%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">{stat.metric}</div>
                      <div className="text-sm text-foreground/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Real results from real businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-500 border-white/10 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-orange-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 pt-32 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Business with <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">AI</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join the AI revolution today. Let's discuss how our agentic AI solutions can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg hover-glow transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-orange-400/50 text-white hover:bg-orange-500/20 px-8 py-4 text-lg glass-effect transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 pt-20 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/1fad3257-35a4-46aa-93b5-c1631158f76b.png" 
                  alt="PixieAI Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">PixieAI</span>
              </div>
              <p className="text-foreground/70 mb-4 max-w-md">
                AI-first innovation company dedicated to solving real-world business challenges 
                using Agentic AI, Generative AI, and LLMs.
              </p>
              <div className="text-sm text-foreground/60">
                © 2024 PixieAI. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Services', 'Projects', 'Careers'].map((link) => (
                  <div key={link}>
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-foreground/70 hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-foreground/70">
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
