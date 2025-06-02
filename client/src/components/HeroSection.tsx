import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, TrendingUp, Building, Users } from "lucide-react";

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

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fade-in">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Data to{" "}
                <span className="text-blue-600">Decisions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">Digging Data, Driving Business Scale</p>
            </div>

            {/* Why Me Section */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why me</h2>
              <p className="text-gray-700 mb-4">
                I bring hands-on experience in AI, Data Science, and Business Analytics, delivering real impact for global clients across the UK, US, and South Korea. From optimizing machine learning models to automating reporting workflows, I help businesses turn data into strategic decisions that drive results.
              </p>
              <p className="text-gray-700">
                With certifications from Google in Business Intelligence and Data Analytics, and strong technical skills in Python, SQL, Tableau, and more, I'm equipped to contribute across data-driven and business-focused roles - whether full-time or as a consultant.
              </p>
            </div>
            
            {/* Interactive Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4 shadow-lg border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter target={4} />
                    </p>
                    <p className="text-sm text-gray-600">Companies</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 shadow-lg border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <AnimatedCounter target={300} />
                    </p>
                    <p className="text-sm text-gray-600">Students Mentored</p>
                  </div>
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
              <Button
                variant="outline"
                onClick={scrollToSkills}
                className="border-gray-300 text-gray-700 px-8 py-3 hover:bg-gray-50"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative slide-up">
            <div className="relative">
              {/* Data visualization background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl"></div>
              
              {/* Professional photo placeholder - using a professional data analyst image */}
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Professional data analyst portrait" 
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10" 
              />
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-pulse-subtle">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-sm font-medium">Google Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-pulse-subtle">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">ML Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
