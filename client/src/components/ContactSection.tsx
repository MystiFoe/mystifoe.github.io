import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  Linkedin,
  Github,
  Globe
} from "lucide-react";

// Custom Kaggle icon component
const KaggleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.493c0-.236.118-.353.354-.353h2.431c.234 0 .351.117.351.353v14.343l6.203-6.272c.165-.165.33-.248.495-.248h3.239c.144 0 .236.06.28.18.043.119.014.24-.088.36l-6.396 6.506 6.52 8.332c.139.184.164.29.085.386z"/>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Bengaluru, India",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "giritharanmani1@gmail.com",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8778451561",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mystifoe/",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/MystiFoe",
      bgColor: "bg-gray-600 hover:bg-gray-700",
      label: "GitHub"
    },
    {
      icon: KaggleIcon,
      href: "https://www.kaggle.com/mystifoe77",
      bgColor: "bg-blue-500 hover:bg-blue-600",
      label: "Kaggle"
    },
    {
      icon: Globe,
      href: "https://giritharanmani-portfolio.vercel.app",
      bgColor: "bg-green-600 hover:bg-green-700",
      label: "Portfolio"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Get Started</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your data into strategic decisions? Let's discuss how we can drive your business forward.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 ${social.bgColor} rounded-lg flex items-center justify-center text-white transition-colors`}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}