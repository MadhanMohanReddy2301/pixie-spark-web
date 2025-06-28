
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'WhatsApp AI Customer Support Bot',
      description: 'Advanced conversational AI bot integrated with WhatsApp Business API for 24/7 customer support.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Conversational AI',
      duration: '3 months',
      team: '4 developers',
      results: [
        '60% reduction in response time',
        '40% increase in customer satisfaction',
        '24/7 automated support coverage',
        'Multi-language support implementation'
      ]
    },
    {
      title: 'Database Natural Language Query System',
      description: 'AI-powered system allowing users to query complex databases using plain English commands.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      category: 'Database AI',
      duration: '4 months',
      team: '5 developers',
      results: [
        'Eliminated need for SQL expertise',
        '70% faster data retrieval',
        'Natural language processing accuracy: 95%',
        'Real-time analytics dashboard'
      ]
    },
    {
      title: 'Excel AI Data Analysis Platform',
      description: 'Intelligent Excel automation platform with advanced data analysis and pattern recognition capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'Data Analytics',
      duration: '2 months',
      team: '3 developers',
      results: [
        '80% reduction in manual data processing',
        'Automated report generation',
        'Pattern recognition accuracy: 92%',
        'Predictive analytics integration'
      ]
    },
    {
      title: 'AI Recruitment Assistant',
      description: 'Intelligent recruitment platform that automates candidate screening and interview scheduling.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      category: 'HR Tech',
      duration: '5 months',
      team: '6 developers',
      results: [
        '50% reduction in screening time',
        'Automated candidate matching',
        'Interview scheduling optimization',
        'Bias reduction in hiring process'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real-world AI solutions that have transformed businesses across various industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-orange-400/20 border border-orange-400 rounded-full text-orange-300 text-sm font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-orange-300">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Start Your <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">AI Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can build innovative AI solutions for your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-6 text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-400/50 text-white hover:bg-orange-500/20 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Projects;
