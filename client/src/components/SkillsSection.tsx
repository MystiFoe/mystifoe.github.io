import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Brain, 
  Code2,
  TrendingUp,
  Zap,
  Bot,
  Users,
  GitBranch,
  Layers
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      skills: [
        { name: "Product Roadmap", level: "Expert" },
        { name: "PRD Writing", level: "Expert" },
        { name: "User Stories", level: "Expert" },
        { name: "Backlog Management", level: "Expert" },
        { name: "A/B Testing", level: "Advanced" },
        { name: "Go-to-Market", level: "Advanced" },
        { name: "UAT & QA", level: "Advanced" },
        { name: "Agile / Scrum", level: "Expert" }
      ]
    },
    {
      title: "AI & LLM Products",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "LangChain", level: "Expert" },
        { name: "Claude API", level: "Expert" },
        { name: "RAG Systems", level: "Expert" },
        { name: "AI Agents", level: "Expert" },
        { name: "Prompt Engineering", level: "Expert" },
        { name: "Workflow Automation", level: "Advanced" },
        { name: "GPT APIs", level: "Advanced" },
        { name: "Agentic Workflows", level: "Advanced" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30",
      skills: [
        { name: "SQL", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Tableau", level: "Advanced" },
        { name: "Google Analytics", level: "Advanced" },
        { name: "Cohort Analysis", level: "Advanced" },
        { name: "KPI Dashboards", level: "Expert" },
        { name: "Mixpanel", level: "Intermediate" }
      ]
    },
    {
      title: "Execution & Tools",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      skills: [
        { name: "Jira", level: "Expert" },
        { name: "Notion", level: "Expert" },
        { name: "Figma", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Razorpay API", level: "Advanced" },
        { name: "Replit / Cursor", level: "Expert" },
        { name: "Stakeholder Mgmt", level: "Expert" },
        { name: "First-principles", level: "Expert" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-500/20 text-green-700 border-green-500/50";
      case "Advanced": return "bg-blue-500/20 text-blue-700 border-blue-500/50";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/50";
      default: return "bg-gray-500/20 text-gray-600 border-gray-500/50";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Product management, AI engineering, and data analytics — end to end
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`p-6 bg-white/90 backdrop-blur-lg border-2 ${category.borderColor} hover:shadow-xl transition-all`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                    <Badge className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 slide-up">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Zap className="w-6 h-6 mr-3 text-blue-600" />
              Impact Metrics
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Layers className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-1">5+</p>
                <p className="text-gray-600 text-sm">Production AI Systems Shipped</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600 mb-1">₹2Cr</p>
                <p className="text-gray-600 text-sm">Enterprise Client Acquisition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-purple-600 mb-1">65%</p>
                <p className="text-gray-600 text-sm">Workload Reduction via AI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-1">50+</p>
                <p className="text-gray-600 text-sm">Daily Active Users</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
