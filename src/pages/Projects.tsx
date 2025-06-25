
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Customer Service Revolution',
      client: 'TechFlow Inc.',
      industry: 'SaaS',
      challenge: 'High customer support costs and slow response times affecting customer satisfaction.',
      solution: 'Deployed an intelligent chatbot with natural language understanding and seamless human handoff.',
      results: [
        '40% reduction in response time',
        '60% cost savings on support operations',
        '95% customer satisfaction rate',
        '24/7 multilingual support coverage'
      ],
      technologies: ['GPT-4', 'Custom NLP Models', 'React', 'Python', 'AWS'],
      image: '🤖',
      category: 'LLM Applications'
    },
    {
      title: 'Predictive Manufacturing Analytics',
      client: 'GlobalManufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Unexpected equipment failures causing production delays and maintenance costs.',
      solution: 'Implemented IoT sensors and ML models for predictive maintenance and quality control.',
      results: [
        '30% reduction in unplanned downtime',
        '$2M annual savings in maintenance costs',
        '25% improvement in product quality',
        '90% accuracy in failure prediction'
      ],
      technologies: ['TensorFlow', 'IoT Sensors', 'Time Series Analysis', 'Azure', 'Power BI'],
      image: '🏭',
      category: 'Automation'
    },
    {
      title: 'Medical Image Analysis Platform',
      client: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Radiologists overwhelmed with image analysis workload, leading to delayed diagnoses.',
      solution: 'Developed AI-powered medical imaging system for automated preliminary screening.',
      results: [
        '70% faster initial screening',
        '98% accuracy in anomaly detection',
        '50% improvement in diagnosis workflow',
        'FDA-compliant deployment'
      ],
      technologies: ['Computer Vision', 'PyTorch', 'DICOM Processing', 'Kubernetes', 'React'],
      image: '🏥',
      category: 'Computer Vision'
    },
    {
      title: 'Intelligent Document Processing',
      client: 'LegalPro Associates',
      industry: 'Legal Services',
      challenge: 'Manual document review consuming 80% of billable hours, limiting case capacity.',
      solution: 'Built automated document classification and information extraction system.',
      results: [
        '85% reduction in document processing time',
        '300% increase in case handling capacity',
        '$500K annual cost savings',
        '99% accuracy in document classification'
      ],
      technologies: ['OCR', 'NLP', 'Document AI', 'Flask', 'PostgreSQL'],
      image: '📋',
      category: 'Document Processing'
    },
    {
      title: 'Real-Time Fraud Detection Engine',
      client: 'SecureBank',
      industry: 'Financial Services',
      challenge: 'Rising fraud losses and false positives affecting customer experience.',
      solution: 'Deployed real-time ML models for transaction monitoring and risk assessment.',
      results: [
        '90% reduction in fraud losses',
        '50% decrease in false positives',
        '<100ms transaction processing',
        'Real-time risk scoring'
      ],
      technologies: ['Apache Kafka', 'Real-time ML', 'Anomaly Detection', 'Spark', 'Redis'],
      image: '💳',
      category: 'Risk Analytics'
    },
    {
      title: 'Supply Chain Optimization Platform',
      client: 'GlobalRetail Inc.',
      industry: 'Retail',
      challenge: 'Inventory shortages and overstock issues causing revenue loss and customer dissatisfaction.',
      solution: 'Implemented demand forecasting and automated inventory management system.',
      results: [
        '35% improvement in demand accuracy',
        '20% reduction in inventory costs',
        '99% stock availability for top products',
        '$5M annual revenue increase'
      ],
      technologies: ['Time Series Forecasting', 'Optimization Algorithms', 'API Integration', 'MongoDB'],
      image: '📦',
      category: 'Optimization'
    }
  ];

  const categories = ['All', 'LLM Applications', 'Computer Vision', 'Automation', 'Document Processing', 'Risk Analytics', 'Optimization'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="magic-text">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Real-world AI implementations delivering measurable business impact 
            across industries and use cases.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-6 bg-background/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "border-white/20 text-white hover:bg-white/10 glass-effect"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{project.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                          {project.category}
                        </span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                          {project.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-blue-300 mb-4">{project.client}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-300 mb-2">Challenge</h4>
                      <p className="text-foreground/70 text-sm">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-300 mb-2">Solution</h4>
                      <p className="text-foreground/70 text-sm">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-yellow-300 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-center">
                            <span className="mr-2 text-green-400">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-cyan-300 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="magic-text">Results</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Consistent value delivery across all our projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '50+', label: 'Successful Deployments', icon: '🚀' },
              { metric: '$50M+', label: 'Client Cost Savings', icon: '💰' },
              { metric: '95%', label: 'Average Accuracy', icon: '🎯' },
              { metric: '6 Months', label: 'Average ROI Timeline', icon: '⏱️' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up glass-effect p-6 rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold magic-text mb-2">{stat.metric}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="magic-text">Success Story</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Join our growing list of successful AI implementations. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg hover-glow"
            >
              <Link to="/contact">Start Your Project</Link>
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
    </div>
  );
};

export default Projects;
