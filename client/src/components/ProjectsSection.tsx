import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  Bot, 
  Battery, 
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered LinkedIn Lead Generation System",
      description: "Intelligent automation system that streamlines lead generation through data analytics and AI-powered outreach. Includes automated data collection, lead scoring, and personalized messaging capabilities.",
      technologies: ["Python", "AI/ML", "Data Analytics", "LinkedIn API"],
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      metrics: [
        { label: "Lead Quality", value: "85%", color: "text-blue-600" },
        { label: "Time Saved", value: "70%", color: "text-green-600" }
      ],
      githubUrl: "#"
    },
    {
      title: "Customer Support Automation using RAG-Based Bot",
      description: "Advanced customer support system using Retrieval-Augmented Generation (RAG) technology with fine-tuned language models for automated, context-aware customer interactions.",
      technologies: ["RAG", "LLMs", "NLP", "Python"],
      icon: Bot,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      metrics: [
        { label: "Response Accuracy", value: "92%", color: "text-purple-600" },
        { label: "Resolution Rate", value: "65%", color: "text-green-600" }
      ],
      githubUrl: "#"
    },
    {
      title: "Production Data Analysis & Visualization Dashboard",
      description: "Comprehensive business intelligence dashboard for manufacturing operations with real-time data processing, trend analysis, and interactive visualizations for decision-making.",
      technologies: ["Tableau", "Power BI", "SQL", "Python"],
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      metrics: [
        { label: "Data Processing", value: "Real-time", color: "text-emerald-600" },
        { label: "Efficiency Gain", value: "40%", color: "text-blue-600" }
      ],
      githubUrl: "#"
    },
    {
      title: "Lithium Battery RUL Prediction Dashboard",
      description: "Machine learning-powered Remaining Useful Life (RUL) prediction system for electric vehicle batteries with advanced analytics and predictive maintenance capabilities.",
      technologies: ["Machine Learning", "IoT", "Predictive Analytics", "Dashboard"],
      icon: Battery,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      metrics: [
        { label: "Prediction Accuracy", value: "94%", color: "text-orange-600" },
        { label: "Cost Savings", value: "32%", color: "text-green-600" }
      ],
      githubUrl: "#"
    },
    {
      title: "Business Forecast Dashboard",
      description: "Advanced business forecasting system with predictive analytics, trend analysis, and strategic planning tools for data-driven business decisions.",
      technologies: ["Forecasting", "Business Intelligence", "Analytics", "Visualization"],
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      metrics: [
        { label: "Forecast Accuracy", value: "89%", color: "text-indigo-600" },
        { label: "Planning Efficiency", value: "55%", color: "text-green-600" }
      ],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data-driven solutions showcasing expertise in analytics, AI, and business intelligence
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
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} text-white border-0 hover:opacity-90`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Data to Decisions Visualization */}
        <div className="mt-16">
          <Card className="p-8 shadow-lg border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-500" />
              Data to Decisions Journey
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "Collect", icon: "📊", color: "bg-blue-100 dark:bg-blue-900" },
                { step: "Analyze", icon: "🔍", color: "bg-purple-100 dark:bg-purple-900" },
                { step: "Visualize", icon: "📈", color: "bg-green-100 dark:bg-green-900" },
                { step: "Insights", icon: "💡", color: "bg-yellow-100 dark:bg-yellow-900" },
                { step: "Decisions", icon: "🎯", color: "bg-red-100 dark:bg-red-900" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 text-2xl`}>
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">{item.step}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute mt-8 ml-16 w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}