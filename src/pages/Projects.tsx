
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Recommendation Engine',
      description: 'AI-powered product recommendation system that increased conversion rates by 35% for a major e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Redis'],
      category: 'Machine Learning',
      results: ['35% increase in conversion', '50% better user engagement', '20% revenue growth']
    },
    {
      title: 'Document Intelligence System',
      description: 'Automated document processing and information extraction system for legal firms, reducing manual work by 80%.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      technologies: ['Python', 'OCR', 'NLP', 'MongoDB'],
      category: 'Document AI',
      results: ['80% reduction in manual work', '99% accuracy rate', '70% faster processing']
    },
    {
      title: 'Sales and Customer Assistant',
      description: 'Intelligent chatbot for sales support and customer service, handling 90% of inquiries automatically.',
      image: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'OpenAI API', 'React', 'WebSocket'],
      category: 'Conversational AI',
      results: ['90% automated inquiry handling', '24/7 availability', '60% cost reduction']
    },
    {
      title: 'Predictive Maintenance Platform',
      description: 'IoT-based predictive maintenance system for manufacturing equipment, preventing 95% of unplanned downtime.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
      technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana'],
      category: 'IoT & Analytics',
      results: ['95% downtime prevention', '30% maintenance cost savings', 'Real-time monitoring']
    }
  ];

  const categories = ['All', 'Machine Learning', 'Document AI', 'Conversational AI', 'IoT & Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0'
                    : 'border-orange-400/50 text-orange-400 hover:bg-orange-500/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-green-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-orange-400/30 text-orange-300 hover:bg-orange-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
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
            Ready to Start Your <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">AI Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss how we can create a custom AI solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-10 py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="/contact">Get Free Consultation</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-orange-400/50 text-white hover:bg-orange-500/20 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
