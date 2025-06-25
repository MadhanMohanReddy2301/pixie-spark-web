
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI applications and machine learning systems.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow/PyTorch',
        'Experience with LLMs and generative AI',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement AI solutions',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with AI research trends'
      ]
    },
    {
      title: 'Machine Learning Research Scientist',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Conduct research and develop novel machine learning algorithms and models.',
      requirements: [
        'PhD in Machine Learning, AI, or related field',
        'Publications in top-tier ML conferences',
        'Experience with deep learning frameworks',
        'Strong mathematical background'
      ],
      responsibilities: [
        'Research new ML techniques',
        'Publish findings in conferences',
        'Collaborate with engineering teams',
        'Prototype new algorithms'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Consulting',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design AI architectures and lead client implementation projects.',
      requirements: [
        'BS/MS in Engineering or Computer Science',
        'Experience in enterprise AI implementations',
        'Strong client-facing skills',
        'Cloud platforms expertise (AWS/Azure/GCP)'
      ],
      responsibilities: [
        'Design AI solution architectures',
        'Lead client engagements',
        'Provide technical leadership',
        'Ensure successful project delivery'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models.',
      requirements: [
        'MS in Data Science, Statistics, or related field',
        'Proficiency in Python/R and SQL',
        'Experience with data visualization tools',
        'Strong analytical and statistical skills'
      ],
      responsibilities: [
        'Analyze complex datasets',
        'Build predictive models',
        'Create data visualizations',
        'Collaborate with business teams'
      ]
    },
    {
      title: 'Frontend Developer (AI Products)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build intuitive user interfaces for AI-powered applications.',
      requirements: [
        'BS in Computer Science or equivalent',
        'Expert-level React/TypeScript skills',
        'Experience with AI/ML product interfaces',
        'Strong UX/UI design sensibilities'
      ],
      responsibilities: [
        'Develop responsive web applications',
        'Collaborate with AI engineers',
        'Optimize user experience',
        'Maintain high code quality'
      ]
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive business growth by identifying and closing AI solution opportunities.',
      requirements: [
        'MBA or equivalent business experience',
        'Experience selling enterprise technology',
        'Understanding of AI/ML technologies',
        'Strong relationship building skills'
      ],
      responsibilities: [
        'Identify new business opportunities',
        'Manage client relationships',
        'Collaborate with technical teams',
        'Meet revenue targets'
      ]
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Fitness reimbursement'
      ],
      icon: '🏥'
    },
    {
      category: 'Work-Life Balance',
      items: [
        'Flexible working hours',
        'Remote work options',
        'Unlimited PTO policy',
        '4-day work week options'
      ],
      icon: '⚖️'
    },
    {
      category: 'Growth & Development',
      items: [
        'Learning & development budget',
        'Conference attendance',
        'Internal mentorship program',
        'Career advancement paths'
      ],
      icon: '📚'
    },
    {
      category: 'Financial Benefits',
      items: [
        'Competitive salary',
        'Equity participation',
        '401(k) with matching',
        'Annual bonus potential'
      ],
      icon: '💰'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI',
      icon: '🚀'
    },
    {
      title: 'Collaboration',
      description: 'Great things happen when brilliant minds work together',
      icon: '🤝'
    },
    {
      title: 'Impact',
      description: 'Every project we work on makes a meaningful difference',
      icon: '🌟'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and their continuous development',
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Join Our <span className="magic-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Help us shape the future of AI. Work with cutting-edge technology, 
            brilliant minds, and make a real impact on businesses worldwide.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="magic-text">Culture</span>
            </h2>
            <p className="text-xl text-foreground/80">
              The values that drive us forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open <span className="magic-text">Positions</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Find your perfect role and grow with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                          {position.department}
                        </span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                          {position.type}
                        </span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                          {position.experience}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm mb-2">{position.location}</p>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6">{position.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-start">
                            <span className="mr-2 text-blue-400 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Responsibilities</h4>
                      <ul className="space-y-1">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-foreground/70 flex items-start">
                            <span className="mr-2 text-purple-400 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                    onClick={() => window.open(`mailto:careers@pixieai.com?subject=Application for ${position.title}`, '_blank')}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work at <span className="magic-text">PixieAI</span>?
            </h2>
            <p className="text-xl text-foreground/80">
              Comprehensive benefits designed for your success and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">{benefit.category}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-center">
                        <span className="mr-2 text-green-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Application <span className="magic-text">Process</span>
            </h2>
            <p className="text-xl text-foreground/80">
              A streamlined process designed to find the best fit for both sides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit your resume and cover letter through our portal',
                icon: '📝'
              },
              {
                step: '02',
                title: 'Screening',
                description: 'Initial review and phone/video screening with our team',
                icon: '📞'
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Technical and cultural fit interviews with team members',
                icon: '💬'
              },
              {
                step: '04',
                title: 'Decision',
                description: 'Final decision and offer discussion within one week',
                icon: '🎉'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Shape the <span className="magic-text">Future</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Don't see the perfect role? We're always looking for exceptional talent. 
            Send us your resume and let's talk about creating a position for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg hover-glow"
              onClick={() => window.open('mailto:careers@pixieai.com?subject=General Application', '_blank')}
            >
              Send General Application
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg glass-effect"
              onClick={() => window.open('mailto:careers@pixieai.com?subject=Internship Inquiry', '_blank')}
            >
              Internship Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
