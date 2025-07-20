import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  Calendar, 
  TrendingUp, 
  Award,
  MapPin,
  Clock
} from "lucide-react";
import akshayaTexImage from "@assets/Akshaya Tex.png";
import metresaImage from "@assets/Metresa.png";
import gdscLogo from "@assets/gdsc.png";
import mlsaLogo from "@assets/MLSA.png";
import artificgenixLogo from "@assets/Artificgenix.png";

export default function ExperienceSection() {
  const leadership = [
    {
      title: "Google Developer Student Clubs Lead",
      organization: "Google",
      description: "Led a 30-member team focused on democratizing AI and cloud technologies. Orchestrated large-scale tech events, including GDSC WOW Tamil Nadu, to bridge the gap between technical innovation and entrepreneurial application. Empowered 300+ students to see AI not just as code, but as business transformation.",
      metrics: [
        { label: "Students Empowered", value: "300+", color: "text-blue-600" },
        { label: "Team Members", value: "30", color: "text-blue-600" }
      ],
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      logo: gdscLogo
    },
    {
      title: "Microsoft Learn Student Ambassador",
      organization: "Microsoft",
      description: "Educated peers on data analysis and AI through workshops and global collaborations. Translated complex technical concepts into business-relevant skills, helping students and startups alike adopt a more strategic mindset towards technology.",
      metrics: [
        { label: "Workshops Conducted", value: "20+", color: "text-blue-600" },
        { label: "Global Reach", value: "500+", color: "text-green-600" }
      ],
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      logo: mlsaLogo
    },
    {
      title: "President - ArtificGenix",
      organization: "ArtificGenix",
      description: "Spearheaded initiatives that blended technical knowledge with business insight. Worked with industry leaders to host events that emphasized real-world AI applications in business, fostering leadership and organizational impact across a community of 400+ students.",
      metrics: [
        { label: "Community Members", value: "400+", color: "text-purple-600" },
        { label: "Tech Events", value: "15+", color: "text-purple-600" }
      ],
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      logo: artificgenixLogo
    }
  ];

  const internships = [
    {
      title: "AI Engineer Intern",
      company: "Allied Worldwide, Bengaluru",
      period: "February 2025 - Present",
      status: "Current",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      description: "Designed intelligent automation tools to support business operations and sales efficiency. Streamlined lead generation by building an AI-powered LinkedIn outreach system, aligning technical automation with sales strategy. Saved 5+ hours/week for teams by automating reporting workflows using Python and SQL. Structured unorganized lead data from external sources, enhancing CRM efficiency and business decision-making.",
      metrics: [
        { label: "Time Saved per Week", value: "5+ hrs", color: "text-blue-600" },
        { label: "Process Efficiency", value: "65%", color: "text-green-600" }
      ],
      dotColor: "bg-green-500",
      side: "right"
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Kovan Labs, Coimbatore",
      period: "March 2024 - August 2024",
      status: "ML Focus",
      statusColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      description: "Reduced manual support workload by 65% by fine-tuning Llama models using LLM-powered RAG systems. Ensured data integrity by validating datasets with engineers and product leads.",
      metrics: [
        { label: "Support Load Reduction", value: "65%", color: "text-purple-600" },
        { label: "Model Implementation", value: "RAG", color: "text-indigo-600" }
      ],
      dotColor: "bg-purple-500",
      side: "left"
    },
    {
      title: "Research Intern",
      company: "Kyungpook National University, South Korea",
      period: "Dec 2022 - Jan 2023",
      status: "Research",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      description: "Enhanced datasets through data preparation and feature engineering. Improved classification model accuracy and interpretability by analyzing structured data patterns.",
      metrics: [
        { label: "Model Accuracy Boost", value: "15%", color: "text-red-600" },
        { label: "Research Scope", value: "Global", color: "text-orange-600" }
      ],
      dotColor: "bg-red-500",
      side: "right"
    },
    {
      title: "Data Analyst Intern",
      company: "Lenovo, Pondicherry",
      period: "August 2022",
      status: "Foundation",
      statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      description: "Processed and cleaned large-scale operational data using Excel and Python. Automated manual data workflows, reducing reporting time by 30%. Identified data relationships within manufacturing reports to support internal analysis using Tableau.",
      metrics: [
        { label: "Reporting Time Saved", value: "30%", color: "text-yellow-600" },
        { label: "Visualization Tool", value: "Tableau", color: "text-blue-600" }
      ],
      dotColor: "bg-yellow-500",
      side: "left"
    }
  ];

  const freelanceWork = [
    {
      title: "Data Analytics Consultant",
      company: "Akshaya Tex, Tiruppur",
      logo: akshayaTexImage,
      period: "2024",
      description: "Collected and analyzed manufacturing data for textile industry. Created comprehensive data visualizations and helped navigate business growth through data-driven decisions for cotton cloth and inner garment manufacturing.",
      metrics: [
        { label: "Business Impact", value: "High", color: "text-green-600" },
        { label: "Industry", value: "Textile", color: "text-blue-600" }
      ]
    },
    {
      title: "Business Intelligence Analyst",
      company: "Metresa ITech Solutions",
      logo: metresaImage,
      period: "2024",
      description: "Analyzed business data for stealth startup and provided strategic business solutions based on data insights. Delivered actionable recommendations for business optimization and growth strategies.",
      metrics: [
        { label: "Solutions Delivered", value: "5+", color: "text-purple-600" },
        { label: "Startup Type", value: "Stealth", color: "text-indigo-600" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual timeline showcasing global internships, leadership roles, and impact metrics
          </p>
        </div>

        {/* Internships Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div key={index} className="relative flex items-center">
                  {internship.side === "right" ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <Card className="p-6 shadow-lg border-gray-100 hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-end space-x-3 mb-3">
                            <Badge className={internship.statusColor}>{internship.status}</Badge>
                            <h4 className="text-lg font-bold text-gray-900">{internship.title}</h4>
                          </div>
                          <div className="flex items-center justify-end space-x-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600">{internship.company}</p>
                          </div>
                          <p className="text-sm text-gray-700 mb-4 text-left">{internship.description}</p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {internship.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="bg-gray-50 rounded-lg p-2">
                                <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                                <p className="text-xs text-gray-600">{metric.label}</p>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>
                      
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${internship.dotColor} rounded-full border-4 border-white shadow`}></div>
                      
                      <div className="flex-1 pl-8">
                        <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{internship.period}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8">
                        <div className="flex items-center justify-end space-x-2 text-sm font-medium text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{internship.period}</span>
                        </div>
                      </div>
                      
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${internship.dotColor} rounded-full border-4 border-white shadow`}></div>
                      
                      <div className="flex-1 pl-8">
                        <Card className="p-6 shadow-lg border-gray-100 hover:shadow-xl transition-shadow">
                          <div className="flex items-center space-x-3 mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{internship.title}</h4>
                            <Badge className={internship.statusColor}>{internship.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600">{internship.company}</p>
                          </div>
                          <p className="text-sm text-gray-700 mb-4">{internship.description}</p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {internship.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="bg-gray-50 rounded-lg p-2">
                                <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                                <p className="text-xs text-gray-600">{metric.label}</p>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Freelance Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {freelanceWork.map((work, index) => (
              <Card key={index} className="p-6 shadow-lg border-gray-100 bg-white hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="flex-1 pr-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{work.title}</h4>
                      <p className="text-gray-600 mb-2">{work.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{work.period}</p>
                    </div>
                    <p className="text-gray-700 mb-4 text-justify">{work.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {work.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-50 rounded-lg p-3">
                          <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-32 flex-shrink-0 flex items-start">
                    <img 
                      src={work.logo} 
                      alt={`${work.company} logo`}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.bgColor} p-6 ${item.borderColor} hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 p-2">
                    <img 
                      src={item.logo} 
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-white/80 rounded-lg p-2">
                          <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                          <p className="text-xs text-gray-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
