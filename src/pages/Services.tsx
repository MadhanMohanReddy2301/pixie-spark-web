
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Agents & Copilots',
      description: 'Intelligent AI agents that automate tasks, assist teams, and enhance productivity across your organization.',
      icon: '🤖',
      features: [
        'Smart AI Copilots for Teams',
        'Customer Support Automation',
        'Task & Workflow Automation',
        'Decision Support Systems',
        'Multi-platform Integration',
        'Conversational AI Interfaces'
      ],
      process: [
        'Business Process Analysis',
        'Agent Design & Training',
        'Integration & Testing',
        'Deployment & Monitoring'
      ]
    },
    {
      title: 'WhatsApp & Social Media AI',
      description: 'Expert integration of customer support agents with WhatsApp, Facebook, and other social platforms.',
      icon: '💬',
      features: [
        'WhatsApp Business API Integration',
        'Facebook Messenger Bots',
        'Instagram & Twitter Automation',
        '24/7 Customer Support',
        'Multi-language Support',
        'Rich Media & Interactive Messages'
      ],
      process: [
        'Platform Assessment',
        'Bot Development',
        'API Integration',
        'Testing & Launch'
      ]
    },
    {
      title: 'Database AI Integration',
      description: 'Transform your databases with natural language querying - no SQL knowledge required.',
      icon: '🗄️',
      features: [
        'Natural Language to SQL',
        'Voice-to-Database Queries',
        'Automated Report Generation',
        'Data Visualization AI',
        'Real-time Analytics',
        'Secure Database Connections'
      ],
      process: [
        'Database Schema Analysis',
        'NL Interface Development',
        'Security Implementation',
        'User Training & Support'
      ]
    },
    {
      title: 'Excel Data Analysis AI',
      description: 'Advanced AI-powered data analysis and automation for Excel workflows and business intelligence.',
      icon: '📊',
      features: [
        'Automated Excel Processing',
        'Intelligent Data Cleaning',
        'Pattern Recognition',
        'Predictive Analytics',
        'Custom Formula Generation',
        'Report Automation'
      ],
      process: [
        'Data Assessment',
        'AI Model Training',
        'Excel Integration',
        'Automation Setup'
      ]
    },
    {
      title: 'MCP Server Development',
      description: 'Building Model Context Protocol servers for seamless agentic AI system integration.',
      icon: '🔗',
      features: [
        'MCP Architecture Design',
        'Custom Protocol Implementation',
        'Agentic AI Integration',
        'Scalable Server Solutions',
        'API Standardization',
        'Cross-platform Compatibility'
      ],
      process: [
        'Requirements Analysis',
        'Server Architecture',
        'Protocol Implementation',
        'System Integration'
      ]
    },
    {
      title: 'Custom LLM Applications',
      description: 'Bespoke applications powered by large language models tailored to your specific business needs.',
      icon: '🧠',
      features: [
        'Custom LLM Fine-tuning',
        'Domain-specific Models',
        'RAG Implementation',
        'Multi-modal AI Systems',
        'Enterprise-grade Security',
        'Scalable Deployment'
      ],
      process: [
        'Use Case Analysis',
        'Model Selection & Training',
        'Application Development',
        'Performance Optimization'
      ]
    }
  ];

  const industries = [
    { name: 'FinTech', icon: '💳', desc: 'AI-powered financial analysis, risk assessment, and automated trading' },
    { name: 'Healthcare', icon: '🏥', desc: 'Patient data analysis, diagnostic assistance, and workflow automation' },
    { name: 'Retail & E-commerce', icon: '🛍️', desc: 'Personalization, inventory optimization, and customer service automation' },
    { name: 'EdTech', icon: '🎓', desc: 'Personalized learning, automated assessment, and educational content generation' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Quality control, predictive maintenance, and supply chain optimization' },
    { name: 'IT Services', icon: '💻', desc: 'Automated support, code generation, and intelligent system monitoring' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="magic-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive Agentic AI and LLM solutions designed to solve real-world business challenges 
            and unlock new value through intelligent, scalable AI systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                      <p className="text-foreground/80">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-center">
                            <span className="mr-2 text-blue-400">✨</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-3">Our Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-center">
                            <span className="mr-2 text-purple-400">{idx + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="magic-text">Serve</span>
            </h2>
            <p className="text-xl text-foreground/80">
              AI-first solutions across diverse sectors and business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{industry.name}</h3>
                  <p className="text-foreground/70 text-sm">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="magic-text">PixieAI</span>?
            </h2>
            <p className="text-xl text-foreground/80">
              We bridge the gap between cutting-edge AI and practical business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Agentic AI Experts',
                description: 'Specialized in building intelligent agents that think and act autonomously',
                icon: '🎯'
              },
              {
                title: 'Real-world Solutions',
                description: 'Practical AI that solves actual business problems, not just demos',
                icon: '🔧'
              },
              {
                title: 'Rapid Deployment',
                description: 'Fast implementation with minimal disruption to your operations',
                icon: '⚡'
              },
              {
                title: 'Enterprise Ready',
                description: 'Scalable, secure, and adaptable solutions for growing businesses',
                icon: '🏢'
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="magic-text">Started</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Transform your business with intelligent AI solutions that work in the real world. 
            Let's discuss how our agentic AI can solve your specific challenges.
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
              <Link to="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
