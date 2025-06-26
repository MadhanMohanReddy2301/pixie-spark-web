
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to create solutions that truly make a difference.',
      icon: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=80&h=80&fit=crop'
    },
    {
      title: 'Collaborative Growth',
      description: 'We believe in learning together, sharing knowledge, and growing as a unified team.',
      icon: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop'
    },
    {
      title: 'Real Impact',
      description: 'Every project we take on has the potential to transform businesses and improve lives.',
      icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop'
    },
    {
      title: 'Work-Life Balance',
      description: 'We support flexible working arrangements and prioritize the well-being of our team.',
      icon: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance-based bonuses and equity options.',
      icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=80&h=80&fit=crop'
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.',
      icon: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=80&h=80&fit=crop'
    },
    {
      title: 'Flexible Work Environment',
      description: 'Remote-first culture with flexible hours and modern workspace options.',
      icon: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=80&h=80&fit=crop'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.',
      icon: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop'
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and exploration of new AI technologies.',
      icon: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop'
    },
    {
      title: 'Team Building',
      description: 'Regular team events, retreats, and collaborative activities to build strong relationships.',
      icon: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=80&h=80&fit=crop'
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
            Be part of the AI revolution. Work with cutting-edge technologies while solving 
            real-world problems that matter.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Why <span className="magic-text">PixieAI</span>?
            </h2>
            <p className="text-xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Join a team that's passionate about AI innovation and making a real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-400">
                    <img src={value.icon} alt={value.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits & <span className="magic-text">Perks</span>
            </h2>
            <p className="text-xl text-foreground/80">
              We take care of our team so they can focus on what they love doing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-orange-400 flex-shrink-0">
                      <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                      <p className="text-foreground/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="magic-text">Culture</span>
              </h2>
              <p className="text-xl text-foreground/80 mb-8">
                We're building a company where brilliant minds can do their best work. 
                Our culture is built on trust, collaboration, and the shared belief that 
                AI can make the world a better place.
              </p>
              
              <div className="space-y-6">
                {[
                  'Remote-first with flexible working hours',
                  'Open communication and transparent decision-making',
                  'Continuous learning and professional growth',
                  'Diverse and inclusive environment',
                  'Emphasis on work-life balance',
                  'Innovation and experimentation encouraged'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 glass-effect">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: '3', label: 'Team Members' },
                    { metric: '100%', label: 'Remote Friendly' },
                    { metric: '5', label: 'Countries' },
                    { metric: '24/7', label: 'Support' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="magic-text">Join Us</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            We're always looking for talented individuals who are passionate about AI 
            and want to make a real difference. Even if we don't have an open position 
            that matches your skills right now, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 px-8 py-4 text-lg hover-glow"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-orange-400/50 text-white hover:bg-orange-500/20 px-8 py-4 text-lg glass-effect"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
