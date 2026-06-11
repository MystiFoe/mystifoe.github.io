import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Globe,
  CheckCircle,
  Code,
  Calendar,
  Zap,
  TrendingUp,
} from "lucide-react";
import profileImage from "@assets/1728054411169-removebg-preview.png";

declare global {
  interface Window {
    Calendly: any;
  }
}

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

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Giritharan Mani";
  
  useEffect(() => {
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <span>
      <span className="text-gray-900">
        {displayText.includes("Giritharan") ? "Giritharan " : displayText}
      </span>
      {displayText.length > 11 && (
        <span className="text-blue-600">{displayText.slice(11)}</span>
      )}
      {showCursor && displayText.length < fullText.length && (
        <span className="animate-pulse text-blue-600">|</span>
      )}
    </span>
  );
}

export default function HeroSection() {
  const calendlyUrl = "https://calendly.com/giritharanmani1";

  const handleHireMeClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank');
    }
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-[1.8fr_1.2fr] gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <TypingAnimation />
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-2">
                AI Product Manager · Product Engineer
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Building production AI systems end-to-end — LangChain, Claude API, RAG, agentic workflows.
                Sole PM at Pravaig Dynamics · 5+ live products · 50+ DAU
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 px-3 py-1">LangChain</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-300 px-3 py-1">Claude API</Badge>
                <Badge className="bg-green-100 text-green-800 border-green-300 px-3 py-1">RAG Systems</Badge>
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 px-3 py-1">Product Management</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300 px-3 py-1">SQL · Python</Badge>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <Button
                onClick={handleHireMeClick}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all shadow-xl rounded-xl font-semibold"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open("https://linkedin.com/in/mystifoe", "_blank")}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl font-semibold"
              >
                LinkedIn
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Production AI Systems</p>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-xs px-2 py-1">
                    <AnimatedCounter target={5} suffix="+ Shipped" />
                  </Badge>
                </div>
              </Card>
              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-green-200 hover:border-green-400 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Enterprise Acquisition</p>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-xs px-2 py-1">
                    ~₹2 Cr Impact
                  </Badge>
                </div>
              </Card>
              <Card className="p-4 bg-white/90 backdrop-blur-lg border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Workload Reduced</p>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-300 text-xs px-2 py-1">
                    65% via AI
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative flex justify-end">
            <div className="relative w-4/5 max-w-sm">
              <div className="relative z-10 w-full h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={profileImage}
                  alt="Giritharan Mani — AI Product Manager"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-2 -left-8 bg-white/95 backdrop-blur-sm border border-blue-200 rounded-lg shadow-lg p-3 animate-pulse">
                <span className="text-sm font-bold text-blue-600">Open to PM Roles</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border border-orange-200 rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600">AI Builder</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white border border-green-200 rounded-lg shadow-lg p-3 transform -translate-y-1/2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Google PM Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
