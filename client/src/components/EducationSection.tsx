import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";
import googleLogo from "@assets/Google.png";
import bduLogo from "@assets/BHARATHIDASAN-UNIVERSITY-Logo.png";
import alisonLogo from "@assets/alison.png";
import jsrecLogo from "@assets/JSREC.png";
import scmLogo from "@assets/SCM.png";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "Jai Shriram Engineering College",
      location: "Tirupur, Tamil Nadu, India",
      period: "2021 – 2025",
      grade: "CGPA: 8.43 / 10.0",
      achievements: [
        "Winner: AWS DeepRacer League (Top 1%)",
        "1st Place: National Project Presentation Competition",
        "Winner: Googleathon 2023 among 100+ teams",
        "1st Place: National-Level AI Stock Prediction Hackathon"
      ],
      type: "University",
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-500/30",
      logo: jsrecLogo
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "SCM Higher Secondary School",
      location: "Coimbatore, Tamil Nadu, India", 
      period: "2020 – 2021",
      grade: "Percentage: 91%",
      achievements: [
        "School First Rank Holder",
        "Recipient: Kamarajar Award by Tamil Nadu Government"
      ],
      type: "Higher Secondary",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-500/30",
      logo: scmLogo
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "SCM Higher Secondary School",
      location: "Coimbatore, Tamil Nadu, India",
      period: "2018 – 2019", 
      grade: "Percentage: 89%",
      achievements: [
        "School Topper and First Rank Holder",
        "NCC Cadet",
        "Winner: District-level Science Exhibition",
        "Kho-Kho Team Captain"
      ],
      type: "Secondary School",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-500/30",
      logo: scmLogo
    }
  ];

  const certifications = [
    { 
      name: "Data Analytics Professional Career Certification", 
      issuer: "Google", 
      logo: googleLogo, 
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      hoverBg: "hover:bg-blue-100"
    },
    { 
      name: "Business Intelligence Professional Career Certification", 
      issuer: "Google", 
      logo: googleLogo, 
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-400",
      hoverBg: "hover:bg-green-100"
    },
    { 
      name: "Certificate in Programming Techniques", 
      issuer: "Bharathidasan University (BDU)", 
      logo: bduLogo, 
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBorder: "hover:border-purple-400",
      hoverBg: "hover:bg-purple-100"
    },
    { 
      name: "Python for Data Science: From the Basics to Advanced", 
      issuer: "Alison", 
      logo: alisonLogo, 
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      hoverBg: "hover:bg-orange-100"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-300"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-50 z-10 shadow-lg"></div>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className={`p-6 bg-white backdrop-blur-lg border-2 ${edu.borderColor} hover:border-opacity-80 hover:shadow-xl transition-all github-card-hover cursor-glow slide-up`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <Badge className="bg-gray-100 text-gray-700 border-gray-300">{edu.type}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-600 mb-2">{edu.institution}</h4>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                      <span className="ml-4 text-blue-600 font-semibold">{edu.grade}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-gray-700">
                          <Award className="w-3 h-3 mr-2 text-orange-500" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="slide-up">
          <Card className="p-8 bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center justify-between p-4 ${cert.bgColor} ${cert.hoverBg} rounded-lg border ${cert.borderColor} ${cert.hoverBorder} hover:shadow-md transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex-1">
                    <h4 className={`font-semibold text-gray-900 text-sm group-hover:${cert.color} transition-colors duration-300`}>{cert.name}</h4>
                    <p className="text-gray-600 text-xs">{cert.issuer}</p>
                  </div>
                  <div className="ml-4 w-12 h-12 flex items-center justify-center group-hover:animate-pulse">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      className="w-10 h-10 object-contain group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}