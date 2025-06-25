
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI roadmap and strategic guidance for your digital transformation.',
      icon: '🧠',
      features: [
        'AI Readiness Assessment',
        'Strategic Planning & Roadmap',
        'ROI Analysis & Business Case',
        'Technology Stack Recommendations',
        'Change Management Support',
        'Ongoing Strategic Advisory'
      ],
      process: [
        'Current State Analysis',
        'Opportunity Identification',
        'Strategy Development',
        'Implementation Planning'
      ]
    },
    {
      title: 'LLM Application Development',
      description: 'Custom applications powered by large language models tailored to your business needs.',
      icon: '🤖',
      features: [
        'Custom Chatbots & Virtual Assistants',
        'Document Processing & Analysis',
        'Content Generation Systems',
        'Knowledge Base Integration',
        'Multi-language Support',
        'API Development & Integration'
      ],
      process: [
        'Requirements Gathering',
        'Model Selection & Fine-tuning',
        'Application Development',
        'Testing & Deployment'
      ]
    },
    {
      title: 'Multi-Modal AI Solutions',
      description: 'Advanced AI systems that understand and process multiple types of data.',
      icon: '🎭',
      features: [
        'Computer Vision Systems',
        'Speech Recognition & Synthesis',
        'Image & Video Analysis',
        'Audio Processing',
        'Cross-modal Understanding',
        'Real-time Processing'
      ],
      process: [
        'Data Assessment',
        'Model Architecture Design',
        'Training & Optimization',
        'Integration & Scaling'
      ]
    },
    {
      title: 'Intelligent Automation',
      description: 'End-to-end automation workflows that learn and adapt to your business processes.',
      icon: '⚡',
      features: [
        'Process Mining & Analysis',
        'Workflow Automation',
        'Intelligent Document Processing',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring'
      ],
      process: [
        'Process Discovery',
        'Automation Design',
        'Implementation & Testing',
        'Monitoring & Optimization'
      ]
    },
    {
      title: 'AI Infrastructure & MLOps',
      description: 'Scalable infrastructure and operations for your AI and machine learning initiatives.',
      icon: '🏗️',
      features: [
        'Cloud Infrastructure Setup',
        'Model Deployment Pipelines',
        'Monitoring & Alerting',
        'A/B Testing Frameworks',
        'Data Pipeline Management',
        'Security & Compliance'
      ],
      process: [
        'Infrastructure Assessment',
        'Architecture Design',
        'Platform Implementation',
        'Operations Setup'
      ]
    },
    {
      title: 'Custom AI Model Development',
      description: 'Bespoke AI models designed and trained specifically for your unique challenges.',
      icon: '🔬',
      features: [
        'Problem Definition & Scoping',
        'Data Collection & Preparation',
        'Model Architecture Design',
        'Training & Validation',
        'Performance Optimization',
        'Deployment & Maintenance'
      ],
      process: [
        'Data Analysis',
        'Model Design',
        'Training & Evaluation',
        'Production Deployment'
      ]
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', desc: 'Medical imaging, patient care, drug discovery' },
    { name: 'Finance', icon: '💰', desc: 'Risk assessment, fraud detection, algorithmic trading' },
    { name: 'Retail', icon: '🛍️', desc: 'Personalization, inventory optimization, customer service' },
    { name: 'Manufacturing', icon: '🏭', desc: 'Quality control, predictive maintenance, supply chain' },
    { name: 'Education', icon: '🎓', desc: 'Personalized learning, assessment, content creation' },
    { name: 'Logistics', icon: '🚚', desc: 'Route optimization, demand forecasting, warehouse automation' }
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
            Comprehensive AI solutions designed to transform your business operations, 
            enhance decision-making, and drive sustainable growth.
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
              Tailored AI solutions across diverse sectors
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

      {/* Process Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="magic-text">Process</span>
            </h2>
            <p className="text-xl text-foreground/80">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'We analyze your business needs, data infrastructure, and AI readiness.',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Develop a comprehensive AI strategy aligned with your business goals.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Development & Implementation',
                description: 'Build and deploy custom AI solutions using best practices.',
                icon: '⚙️'
              },
              {
                step: '04',
                title: 'Optimization & Support',
                description: 'Continuous monitoring, optimization, and ongoing support.',
                icon: '📈'
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{phase.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {phase.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{phase.title}</h3>
                <p className="text-foreground/70 text-sm">{phase.description}</p>
              </div>
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
            Let's discuss how our AI solutions can transform your business. 
            Get a free consultation with our experts.
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
