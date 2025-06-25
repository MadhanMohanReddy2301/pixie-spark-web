
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'AI Consulting',
      description: 'Strategic guidance to integrate AI into your business processes and decision-making.',
      icon: '🧠',
      features: ['Strategy Development', 'AI Readiness Assessment', 'Implementation Roadmap']
    },
    {
      title: 'LLM App Development',
      description: 'Custom applications powered by large language models for your specific needs.',
      icon: '🤖',
      features: ['Custom Chatbots', 'Content Generation', 'Document Analysis']
    },
    {
      title: 'Multi-Modal AI',
      description: 'Advanced AI systems that understand and process text, images, audio, and video.',
      icon: '🎭',
      features: ['Computer Vision', 'Speech Processing', 'Multimodal Analytics']
    },
    {
      title: 'Automation Workflows',
      description: 'Intelligent automation solutions that streamline operations and reduce manual work.',
      icon: '⚡',
      features: ['Process Automation', 'Smart Workflows', 'Integration Solutions']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Inc.',
      content: 'PixieAI transformed our customer service with their intelligent chatbot. 40% reduction in response time!',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, DataDrive Solutions',
      content: 'The automation workflows saved us countless hours. ROI was evident within the first month.',
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Johnson',
      role: 'Operations Director, GlobalTech',
      content: 'Their multi-modal AI solution revolutionized how we process and analyze our data streams.',
      avatar: '👩‍🔬'
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
              <span className="magic-text">Our Services</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business transformation
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
                We combine cutting-edge technology with deep business expertise to deliver 
                AI solutions that actually work in the real world.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Expert Team', desc: 'PhD-level AI researchers and experienced engineers' },
                  { title: 'Proven Results', desc: 'Track record of successful implementations across industries' },
                  { title: 'Ongoing Support', desc: '24/7 monitoring and continuous optimization' },
                  { title: 'Scalable Solutions', desc: 'Built to grow with your business needs' }
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
                    { metric: '500%', label: 'Avg. Efficiency Gain' },
                    { metric: '$2M+', label: 'Cost Savings Generated' },
                    { metric: '99.9%', label: 'System Uptime' },
                    { metric: '48hrs', label: 'Avg. Implementation' }
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
              Real results from real businesses
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
            Join the AI revolution today. Let's discuss how we can help you achieve your goals.
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
                Transforming businesses through intelligent AI solutions. 
                Your partner in the AI-driven future.
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
                <div>hello@pixieai.com</div>
                <div>+1 (555) 123-4567</div>
                <div>San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
