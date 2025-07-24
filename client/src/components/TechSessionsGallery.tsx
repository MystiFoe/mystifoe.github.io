import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Calendar, MapPin, Bot, Database, BarChart3, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

// --- Import Images ---
// Import the images from the assets folder so they can be used in the component.
import wowImage1 from "@assets/WOW.jpg";
import wowImage2 from "@assets/GDSC WOW.jpg";
import wowImage3 from "@assets/gdsc wow3.jpg";
import seminarImage1 from "@assets/seminar 1.jpg";
import seminarImage2 from "@assets/seminar 2.jpg";
import seminarImage3 from "@assets/seminar 3.jpg";
import infoClgImage1 from "@assets/Info clg.jpg";
import infoClgImage2 from "@assets/info clg 2.jpg";
import infoClgImage3 from "@assets/info clg 3.jpg";
import gdscInfoImage1 from "@assets/GDSC Info 2.jpg";
import gdscInfoImage2 from "@assets/GDSC Info.jpg";
import gdscInfoImage3 from "@assets/gdsc info 11.jpg";
import googleathonImage1 from "@assets/Googleathon 1st.jpg";
import googleathonImage2 from "@assets/Googleathon group.jpg";
import googleathonImage3 from "@assets/Googleathon.jpg";
import deepracerImage from "@assets/Deepracer.jpg";


export default function TechSessionsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sessions = [
    {
      title: "GDSC WOW Tamil Nadu 2024 - Lead Organizer",
      event: "GDSC WOW Tamil Nadu 2024",
      location: "Coimbatore, Tamil Nadu",
      date: "2024",
      attendees: "500+",
      description: "Successfully organized the largest GDSC collaborative event in Tamil Nadu as GDSC Lead. Led a team of 15+ GDSC leads across Tamil Nadu, coordinated with industry speakers, and managed multiple sponsors. This flagship event marked the culmination of my GDSC leadership tenure with massive community impact.",
      images: [wowImage1, wowImage2, wowImage3],
      imageAlt: "GDSC WOW Tamil Nadu 2024 Organization"
    },
    {
      title: "Machine Learning Workshop - From Basics to Advanced",
      event: "GDSC Jai Shriram Engineering College",
      location: "Tirupur, Tamil Nadu", 
      date: "2024",
      attendees: "80+",
      description: "Conducted comprehensive hands-on ML workshop for students, covering practical implementation of machine learning models to solve complex real-world problems. Guided participants through the complete ML pipeline from data preprocessing to model deployment, with focus on practical navigation and problem-solving approaches.",
      images: [seminarImage1, seminarImage2, seminarImage3],
      imageAlt: "Machine Learning Workshop Session"
    },
    {
      title: "Public Speaking Debut - From Novice to Notable",
      event: "DevRise by GDG On Campus",
      location: "Info Institute of Engineering, Coimbatore",
      date: "2024",
      attendees: "150+",
      description: "Delivered my first major tech talk alongside industry leaders from Oracle and leading tech companies. Spoke about technology and personal growth to passionate students, marking a transformative milestone in my speaking journey. Connected with tech enthusiasts and inspired the next generation of developers.",
      images: [infoClgImage1, infoClgImage2, infoClgImage3],
      imageAlt: "DevRise Public Speaking Debut"
    },
    {
      title: "GDSC Info Session - Leading Community Vision",
      event: "GDSC Jai Shriram Engineering College Launch",
      location: "Jai Shriram Engineering College, Tirupur",
      date: "2024",
      attendees: "200+",
      description: "As GDSC Lead, presented the vision and roadmap for Google Developer Student Club at my college. Guided students through Google's developer ecosystem, ignited curiosity for innovation, and established the foundation for tech community building. Successfully launched GDSC chapter with strong student engagement and faculty support.",
      images: [gdscInfoImage1, gdscInfoImage2, gdscInfoImage3],
      imageAlt: "GDSC Info Session Leadership"
    },
    {
      title: "Googleathon 2023 - First Prize Winner",
      event: "Team Halus at Googleathon 2023",
      location: "SNS College of Engineering, Coimbatore",
      date: "September 2023",
      attendees: "35+ Teams",
      description: "Led my team to victory at the prestigious Googleathon, outshining 35+ remarkable teams to clinch the coveted FIRST PRIZE with cash reward. This achievement demonstrated exceptional problem-solving skills, leadership, and innovation under pressure. A testament to effective teamwork and technical excellence in competitive programming.",
      images: [googleathonImage1, googleathonImage2, googleathonImage3],
      imageAlt: "Googleathon 2023 First Prize Victory"
    },
    {
      title: "AWS DeepRacer 2.0 - Top 5 Achievement",
      event: "DeepRacer 2.0 by Amazon & KGiSL",
      location: "Coimbatore, Tamil Nadu",
      date: "2023",
      attendees: "Top 5 Finalist",
      description: "Led my team through the challenging DeepRacer 2.0 competition, successfully advancing from virtual simulations to physical racing rounds. Placed in the top 5 at the boot camp while gaining invaluable knowledge about machine learning, reinforcement learning, and AI applications in autonomous systems.",
      images: [deepracerImage],
      imageAlt: "AWS DeepRacer Top 5 Achievement"
    }
  ];

  // Auto-advance events every 10 seconds
  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sessions.length);
      setCurrentImageIndex(0);
    }, 10000);

    return () => clearInterval(eventTimer);
  }, [sessions.length]);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % sessions[currentIndex].images.length
      );
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [currentIndex, sessions]);

  // --- Event Navigation ---
  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % sessions.length);
    setCurrentImageIndex(0);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + sessions.length) % sessions.length);
    setCurrentImageIndex(0);
  };
  
  const goToEvent = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
  };

  // --- Image Navigation ---
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sessions[currentIndex].images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sessions[currentIndex].images.length) % sessions[currentIndex].images.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Speaking Engagements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading tech communities, organizing impactful events, and inspiring the next generation of developers
          </p>
        </div>

        <div className="relative">
          {/* Main Gallery */}
          <Card className="p-8 bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all cursor-glow">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Section with Navigation */}
              <div className="relative group">
                <div className="w-full h-64 lg:h-80 rounded-xl shadow-lg overflow-hidden border border-blue-200">
                  <img 
                    src={sessions[currentIndex].images[currentImageIndex]}
                    alt={sessions[currentIndex].imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out"
                  />
                </div>
                
                {/* Image Navigation Arrows */}
                {sessions[currentIndex].images.length > 1 && (
                  <>
                    <Button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-blue-600 border border-blue-300 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-blue-600 border border-blue-300 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      size="sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
                    {sessions[currentIndex].images.map((_, imgIndex) => (
                        <button
                            key={imgIndex}
                            onClick={() => setCurrentImageIndex(imgIndex)}
                            className={`h-2 w-2 rounded-full transition-all ${
                                imgIndex === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 flex-1">{sessions[currentIndex].title}</h3>
                    {/* Event Navigation Buttons */}
                    <div className="flex gap-2 ml-4">
                         <Button onClick={prevEvent} variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full bg-white/80 border-blue-200 hover:bg-blue-50"><ChevronLeft className="w-4 h-4 text-blue-600" /></Button>
                         <Button onClick={nextEvent} variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full bg-white/80 border-blue-200 hover:bg-blue-50"><ChevronRight className="w-4 h-4 text-blue-600" /></Button>
                    </div>
                  </div>
                  <h4 className="text-lg text-blue-600 mb-4">{sessions[currentIndex].event}</h4>
                  <p className="text-gray-700 leading-relaxed">{sessions[currentIndex].description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{sessions[currentIndex].location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-sm">{sessions[currentIndex].attendees} {sessions[currentIndex].title.includes('Googleathon') ? 'teams competed' : sessions[currentIndex].title.includes('DeepRacer') ? 'finalist' : 'people impacted'}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Event Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {sessions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToEvent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="p-6 bg-blue-50 border border-blue-200 text-center hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-1">1250+</p>
              <p className="text-gray-600 text-sm">Total Attendees</p>
            </Card>

            <Card className="p-6 bg-green-50 border border-green-200 text-center hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-green-600 mb-1">25+</p>
              <p className="text-gray-600 text-sm">Events Organized</p>
            </Card>

            <Card className="p-6 bg-purple-50 border border-purple-200 text-center hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-purple-600 mb-1">5+</p>
              <p className="text-gray-600 text-sm">Countries</p>
            </Card>

            <Card className="p-6 bg-orange-50 border border-orange-200 text-center hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-orange-600 mb-1">95%</p>
              <p className="text-gray-600 text-sm">Satisfaction Rate</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
