
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
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      category: 'LLM Applications'
    },
    {
      title: 'Sales Analysis with AI/LLM',
      client: 'RetailMega Corp',
      industry: 'E-commerce',
      challenge: 'Complex sales data analysis requiring manual interpretation and delayed insights.',
      solution: 'Implemented LLM-powered sales analytics platform with natural language querying.',
      results: [
        '80% faster insight generation',
        '45% improvement in sales forecasting accuracy',
        'Real-time trend identification',
        'Natural language report generation'
      ],
      technologies: ['GPT-4', 'Pandas', 'Streamlit', 'SQL', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'LLM Applications'
    },
    {
      title: 'Invoice Extraction with Agentic AI',
      client: 'FinanceFlow Solutions',
      industry: 'Financial Services',
      challenge: 'Manual invoice processing causing delays and errors in accounts payable.',
      solution: 'Deployed agentic AI system for automated invoice data extraction and validation.',
      results: [
        '95% reduction in processing time',
        '99.5% extraction accuracy',
        '$200K annual cost savings',
        'Zero manual data entry required'
      ],
      technologies: ['OCR', 'Agentic AI', 'Document Processing', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      category: 'Automation'
    },
    {
      title: 'Product Recommendations using LLMs',
      client: 'ShopSmart Platform',
      industry: 'E-commerce',
      challenge: 'Low conversion rates due to generic product recommendations.',
      solution: 'Built personalized recommendation engine using advanced LLMs and user behavior analysis.',
      results: [
        '60% increase in conversion rates',
        '35% boost in average order value',
        '250% improvement in click-through rates',
        'Real-time personalization'
      ],
      technologies: ['LLMs', 'Collaborative Filtering', 'Vector Databases', 'React', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      category: 'LLM Applications'
    },
    {
      title: 'SQL Agent - Talk with Your Databases',
      client: 'DataDriven Enterprises',
      industry: 'Technology',
      challenge: 'Non-technical teams unable to query databases, creating bottlenecks for data access.',
      solution: 'Created natural language to SQL agent enabling anyone to query databases conversationally.',
      results: [
        '90% reduction in data request tickets',
        'Instant query responses',
        'No SQL knowledge required',
        '50+ different database queries daily'
      ],
      technologies: ['Natural Language Processing', 'SQL Generation', 'LangChain', 'PostgreSQL', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      category: 'Database AI'
    },
    {
      title: 'Synthetic Data Generation',
      client: 'AI Research Lab',
      industry: 'Research & Development',
      challenge: 'Limited training data availability due to privacy constraints and data scarcity.',
      solution: 'Developed advanced synthetic data generation platform for creating realistic training datasets.',
      results: [
        '1000x increase in available training data',
        '95% similarity to real data',
        'Privacy-compliant data generation',
        '60% improvement in model performance'
      ],
      technologies: ['GANs', 'Diffusion Models', 'Privacy Engineering', 'TensorFlow', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      category: 'Data Generation'
    },
    {
      title: 'Sales and Customer Assistant',
      client: 'SalesForce Pro',
      industry: 'Sales & Marketing',
      challenge: 'Sales teams struggling with customer relationship management and follow-up efficiency.',
      solution: 'Implemented AI-powered sales assistant for customer interaction and pipeline management.',
      results: [
        '45% increase in sales conversion',
        '70% improvement in follow-up rates',
        'Automated lead scoring',
        '24/7 customer query handling'
      ],
      technologies: ['Conversational AI', 'CRM Integration', 'Lead Scoring', 'WhatsApp API', 'Salesforce'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'Sales AI'
    }
  ];

  const categories = ['All', 'LLM Applications', 'Automation', 'Database AI', 'Data Generation', 'Sales AI'];
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
            Our <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Real-world AI implementations delivering measurable business impact 
            across industries and use cases.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-6 bg-background/50 pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "border-orange-400/50 text-white hover:bg-orange-500/20 glass-effect"
                } transition-all duration-300 hover:scale-105`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-500 border-white/10 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-orange-500/90 text-white rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 bg-red-500/90 text-white rounded-full text-xs font-medium">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-orange-300 mb-4 font-medium">{project.client}</p>
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
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs border border-cyan-500/30"
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
      <section className="py-20 px-6 pt-32 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Proven <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Consistent value delivery across all our projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '10+', label: 'Successful Deployments', image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=80&h=80&fit=crop' },
              { metric: '$50M+', label: 'Client Cost Savings', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop' },
              { metric: '95%', label: 'Average Accuracy', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop' },
              { metric: '6 Months', label: 'Average ROI Timeline', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=80&h=80&fit=crop' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up glass-effect p-6 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400 group-hover:border-red-400 transition-colors">
                  <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">{stat.metric}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join our growing list of successful AI implementations. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg hover-glow transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Start Your Project</Link>
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
    </div>
  );
};

export default Projects;
