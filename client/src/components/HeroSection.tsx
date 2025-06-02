import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Building, Globe, Award, CheckCircle, Code, Database, Brain } from "lucide-react";
import profileImage from "@assets/1728054411169-removebg-preview.png";

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
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden cursor-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            {/* Main Header */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="typing-animation">Data to{" "}</span>
                <span className="text-green-400 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-matrix-glow">
                  Decisions
                </span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8 font-medium">
                <Code className="inline w-6 h-6 mr-2 text-green-400" />
                Coding Intelligence, Driving Impact
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-4 slide-up">
              <Card className="p-4 bg-gray-800/90 backdrop-blur-lg border border-green-500/20 hover:border-green-400/50 transition-all transform hover:scale-105 github-card-hover animate-cyber-pulse">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400 mb-1">
                    <AnimatedCounter target={5} suffix="+" />
                  </p>
                  <p className="text-xs text-gray-400">Companies</p>
                </div>
              </Card>

              <Card className="p-4 bg-gray-800/90 backdrop-blur-lg border border-blue-500/20 hover:border-blue-400/50 transition-all transform hover:scale-105 github-card-hover stagger-1">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-blue-500/20 text-blue-400 border-blue-400/50 text-xs px-2 py-1">Google Certified</Badge>
                  <p className="text-xs text-gray-400">BI Professional</p>
                </div>
              </Card>

              <Card className="p-4 bg-gray-800/90 backdrop-blur-lg border border-purple-500/20 hover:border-purple-400/50 transition-all transform hover:scale-105 github-card-hover stagger-2">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-purple-500/20 text-purple-400 border-purple-400/50 text-xs px-2 py-1">Global</Badge>
                  <p className="text-xs text-gray-400">UK, US, Korea</p>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="fade-in">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black px-8 py-4 text-lg transform hover:scale-105 transition-all shadow-xl rounded-xl font-semibold animate-matrix-glow"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Initialize Contact
              </Button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative slide-up">
            <div className="relative">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600/10 to-purple-600/10 rounded-3xl animate-pulse-subtle"></div>
              
              {/* Professional Image */}
              <div className="relative z-10 w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-green-500/30">
                <img 
                  src={profileImage} 
                  alt="Giritharan Mani - Data Analyst & AI Expert" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-gray-800 border border-green-500/50 rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">G</span>
                  </div>
                  <span className="text-sm font-medium text-green-400">Google Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gray-800 border border-yellow-500/50 rounded-lg shadow-lg p-3 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">AI Expert</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-gray-800 border border-blue-500/50 rounded-lg shadow-lg p-3 transform -translate-y-1/2 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Data Guru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
