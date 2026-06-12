import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  BarChart3, 
  Bot, 
  Battery, 
  Users
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Manufacturing Execution System (MES) — Pravaig Dynamics",
      description: "End-to-end production monitoring system for EV manufacturing. Real-time tracking of battery assembly, quality checkpoints, and operational KPIs. Includes Hioki BT3562A battery tester integration via TCP. Shipped as a Streamlit-based internal platform serving the factory floor.",
      technologies: ["Python", "Streamlit", "TCP Integration", "SQL", "Real-time Dashboards"],
      icon: Battery,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      metrics: [
        { label: "Daily Active Users", value: "50+", color: "text-orange-600" },
        { label: "Systems Integrated", value: "3+", color: "text-green-600" }
      ],
      githubUrl: "https://github.com/MystiFoe"
    },
    {
      title: "AI Agent — Enterprise Lead Generation System",
      description: "Agentic AI workflow built with LangChain and Claude API for automated LinkedIn outreach and lead qualification. Multi-step agent design with structured outputs, error handling, and CRM integration. Contributed to ~₹2 Cr in enterprise client acquisition within 2 months.",
      technologies: ["LangChain", "Claude API", "Python", "AI Agents", "Workflow Automation"],
      icon: Bot,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      metrics: [
        { label: "Enterprise Acquisition", value: "~₹2 Cr", color: "text-purple-600" },
        { label: "Time Saved/Week", value: "5+ hrs", color: "text-green-600" }
      ],
      githubUrl: "https://github.com/MystiFoe/Linkedin-retrieve"
    },
    {
      title: "RAG-Based Customer Support Platform — Kovan Labs",
      description: "Production RAG system for US enterprise clients using fine-tuned LLMs for automated, context-aware customer support. Built end-to-end — from data ingestion and chunking through vector retrieval and response generation. Reduced client manual support workload by 65%.",
      technologies: ["RAG", "LLMs", "Python", "Vector DB", "NLP"],
      icon: Bot,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      metrics: [
        { label: "Workload Reduction", value: "65%", color: "text-blue-600" },
        { label: "Query Automation", value: "68%", color: "text-green-600" }
      ],
      githubUrl: "https://github.com/MystiFoe/Customer-Support-Automation-using-RAG-Based-Bot"
    },
    {
      title: "Gym Management SaaS — Retention MVP",
      description: "Flutter-based gym management platform for client Aravind. Owner and Trainer flows with member retention tracking, attendance management, and payment integration. Full PM ownership — architecture, sprint planning, UI mockups, and backend design.",
      technologies: ["Flutter", "Product Management", "SaaS", "Retention Analytics", "Razorpay"],
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      metrics: [
        { label: "Flows Built", value: "2 MVP", color: "text-emerald-600" },
        { label: "Live Customers", value: "Active", color: "text-blue-600" }
      ],
      githubUrl: "https://github.com/MystiFoe"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Production AI systems, SaaS platforms, and PM-owned products shipped end-to-end
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className={`p-8 shadow-lg ${project.borderColor} ${project.bgColor} hover:shadow-xl transition-all transform hover:scale-105`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                      <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}