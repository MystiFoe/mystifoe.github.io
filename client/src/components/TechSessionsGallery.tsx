import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

export default function TechSessionsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sessions = [
    {
      title: "AI & Machine Learning Workshop",
      event: "GDSC Tech Summit 2024",
      location: "Kyungpook National University",
      date: "March 2024",
      attendees: "150+",
      description: "Led a comprehensive workshop on AI fundamentals and practical ML implementation for students and professionals.",
      imageAlt: "AI Workshop Session 1"
    },
    {
      title: "Data Analytics Masterclass",
      event: "Microsoft Learn Student Ambassador Event",
      location: "Virtual Global Event",
      date: "February 2024",
      attendees: "300+",
      description: "Conducted an intensive session on data visualization techniques and business intelligence tools.",
      imageAlt: "Data Analytics Masterclass"
    },
    {
      title: "Business Intelligence Solutions",
      event: "ArtificGenix Tech Conference",
      location: "Chennai, India",
      date: "January 2024",
      attendees: "200+",
      description: "Presented advanced BI strategies and real-world case studies to industry professionals.",
      imageAlt: "Business Intelligence Conference"
    },
    {
      title: "Python for Data Science Bootcamp",
      event: "GDSC WOW Tamil Nadu",
      location: "Chennai, India",
      date: "December 2023",
      attendees: "500+",
      description: "Organized and led a 3-day intensive bootcamp covering Python, Pandas, and machine learning basics.",
      imageAlt: "Python Bootcamp Session"
    },
    {
      title: "AI in Business Strategy",
      event: "Global Tech Leadership Summit",
      location: "Seoul, South Korea",
      date: "November 2023",
      attendees: "100+",
      description: "Keynote presentation on implementing AI solutions for business transformation and decision-making.",
      imageAlt: "AI Business Strategy Talk"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sessions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sessions.length) % sessions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Sessions & Events</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading workshops, conferences, and educational events across the globe
          </p>
        </div>

        <div className="relative">
          {/* Main Gallery */}
          <Card className="p-8 bg-gray-900/90 backdrop-blur-lg border border-green-500/30 hover:border-green-400/50 transition-all cursor-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden border border-green-500/30 animate-matrix-glow">
                  <div className="text-center text-gray-400">
                    <Users className="w-16 h-16 mx-auto mb-4 text-green-400" />
                    <p className="text-lg font-semibold">{sessions[currentIndex].imageAlt}</p>
                    <p className="text-sm">Event Image Placeholder</p>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <Button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-green-400 border border-green-500/50 p-2 rounded-full"
                  size="sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-green-400 border border-green-500/50 p-2 rounded-full"
                  size="sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{sessions[currentIndex].title}</h3>
                  <h4 className="text-lg text-green-400 mb-4">{sessions[currentIndex].event}</h4>
                  <p className="text-gray-300 leading-relaxed">{sessions[currentIndex].description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    <span className="text-sm">{sessions[currentIndex].location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-sm">{sessions[currentIndex].date}</span>
                  </div>
                  <div className="flex items-center text-gray-400 col-span-2">
                    <Users className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-sm">{sessions[currentIndex].attendees} attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {sessions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-green-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Session Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 bg-gray-900/60 border border-blue-500/30 text-center hover:border-blue-400/50 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-blue-400 mb-1">1250+</p>
              <p className="text-gray-400 text-sm">Total Attendees</p>
            </Card>

            <Card className="p-6 bg-gray-900/60 border border-green-500/30 text-center hover:border-green-400/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-2xl font-bold text-green-400 mb-1">25+</p>
              <p className="text-gray-400 text-sm">Events Organized</p>
            </Card>

            <Card className="p-6 bg-gray-900/60 border border-purple-500/30 text-center hover:border-purple-400/50 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-purple-400 mb-1">5+</p>
              <p className="text-gray-400 text-sm">Countries</p>
            </Card>

            <Card className="p-6 bg-gray-900/60 border border-orange-500/30 text-center hover:border-orange-400/50 transition-all">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <p className="text-2xl font-bold text-orange-400 mb-1">95%</p>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}