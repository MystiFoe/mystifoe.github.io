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
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-12">
          {/* Main Header */}
          <div className="fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Data to{" "}
              <span className="text-blue-600 dark:text-blue-400">Decisions</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Digging Data, Driving Business Scale</p>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 slide-up">
            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  <AnimatedCounter target={5} suffix="+" />
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Companies Worked</p>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-center">
                <Badge className="mb-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Google Certified</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-300">Data Analyst & BI Professional</p>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="text-center">
                <Badge className="mb-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Global Experience</Badge>
                <p className="text-sm text-gray-600 dark:text-gray-300">UK, US, South Korea</p>
              </div>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="fade-in">
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-12 py-4 text-lg transform hover:scale-105 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Let's Talk
            </Button>
          </div>

          {/* Why Me Section */}
          <Card className="bg-blue-50/80 dark:bg-blue-900/20 p-8 border border-blue-100 dark:border-blue-800 backdrop-blur-lg slide-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why me</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I bring hands-on experience in AI, Data Science, and Business Analytics, delivering real impact for global clients across the UK, US, and South Korea. From optimizing machine learning models to automating reporting workflows, I help businesses turn data into strategic decisions that drive results.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With certifications from Google in Business Intelligence and Data Analytics, and strong technical skills in Python, SQL, Tableau, and more, I'm equipped to contribute across data-driven and business-focused roles - whether full-time or as a consultant.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
