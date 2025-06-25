
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'hello@pixieai.com',
      description: 'For general inquiries and partnerships',
      icon: '📧',
      link: 'mailto:hello@pixieai.com'
    },
    {
      type: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Business hours: 9 AM - 6 PM PST',
      icon: '📞',
      link: 'tel:+15551234567'
    },
    {
      type: 'Address',
      value: '123 AI Innovation Drive, San Francisco, CA 94105',
      description: 'Our headquarters in the heart of Silicon Valley',
      icon: '📍',
      link: 'https://maps.google.com'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/company/pixie-ai',
      description: 'Follow us for AI insights and updates',
      icon: '💼',
      link: 'https://linkedin.com/company/pixie-ai'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical AI project take?',
      answer: 'Project timelines vary based on complexity, but most implementations take 2-6 months from concept to deployment.'
    },
    {
      question: 'What is the minimum budget for an AI project?',
      answer: 'Our projects typically start at $50K for smaller implementations, with enterprise solutions ranging from $200K+.'
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and continuous optimization.'
    },
    {
      question: 'Can you work with our existing technology stack?',
      answer: 'Absolutely! We specialize in integrating AI solutions with existing systems and can work with most technology stacks.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get in <span className="magic-text">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to transform your business with AI? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Start Your <span className="magic-text">AI Journey</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Company
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Company Name"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Service Interested In
                        </label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                            <SelectItem value="llm-development">LLM App Development</SelectItem>
                            <SelectItem value="multimodal-ai">Multi-Modal AI</SelectItem>
                            <SelectItem value="automation">Intelligent Automation</SelectItem>
                            <SelectItem value="custom-ai">Custom AI Models</SelectItem>
                            <SelectItem value="not-sure">Not Sure / Multiple</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Project Budget
                        </label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k+">$500K+</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Project Timeline
                      </label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="When do you want to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="6-12-months">6-12 Months</SelectItem>
                          <SelectItem value="just-exploring">Just Exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, challenges, and goals..."
                        rows={4}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 py-4 text-lg hover-glow"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Let's <span className="magic-text">Connect</span>
                  </h2>
                  <p className="text-foreground/80 mb-8">
                    We're here to answer your questions and help you explore the possibilities 
                    of AI for your business. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index} 
                      className="glass-effect hover-glow transition-all duration-300 border-white/10 cursor-pointer"
                      onClick={() => window.open(info.link, '_blank')}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{info.icon}</div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{info.type}</h3>
                            <p className="text-blue-300 mb-1">{info.value}</p>
                            <p className="text-foreground/70 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Response Time */}
                <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-3 flex items-center">
                      <span className="mr-2">⚡</span>
                      Quick Response Guarantee
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      We respond to all inquiries within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="magic-text">Questions</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Common questions about our AI solutions and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-glow transition-all duration-300 border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start <span className="magic-text">Building</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Don't wait for the future of AI - create it with us today. 
            Schedule a free consultation to discuss your project.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg hover-glow"
            onClick={() => window.open('https://calendly.com/pixieai', '_blank')}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
