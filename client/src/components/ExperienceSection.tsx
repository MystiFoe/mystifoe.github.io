import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import pravaigImage from "@assets/Pravaig.jpg";
import alliedWorldwideImage from "@assets/Allied Worldwide.png";
import kovanLabsImage from "@assets/Kovan labs.png";
import knuImage from "@assets/KNU.png";
import lenovoImage from "@assets/lenovo.png";
import gdscLogo from "@assets/gdsc.png";
import mlsaLogo from "@assets/MLSA.png";
import artificgenixLogo from "@assets/Artificgenix.png";

export default function ExperienceSection() {
  const internships = [
    {
      title: "Product Engineer — AI & Workflow Systems",
      company: "Pravaig Dynamics, Bengaluru",
      period: "September 2025 – Present",
      status: "Current",
      statusColor: "bg-green-100 text-green-800",
      description: "Sole PM across the organisation — shipped 5+ production AI systems including a Manufacturing Execution System (MES), ERP, and agentic AI workflows. Built RAG pipelines, LLM agents, and automation systems using LangChain and Claude API. Integrated Razorpay subscription payment API end-to-end in production. Reduced operational workload by 65% through AI automation contributing to ~₹2 Cr in enterprise client acquisition.",
      metrics: [
        { label: "Production Systems Shipped", value: "5+", color: "text-blue-600" },
        { label: "Enterprise Impact", value: "~₹2 Cr", color: "text-green-600" }
      ],
      dotColor: "bg-blue-600",
      side: "right",
      logo: pravaigImage,
      logoBg: "bg-gray-800"
    },
    {
      title: "AI Engineer Intern",
      company: "Allied Worldwide, Bengaluru",
      period: "February 2025 – August 2025",
      status: "AI Focus",
      statusColor: "bg-blue-100 text-blue-800",
      description: "Built AI-powered LinkedIn outreach automation system using LangChain and Claude API. Automated reporting workflows saving 5+ hours/week. Contributed to ~₹2 Cr in enterprise client acquisition through intelligent lead generation.",
      metrics: [
        { label: "Time Saved/Week", value: "5+ hrs", color: "text-blue-600" },
        { label: "Client Acquisition", value: "~₹2 Cr", color: "text-green-600" }
      ],
      dotColor: "bg-green-500",
      side: "left",
      logo: alliedWorldwideImage,
      logoBg: ""
    },
    {
      title: "Product Manager Intern",
      company: "Kovan Labs, Coimbatore",
      period: "March 2024 – August 2024",
      status: "PM Focus",
      statusColor: "bg-purple-100 text-purple-800",
      description: "Led end-to-end PM delivery for a RAG-based LLM platform for US enterprise clients. Owned discovery, PRD writing, sprint planning, UAT, and production sign-off. Reduced client manual support workload by 65% within 6 months.",
      metrics: [
        { label: "Workload Reduction", value: "65%", color: "text-purple-600" },
        { label: "Platform", value: "RAG + LLM", color: "text-indigo-600" }
      ],
      dotColor: "bg-purple-500",
      side: "right",
      logo: kovanLabsImage,
      logoBg: ""
    },
    {
      title: "Machine Learning Research Intern",
      company: "Kyungpook National University, South Korea",
      period: "Dec 2022 – Jan 2023",
      status: "Research",
      statusColor: "bg-red-100 text-red-800",
      description: "Enhanced datasets through data preparation and feature engineering. Improved classification model accuracy and interpretability by analysing structured data patterns.",
      metrics: [
        { label: "Model Accuracy Boost", value: "15%", color: "text-red-600" },
        { label: "Research Scope", value: "Global", color: "text-orange-600" }
      ],
      dotColor: "bg-red-500",
      side: "left",
      logo: knuImage,
      logoBg: ""
    },
    {
      title: "Data Analyst Intern",
      company: "Lenovo, Pondicherry",
      period: "August 2022",
      status: "Foundation",
      statusColor: "bg-yellow-100 text-yellow-800",
      description: "Processed and cleaned large-scale operational data using Excel and Python. Automated manual data workflows reducing reporting time by 30%.",
      metrics: [
        { label: "Reporting Time Saved", value: "30%", color: "text-yellow-600" },
        { label: "Visualisation", value: "Tableau", color: "text-blue-600" }
      ],
      dotColor: "bg-yellow-500",
      side: "right",
      logo: lenovoImage,
      logoBg: ""
    }
  ];

  const freelanceWork = [
    {
      title: "Flutter App Developer — Gym Management SaaS",
      company: "Recurva",
      website: "https://recurva.in/",
      period: "2025 – Present",
      description: "Built a full gym management application for Recurva with Owner and Trainer flows. Features include member retention tracking, attendance management, subscription billing, and performance dashboards. Full PM ownership — architecture, sprint planning, UI design, and backend integration.",
      metrics: [
        { label: "Flows Built", value: "Owner + Trainer", color: "text-green-600" },
        { label: "Status", value: "Live", color: "text-blue-600" }
      ],
      badgeBg: "bg-emerald-600"
    },
    {
      title: "Landing Page Developer",
      company: "Prathik Softnet",
      website: "https://www.prathiksoftnet.com/",
      period: "2024",
      description: "Designed and developed the full company landing page for Prathik Softnet. Handled UI/UX design, responsive development, content strategy, and deployment. Live at prathiksoftnet.com.",
      metrics: [
        { label: "Deliverable", value: "Live Website", color: "text-blue-600" },
        { label: "Type", value: "Full-stack", color: "text-purple-600" }
      ],
      badgeBg: "bg-blue-700"
    }
  ];

  const leadership = [
    {
      title: "Google Developer Student Clubs Lead",
      organization: "Google",
      description: "Led a 30-member team focused on democratising AI and cloud technologies. Orchestrated large-scale tech events including GDSC WOW Tamil Nadu. Empowered 300+ students to apply AI as business transformation.",
      metrics: [
        { label: "Students Empowered", value: "300+", color: "text-blue-600" },
        { label: "Team Members", value: "30", color: "text-blue-600" }
      ],
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      logo: gdscLogo
    },
    {
      title: "Microsoft Learn Student Ambassador",
      organization: "Microsoft",
      description: "Educated peers on data analysis and AI through workshops and global collaborations. Helped students and startups adopt a strategic mindset towards technology.",
      metrics: [
        { label: "Workshops", value: "20+", color: "text-blue-600" },
        { label: "Global Reach", value: "500+", color: "text-green-600" }
      ],
      bgColor: "from-slate-50 to-gray-100",
      borderColor: "border-gray-200",
      logo: mlsaLogo
    },
    {
      title: "President — ArtificGenix",
      organization: "ArtificGenix",
      description: "Spearheaded initiatives blending AI knowledge with business insight. Hosted events emphasising real-world AI applications across a community of 400+ students.",
      metrics: [
        { label: "Community Members", value: "400+", color: "text-purple-600" },
        { label: "Tech Events", value: "15+", color: "text-purple-600" }
      ],
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      logo: artificgenixLogo
    }
  ];

  const ExperienceCard = ({ item }: { item: typeof internships[0] }) => (
    <Card className="p-6 shadow-lg border-gray-100 hover:shadow-xl transition-shadow">
      {/* Logo + Badge + Title row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden ${item.logoBg} border border-gray-100`}>
            <img src={item.logo} alt={item.company} className="w-full h-full object-contain p-1" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={item.statusColor}>{item.status}</Badge>
              <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span>{item.company}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">{item.description}</p>
      <div className="grid grid-cols-2 gap-3">
        {item.metrics.map((metric, mi) => (
          <div key={mi} className="bg-gray-50 rounded-lg p-2">
            <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
            <p className="text-xs text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual timeline showcasing experience, freelance work, and leadership
          </p>
        </div>

        {/* Alternating Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Experience</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {internships.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {item.side === "right" ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <ExperienceCard item={item} />
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.dotColor} rounded-full border-4 border-white shadow z-10`}></div>
                      <div className="flex-1 pl-8">
                        <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8">
                        <div className="flex items-center justify-end space-x-2 text-sm font-medium text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.dotColor} rounded-full border-4 border-white shadow z-10`}></div>
                      <div className="flex-1 pl-8">
                        <ExperienceCard item={item} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Freelance Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {freelanceWork.map((work, index) => (
              <Card key={index} className="p-6 shadow-lg border-gray-100 bg-white hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-20 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${work.badgeBg}`}>
                    <span className="text-white font-bold text-xs text-center px-1">{work.company}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{work.title}</h4>
                    <a href={work.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">{work.website}</a>
                    <p className="text-gray-500 text-sm">{work.period}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">{work.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {work.metrics.map((metric, mi) => (
                    <div key={mi} className="bg-gray-50 rounded-lg p-2">
                      <p className={`text-sm font-bold ${metric.color}`}>{metric.value}</p>
                      <p className="text-xs text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.bgColor} p-6 ${item.borderColor} hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 p-2">
                    <img src={item.logo} alt={item.organization} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {item.metrics.map((metric, mi) => (
                      <div key={mi} className="bg-white/80 rounded-lg p-2">
                        <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
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
