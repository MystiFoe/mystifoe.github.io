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
      iconBg: "bg-blue-500",
      icon: "G"
    },
    {
      title: "President - ArtificGenix",
      subtitle: "Microsoft Learn Student Ambassador",
      organization: "ArtificGenix & Microsoft",
      description: "Spearheaded initiatives that blended technical knowledge with business insight. Worked with industry leaders to host events that emphasized real-world AI applications in business, fostering leadership and organizational impact across a community of 400+ students.",
      metrics: [
        { label: "Community Members", value: "400+", color: "text-purple-600" },
        { label: "Tech Events", value: "15+", color: "text-purple-600" }
      ],
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-500",
      icon: "A"
    }
  ];

  const internships = [
    {
      title: "AI Engineer Intern",
      company: "Allied Worldwide, Bengaluru",
      period: "February 2024 - Present",
      status: "Current",
      statusColor: "bg-green-100 text-green-800",
      description: "Designed intelligent automation tools to support business operations and sales efficiency. Streamlined lead generation by building an AI-powered LinkedIn outreach system, aligning technical automation with sales strategy. Saved 5+ hours/week for teams by automating reporting workflows using Python and SQL. Structured unorganized lead data from external sources, enhancing CRM efficiency and business decision-making.",
      metrics: [
        { label: "Saved per week", value: "5+ hrs", color: "text-blue-600" },
        { label: "Process efficiency", value: "65%", color: "text-green-600" }
      ],
      dotColor: "bg-green-500",
      side: "right"
    },
    {
      title: "ML Research Intern",
      company: "KNU, South Korea",
      period: "Dec 2024 - Present",
      status: "Research",
      statusColor: "bg-red-100 text-red-800",
      description: "Enhanced data pipelines through structured feature engineering, improving downstream analytics. Boosted ML model accuracy to support better forecasting—translating data patterns into actionable insights.",
      metrics: [
        { label: "Model accuracy boost", value: "15%", color: "text-red-600" },
        { label: "Research scope", value: "Global", color: "text-orange-600" }
      ],
      dotColor: "bg-red-500",
      side: "left"
    },
    {
      title: "Machine Learning Intern",
      company: "Kovan Labs, Coimbatore",
      period: "March 2023 - August 2024",
      status: "ML Focus",
      statusColor: "bg-purple-100 text-purple-800",
      description: "Reduced manual support load by 65% through RAG-based Llama model fine-tuning, enabling scalable AI integration. Collaborated with cross-functional stakeholders to ensure data relevance and model alignment with business goals.",
      metrics: [
        { label: "Support load reduction", value: "65%", color: "text-purple-600" },
        { label: "Model implementation", value: "RAG", color: "text-indigo-600" }
      ],
      dotColor: "bg-purple-500",
      side: "right"
    },
    {
      title: "Data Analyst Intern",
      company: "Lenovo, Pondicherry",
      period: "August 2022 - September 2022",
      status: "Foundation",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Automated complex data workflows, cutting reporting time by 30% and empowering faster decisions. Cleaned and processed high-volume production data, delivering insights via Tableau for internal business analysis.",
      metrics: [
        { label: "Reporting time saved", value: "30%", color: "text-yellow-600" },
        { label: "Visualization tool", value: "Tableau", color: "text-blue-600" }
      ],
      dotColor: "bg-yellow-500",
      side: "left"
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

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.bgColor} p-8 ${item.borderColor} hover:shadow-xl transition-all`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${item.iconBg} rounded-xl flex items-center justify-center`}>
                    <span className="text-white text-2xl font-bold">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    {item.subtitle && (
                      <p className="text-lg font-semibold text-gray-700 mb-2">{item.subtitle}</p>
                    )}
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-white rounded-lg p-3">
                          <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                          <p className="text-sm text-gray-600">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Internships</h3>
          
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
      </div>
    </section>
  );
}
