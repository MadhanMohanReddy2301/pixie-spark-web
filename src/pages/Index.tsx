
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
      icon: '🤖',
      features: ['Smart AI Copilots', 'Task Automation', 'Decision Support']
    },
    {
      title: 'Social Media AI Integration',
      description: 'Expert integration of customer support agents with WhatsApp, Facebook, and other platforms.',
      icon: '💬',
      features: ['WhatsApp Integration', 'Multi-platform Bots', '24/7 Support']
    },
    {
      title: 'Database AI Querying',
      description: 'Query your databases using natural language - no SQL knowledge required.',
      icon: '🗄️',
      features: ['Natural Language Queries', 'Real-time Analytics', 'Automated Reports']
    },
    {
      title: 'Excel Data Analysis AI',
      description: 'Advanced AI-powered data analysis and automation for Excel workflows.',
      icon: '📊',
      features: ['Excel Automation', 'Pattern Recognition', 'Predictive Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CTO, FinTech Solutions',
      content: 'PixieAI transformed our customer service with WhatsApp integration. 60% reduction in response time!',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Head, E-commerce',
      content: 'The database AI integration eliminated our need for SQL experts. Natural language queries work perfectly!',
      avatar: '👩‍💼'
    },
    {
      name: 'Arjun Reddy',
      role: 'Founder, EdTech Startup',
      content: 'Their agentic AI system revolutionized our data analysis. Excel automation saved us countless hours.',
      avatar: '👨‍🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="magic-text">Our Solutions</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Agentic AI and LLM solutions that solve real-world business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-blue-300 flex items-center">
                        <span className="mr-2">✨</span>
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="magic-text">PixieAI</span>?
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
                We're an AI-first innovation company that bridges the gap between cutting-edge AI 
                and practical business outcomes, empowering teams with intelligent, scalable solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Agentic AI Experts', desc: 'Specialized in autonomous AI agents and intelligent automation' },
                  { title: 'Real-world Impact', desc: 'Solving actual business challenges with practical AI solutions' },
                  { title: 'Rapid Implementation', desc: 'Fast deployment with minimal disruption to operations' },
                  { title: 'Enterprise Ready', desc: 'Scalable, secure solutions that grow with your business' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 glass-effect">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: '50+', label: 'AI Projects Delivered' },
                    { metric: '10+', label: 'Industries Served' },
                    { metric: '24hr', label: 'Average Response Time' },
                    { metric: '99%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold magic-text mb-1">{stat.metric}</div>
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
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="magic-text">Clients Say</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Real results from real businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-blue-300">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with <span className="magic-text">AI</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Join the AI revolution today. Let's discuss how our agentic AI solutions can solve your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg hover-glow"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg glass-effect"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold magic-text">PixieAI</span>
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
                      className="text-foreground/70 hover:text-blue-400 transition-colors"
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
