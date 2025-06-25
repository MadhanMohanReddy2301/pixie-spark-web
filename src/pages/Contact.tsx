
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
      type: 'Email - Madhan Reddy',
      value: 'madhanreddy@pixieai.in',
      description: 'Co-founder & AI Solutions Lead',
      icon: '📧',
      link: 'mailto:madhanreddy@pixieai.in'
    },
    {
      type: 'Email - Pavan Reddy',
      value: 'pavanreddy@pixieai.in',
      description: 'Co-founder & Technical Lead',
      icon: '📧',
      link: 'mailto:pavanreddy@pixieai.in'
    },
    {
      type: 'Phone',
      value: '+91 8106255668',
      description: 'Business hours: 9 AM - 6 PM IST',
      icon: '📞',
      link: 'tel:+918106255668'
    },
    {
      type: 'Phone',
      value: '+91 9381054019',
      description: 'Alternative contact number',
      icon: '📞',
      link: 'tel:+919381054019'
    }
  ];

  const faqs = [
    {
      question: 'How can AI agents help my business?',
      answer: 'Our AI agents can automate customer support, handle inquiries on WhatsApp and social media, process data analysis tasks, and integrate with your existing databases for natural language queries.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve FinTech, Healthcare, Retail, EdTech, and more. Our solutions are adaptable to any industry requiring intelligent automation and AI integration.'
    },
    {
      question: 'Can you integrate AI with our existing databases?',
      answer: 'Yes! We build database integrations that allow you to query your data using natural language - no SQL knowledge required. Just ask questions and get insights.'
    },
    {
      question: 'Do you build MCP servers for agentic AI systems?',
      answer: 'Absolutely! We specialize in building MCP (Model Context Protocol) servers and integrating them with agentic AI systems for enhanced functionality and interoperability.'
    },
    {
      question: 'How do you handle WhatsApp and social media integrations?',
      answer: 'We are experts in integrating customer support agents with WhatsApp, Facebook Messenger, and other social media platforms, providing seamless automated customer experiences.'
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
            Ready to transform your business with Agentic AI, LLMs, and intelligent automation? 
            Let's discuss how we can solve your real-world business challenges.
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
                          placeholder="+91 98765 43210"
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
                            <SelectItem value="ai-agents">AI Agents & Copilots</SelectItem>
                            <SelectItem value="llm-apps">Custom LLM Applications</SelectItem>
                            <SelectItem value="social-integration">WhatsApp/Social Media Integration</SelectItem>
                            <SelectItem value="database-ai">Database AI Integration</SelectItem>
                            <SelectItem value="mcp-servers">MCP Server Development</SelectItem>
                            <SelectItem value="data-analysis">Excel Data Analysis AI</SelectItem>
                            <SelectItem value="automation">Process Automation</SelectItem>
                            <SelectItem value="consulting">AI Consulting</SelectItem>
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
                            <SelectItem value="10k-25k">₹10K - ₹25K</SelectItem>
                            <SelectItem value="25k-50k">₹25K - ₹50K</SelectItem>
                            <SelectItem value="50k-100k">₹50K - ₹1L</SelectItem>
                            <SelectItem value="100k-250k">₹1L - ₹2.5L</SelectItem>
                            <SelectItem value="250k+">₹2.5L+</SelectItem>
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
                          <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="2-3-months">2-3 Months</SelectItem>
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
                        placeholder="Tell us about your business challenges, automation needs, or AI integration requirements..."
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
                    We're here to bridge the gap between cutting-edge AI and practical business outcomes. 
                    Reach out to discuss how our agentic AI solutions can transform your operations.
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
                      For urgent AI automation needs, please call us directly.
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
              Common questions about our AI solutions and integration services
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
            Transform your business with intelligent AI solutions that work in the real world. 
            Let's discuss your automation and AI integration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg hover-glow"
              onClick={() => window.open('mailto:madhanreddy@pixieai.in', '_blank')}
            >
              Email Us Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg glass-effect"
              onClick={() => window.open('tel:+918106255668', '_blank')}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
