import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Building, Globe, Award, CheckCircle, Code, Database, Brain } from "lucide-react";
import profileImage from "@assets/1728054411169-removebg-preview.png";
import alliedWorldwideImage from "@assets/Allied Worldwide.png";
import kovanLabsImage from "@assets/Kovan labs.png";
import knuImage from "@assets/KNU.png";
import lenovoImage from "@assets/lenovo.png";
import metresaImage from "@assets/Metresa.png";
import akshayaTexImage from "@assets/Akshaya Tex.png";

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

  const companyLogos = [
    { name: "Allied Worldwide", image: alliedWorldwideImage },
    { name: "Kovan Labs", image: kovanLabsImage },
    { name: "KNU", image: knuImage },
    { name: "Lenovo", image: lenovoImage },
    { name: "Metresa", image: metresaImage },
    { name: "Akshaya Tex", image: akshayaTexImage }
  ];

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden cursor-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            {/* Main Header */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Giritharan{" "}</span>
                <span className="text-blue-600 typing-animation">Mani</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                <Code className="inline w-6 h-6 mr-2 text-blue-600" />
                Digging Data, Driving Business Growth
              </p>
            </div>

            {/* CTA Button */}
            <div className="fade-in mb-8">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all shadow-xl rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Hire me
              </Button>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-4 slide-up">
              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all transform hover:scale-105 github-card-hover">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">worked with</p>
                  <p className="text-3xl font-bold text-blue-600 mb-1"><AnimatedCounter target={5} suffix="+" /></p>
                  <p className="text-xs text-gray-600">Companies</p>
                </div>
              </Card>

              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-green-200 hover:border-green-400 hover:shadow-xl transition-all transform hover:scale-105 github-card-hover stagger-1">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-green-100 text-green-800 border-green-300 text-xs px-2 py-1">Google Certified</Badge>
                  <p className="text-xs text-gray-600">Data Analytics & BI Professional</p>
                </div>
              </Card>

              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all transform hover:scale-105 github-card-hover stagger-2">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="mb-1 bg-purple-100 text-purple-800 border-purple-300 text-xs px-2 py-1">Global Experience</Badge>
                  <p className="text-xs text-gray-600">with clients: UK, US, Korea</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative slide-up flex justify-end">
            <div className="relative w-4/5 max-w-sm">
              {/* Professional Image */}
              <div className="relative z-10 w-full h-80 flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Data Analyst & AI Expert" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* "Data to Decisions" overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-blue-200 rounded-lg shadow-lg p-3">
                <span className="text-lg font-bold text-blue-600">Data to Decisions</span>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-orange-200 rounded-lg shadow-lg p-3 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600">AI Expert</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-white border border-green-200 rounded-lg shadow-lg p-3 transform -translate-y-1/2 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Strategy Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
