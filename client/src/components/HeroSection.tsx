import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Building, Globe, Award, CheckCircle } from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            {/* Main Header */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Data to{" "}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Decisions
                </span>
              </h1>
              <p className="text-2xl text-gray-600 mb-8 font-medium">Digging Data, Driving Business Scale</p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-4 slide-up">
              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter target={5} suffix="+" />
                  </p>
                  <p className="text-xs text-gray-600">Companies</p>
                </div>
              </Card>

              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-1">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-green-100 text-green-800 text-xs px-2 py-1">Google Certified</Badge>
                  <p className="text-xs text-gray-600">BI Professional</p>
                </div>
              </Card>

              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-purple-100 text-purple-800 text-xs px-2 py-1">Global</Badge>
                  <p className="text-xs text-gray-600">UK, US, Korea</p>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="fade-in">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all shadow-xl rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Let's Talk
              </Button>
            </div>

            {/* Why Me Section */}
            <Card className="bg-blue-50/90 p-6 border border-blue-100 backdrop-blur-lg slide-up rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why me</h2>
              <div className="space-y-4 text-left">
                <p className="text-gray-700 leading-relaxed">
                  I bring hands-on experience in AI, Data Science, and Business Analytics, delivering real impact for global clients across the UK, US, and South Korea. From optimizing machine learning models to automating reporting workflows, I help businesses turn data into strategic decisions that drive results.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With certifications from Google in Business Intelligence and Data Analytics, and strong technical skills in Python, SQL, Tableau, and more, I'm equipped to contribute across data-driven and business-focused roles - whether full-time or as a consultant.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right Image Section */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl animate-pulse-subtle"></div>
              
              {/* Professional Image Placeholder */}
              <div className="relative z-10 w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">GM</span>
                  </div>
                  <p className="text-lg font-semibold">Professional Photo</p>
                  <p className="text-sm">Giritharan Mani</p>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-sm font-medium">Google Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">AI Expert</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-100 transform -translate-y-1/2 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
